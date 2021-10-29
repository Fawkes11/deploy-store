import React, { Component } from 'react'
import Presentation from '../components/Presentation'
import TestimonialCarousel from '../components/TestimonialCarousel'

export default class About extends Component {
    render() {
        return (
            <div>
                <Presentation style={{paddingTop: '200px'}}/>
                <TestimonialCarousel />
            </div>
        )
    }
}
