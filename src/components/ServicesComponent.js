import React, {useState, useEffect} from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import EspecificServiceCard from './Cards/EspecificServiceCard'

const ServicesComponent = () => {

    const [serviciosE, setServiciosE] = useState([])

    useEffect(() => {
        llamadoServiciosE();
    },[])

    const llamadoServiciosE = async() => {
        try {
            const res = await fetch('https://my-json-server.typicode.com/Fawkes11/FAKE_API_servicesB/services');
            const data = await res.json();
            setServiciosE(data);
          } catch (error) {
            console.log(error);
          }
    }

    return (
        <Container>
            <Row>
                <Col className='p-4'>
                    <p style={serviceStyles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore non similique facilis iure rem! Similique qui incidunt quas voluptatem labore repellat possimus reiciendis dolorem, ipsa laboriosam architecto? Provident, ab ducimus?</p>
                </Col>
                <Col className='p-4' >
                    <p style={serviceStyles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore non similique facilis iure rem! Similique qui incidunt quas voluptatem labore repellat possimus reiciendis dolorem, ipsa laboriosam architecto? Provident, ab ducimus?</p>
                </Col>
            </Row>
            <Row>
                {
                    serviciosE.map((serv,id) => {
                        return(
                            <Col key={id}>
                                <EspecificServiceCard
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

const serviceStyles = {
    p:
    {
        textAlign : 'justify'
    }
}

export default ServicesComponent;
