import React from 'react'
import Header from '../components/Header'
import bg_header_services from '../images/bg-header-services.jpg'
import FormContact from '../components/FormContact'


const Contact = () => {
    return (
        <div>
            <Header fondo={bg_header_services}/>
            <FormContact />
        </div>
    )
}

export default Contact