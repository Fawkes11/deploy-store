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
            const res = await fetch("http://localhost:3000/deploy-store/services.json");
            const data = await res.json();
            console.log(data)
            setServicios(data);
          } catch (error) {
            console.log(error);
          }

    }

    return(

        <Container fluid className="contServiceCard">
            <Row>
                {
                    servicios.map((serv) => {
                        return(
                            <Col>
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