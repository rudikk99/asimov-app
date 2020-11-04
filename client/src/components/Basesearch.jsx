import React from 'react'
import '../css/basesearch.css'
import ScrollableAnchor from 'react-scrollable-anchor'

export default props => {
    const { id } = props;
    return <ScrollableAnchor id={'basesearch-scroll'}>
    <section id={id}>
        <div className="line"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>My further thoughts ... </h1>
                    <h5>regarding performance, scalability, etc:</h5>
                    <h4>Thinking about the long-term solution I would propose for such system: </h4>

                    <h4> First of all, PostgreSQL is better then Mongo handeling larger systems with rigid structure.</h4>
                    
                    <h4>I expect that this system will store billions of records with heavy reads and writes and in a long-term relational database might not be scalable enough
                    to sustain such a volume.</h4> 
                    <h4> I would recommend looking at a sharded database that can automatically grow horizontally without a single point of failure.
                    Preferably such a database should natively support JSON data type to offer information retrieval based on the JSON field values.
                    Maybe Cassandra could be a good choice. On top of Cassandra, we could also run a Graph DB extension to appropriately structure data, store relations, and provide 
                    fast traversal performance. </h4>

                    <h4> For the server web layer, I would use a scalable farm of docker containers to host web REST API for clients and communicate to the database backend.
                    Load-balancer would be hosted in front of the docker farm to distribute requests. </h4>

                    <h4> Stateless REST API requests coming from web clients authenticated with OAuth protocol. If one of the Docker containers dies, a request will be handled by the next one.
                    Please find a high-level diagram below. </h4>

                    <img src={require('../img/DNAservice.jpg')} />


                    <h5>regarding what else to add to the page:</h5>
                    <h4>the functionality to perform a search in public DB (Blast) and recive return data </h4>
                    <h4>in case nothing has been found, it might be usefull to be able to "order" desired full seq from partner/departement</h4>
                    <h4>there is a posibility to incorporate flexible search with the use of regular expressions (for example: AT*T) </h4>
                    


                </div>
            </div>
        </div>
        <div className="line line-bottom"> </div>        
    </section>
    </ScrollableAnchor>
}