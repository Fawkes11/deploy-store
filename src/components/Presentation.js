import img_presentation_a from '../images/img-presentation-1.jpg'
import {Container, Image, Row} from 'react-bootstrap'
import '../styles/Presentation.css'

const presentation = () => {
    return(
        <Container id="presentacion" fluid>
            <div className="d-flex align-items-center" id="overlay-presentacion">
                <Container>
                    <Row>
                        <div className="col-md-6 text-center justify-content-center align-self-center">
                            <h4 className="fw-bold">Italia nos inspira!</h4>
                            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sunt ex. Eius quis ex natus quaerat, quisquam odit consectetur. Aliquam, vel sapiente quisquam maxime nostrum facilis id. Qui, odio aut.
                            In, molestiae culpa quam, libero tempora atque molestias repellendus, itaque neque rerum ad. Praesentium ut ex possimus. Reiciendis ut illum aperiam, molestias architecto exercitationem pariatur perspiciatis iure quod nam delectus?</p>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center position-relative">
                            <Image src={img_presentation_a} className="italian" thumbnail fluid />
                            <div className="adornoa position-absolute"></div>
                            <div className="adornob position-absolute"></div>
                        </div>
                    </Row>
                </Container>
            </div> 
        </Container>
    )
}

export default presentation;