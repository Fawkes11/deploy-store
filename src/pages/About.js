import React, { Component } from 'react'
import Employees from '../components/Employees'
import Presentation from '../components/Presentation'
import TestimonialCarousel from '../components/TestimonialCarousel'

export default class About extends Component {
    render() {
        return (
            <div>
                <Presentation style={{paddingTop: '200px'}}/>
                <Employees />
                <TestimonialCarousel />
            </div>
        )
    }
}
