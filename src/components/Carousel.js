import React, { Component } from 'react'
import img_carousel_a from '../images/img-carousel-1.jpg'
import img_carousel_b from '../images/img-carousel-2.jpg'
import img_carousel_c from '../images/img-carousel-3.jpg'

export default class Carousel extends Component {
    render() {
        return (
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={img_carousel_a} class="d-block w-100" alt="img_carousel_a"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Pappardelle</h5>
                        <p>2x1</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={img_carousel_b} class="d-block w-100" alt="img_carousel_b"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Pizza</h5>
                        <p>Personal gratis en la compra de una pizza grande!!!</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={img_carousel_c} class="d-block w-100" alt="img_carousel_c"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Pasta en salsa bolognesa</h5>
                        <p>La clasica pasta vuelve a nosotros en un 2x1 para deleitarnos, por tiempo limitado!</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        )
    }
}
