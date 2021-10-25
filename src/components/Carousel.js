import { Carousel } from 'react-bootstrap';
import img_carousel_a from '../images/img-carousel-1.jpg'
import img_carousel_b from '../images/img-carousel-2.jpg'
import img_carousel_c from '../images/img-carousel-3.jpg'

const Carousela = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img_carousel_a}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h5>Pappardelle</h5>
                    <p>2x1</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img_carousel_b}
                alt="Second slide"
                />
                
                <Carousel.Caption>
                    <h5>Pizza</h5>
                    <p>Personal gratis en la compra de una pizza grande!!!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img_carousel_c}
                alt="Third slide"
                />

                <Carousel.Caption>
                    <h5>Pasta en salsa bolognesa</h5>
                    <p>La clasica pasta vuelve a nosotros en un 2x1 para deleitarnos, por tiempo limitado!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Carousela;
