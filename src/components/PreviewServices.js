import React from 'react'
import ServiceCard from './Cards/ServiceCard'
import {Container, Row, Col} from 'react-bootstrap'

import img_services_a from '../images/mask.png'
import img_services_b from '../images/pastel-de-boda.png'
import img_services_c from '../images/cena.png'
import img_services_d from '../images/party.png'

import '../styles/contServiceCard.css'


export default function PreviewServices() {
    return (
        <Container fluid className="contServiceCard">
            <Row>
                <Col>
                    <ServiceCard
                    img={img_services_a}
                    tittle="Fiestas Tematicas"
                    text="lLorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nobis reprehenderit earum cupiditate sed."
                    />
                </Col>
                <Col>
                    <ServiceCard
                    img={img_services_b}
                    tittle="Matrimonios"
                    text="lLorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nobis reprehenderit earum cupiditate sed."
                    />
                </Col>
                <Col>
                    <ServiceCard
                    img={img_services_c}
                    tittle="Matrimonios"
                    text="lLorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nobis reprehenderit earum cupiditate sed."
                    />
                </Col>
                <Col>
                    <ServiceCard
                    img={img_services_d}
                    tittle="Matrimonios"
                    text="lLorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nobis reprehenderit earum cupiditate sed."
                    />
                </Col>
                
            </Row>
            

        </Container>
        
    )
}
