import { Col, Container, Row, Image } from "react-bootstrap"
import pasta_bolonesa_ilforno from '../images/pasta_bolonesa_ilforno_1080x.jpg'
import pizza_fiorentina from '../images/Productos-e-commerse_pizzas-fiorentina_1080x.png'
import pizza_jamon_queso from '../images/Productos-e-commerse_pizzas-jamon-y-queso_1080x.png'
import pasta_carbonara_camaron from '../images/ilforno-restauranteitaliano-colombia-pasta-carbonara-camaron_1080x.png'
import img_menu from '../images/img-menu.jpg'

const recommendations = () => {
    return (
        <Container fluid className="vista-previa-menu">
            <Container>
                <Row>
                    <Col md={6}>
                        <h4>Recomendaciones de la semana</h4>
                        <Row>
                            <Col xs={12} md={6} className="mt-3">
                                <Image fluid rounded src={pasta_bolonesa_ilforno}/>
                            </Col>
                            <Col xs={12} md={6} className="mt-3">
                                <Image fluid rounded src={pizza_fiorentina}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6} className="mt-3">
                                <Image fluid rounded src={pizza_jamon_queso}/>
                            </Col>
                            <Col xs={12} md={6} className="mt-3">
                                <Image fluid rounded src={pasta_carbonara_camaron}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} className="mt-3" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Image fluid rounded src={img_menu} style={{width: '90%'}}/>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default recommendations
