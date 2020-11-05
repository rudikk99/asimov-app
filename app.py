from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

# set the project root directory as the static folder, you can set others.
app = Flask(__name__,
            static_url_path='',
            static_folder='client/build')

# CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://otwbapwjchbeud:f47e1469e731b49c086b0da1240a77f4f403769e7a8127a552e58bd4cc96192d@ec2-54-147-126-202.compute-1.amazonaws.com:5432/d9v8r2ohlbf0vh'
#app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost/gili_matan_rsvp'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Create our database model
class Record(db.Model):
    __tablename__ = "records"
    id = db.Column(db.Integer, primary_key=True)
    sid = db.Column(db.String(), unique=True)
    bases = db.Column(db.Text, unique=True)
    name = db.Column(db.String())
    createdAt = db.Column(db.DateTime)
    creatorhandle = db.Column(db.String())
    creatorid = db.Column(db.String())
    creatorname = db.Column(db.String())

    def __init__(self, sid, bases, name, createdAt, creatorhandle, creatorid, creatorname):
        self.sid = sid
        self.bases = bases
        self.name = name
        self.createdAt = createdAt
        self.creatorhandle = creatorhandle
        self.creatorid = creatorid
        self.creatorname = creatorname

    # def __repr__(self):
    #     return '<E-mail %r>' % self.email

    def to_json(self):
        return {
            'sid': self.sid,
            'bases': self.bases,
            'name': self.name,
            'createdAt': self.createdAt,
            'creatorhandle': self.creatorhandle,
            'creatorid': self.creatorid,
            'creatorname': self.creatorname
        }

@app.route('/')
def root():
    return app.send_static_file('index.html')

@app.route('/users/ping')
def ping_pong():
    return jsonify({
        'status': 'success',
        'message': 'pong!'
    })


@app.route('/record', methods=['GET', 'POST'])
def record():
    if request.method == "POST":
        text = request.form.get("text")
        results = db.execute(
            "SELECT * from records WHERE bases LIKE :text", {"text": f"%{text}%"}).fetchall()

        response_object = {
            'status': 'Success',
            'data': 'results' 
         }

    return jsonify(response_object), 40

if __name__ == '__main__':
    app.run()
