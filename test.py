from flask_testing import TestCase
import json
import unittest
from app import db, app


class BaseTestCase(TestCase):
    def create_app(self):
        app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.test.db'
        app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
        return app

    def setUp(self):
        db.create_all()
        db.session.commit()

    def tearDown(self):
        db.session.remove()
        db.drop_all()


class TestRecord(BaseTestCase):
    def test_record_added(self):
        """Ensure the Record has beed added succefully"""
        with self.client:
            response = self.client.post(
                '/record',
                data=json.dumps({
                    'sid': 'seq_asQya4lk',
                    'bases': 'GATTACA',
                    'name': 'My Sequence',
                    'createdAt': '2017-04-20T18:11:56.283088+00:00',
                    'creatorhandle': 'lpasteur',
                    'creatorid': 'ent_jDKampO5',
                    'creatorname': 'Louis Pasteur'
                }),
                content_type='application/json',
            )
            data = json.loads(response.data.decode())
            self.assertEqual(response.status_code, 201)
            self.assertIn('success', data['status'])
            self.assertIn('Record has been added', data['message'])



if __name__ == '__main__':
    unittest.main()