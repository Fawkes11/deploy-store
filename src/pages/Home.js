import Carousel from '../components/Carousel'
import React, { Component } from 'react'
import Presentation from '../components/Presentation'
import PreviewServices from '../components/PreviewServices'
import TestimonialCarousel from '../components/TestimonialCarousel'
import Recommendations from '../components/Recommendations'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <Presentation />
                <Recommendations />
                <PreviewServices />                
                <TestimonialCarousel />
            </div>
        )
    }
}
