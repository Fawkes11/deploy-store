import React, { Component } from 'react'
import Header from '../components/Header'
import ServicesComponent from '../components/ServicesComponent'
import bg_header_services from '../images/bg-header-services.jpg'

export default class Services extends Component {
    render() {
        return (
            <div>
                <Header fondo={bg_header_services}/>
                <ServicesComponent />
            </div>
        )
    }
}
