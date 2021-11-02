import React from 'react'
import { Carousel, Image } from 'react-bootstrap';
import '../styles/testimonialCarousel.css'

import img_testimonial_a from '../images/img-testimonial-1.png'
import img_testimonial_b from '../images/img-testimonial-2.png'
import img_testimonial_c from '../images/img-testimonial-3.png'

const TestimonialCarousel = () => {
    return (
        
        <Carousel fade style={{margin: '20px 40px'}}>
            <Carousel.Item className="carouselItem">
                <Image src={img_testimonial_a} fluid roundedCircle thumbnail style={{width: '17%'}}/>
                <Carousel.Caption className="captionCarousel">
                    <h5>Adriano Lombardi</h5>
                    <p>Una experiencia en alta cocina. Para repetir.<br/>Recomendable. Los postres y vinos fabulosos.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
                <Image src={img_testimonial_b} fluid roundedCircle thumbnail style={{width: '17%'}}/>
                <Carousel.Caption className="captionCarousel">
                    <h5>Gianna Bianchi</h5>
                    <p>El restaurante es increible y su comida<br/> indescriptible.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
                <Image src={img_testimonial_c} fluid roundedCircle thumbnail style={{width: '17%'}}/>
                <Carousel.Caption className="captionCarousel">
                    <h5>Antonella Mancini</h5>
                    <p>Muy buena relación calidad-precio y un trato<br/> exquisito: educado, atento y nada empalagoso.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        
        
    )
}

export default TestimonialCarousel;


