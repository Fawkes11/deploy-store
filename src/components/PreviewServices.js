import React, {useState, useEffect} from 'react'
import ServiceCard from './Cards/ServiceCard'
import {Container, Row, Col} from 'react-bootstrap'

import '../styles/contServiceCard.css'


 const PreviewServices = () => {

    const [servicios, setServicios] = useState([])

    useEffect(() => {
        llamadoServicios();
    },[])

    const llamadoServicios = async() => {
        try {
            const res = await fetch('https://my-json-server.typicode.com/Fawkes11/FAKE_API_services/services');
            const data = await res.json();
            setServicios(data);
          } catch (error) {
            console.log(error);
          }
    }

    return(

        <Container fluid className="contServiceCard">
            <Row>
                {
                    servicios.map((serv,id) => {
                        return(
                            <Col className='cElements' key={id}>
                                <ServiceCard
                                img={serv.img}
                                tittle={serv.tittle}
                                text={serv.text}
                                />
                            </Col> 
                        )
                    })
                }             
            </Row>
            
        </Container>

    )
    
}

export default PreviewServices