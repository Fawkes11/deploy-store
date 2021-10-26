import Carousel from '../components/Carousel'
import moduleName from '../components/Presentation'
import React, { Component } from 'react'
import Presentation from '../components/Presentation'
import PreviewServices from '../components/PreviewServices'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <Presentation />
                <PreviewServices />
            </div>
        )
    }
}
