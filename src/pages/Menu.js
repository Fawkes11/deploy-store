import React, { Component } from 'react'
import MenuComponent from '../components/MenuComponent'
import Header from '../components/Header'

import bg_breakfast from '../images/bg-breakfast.jpg'

export default class Menu extends Component {
    render() {
        return (
            <div>
                <Header fondo={bg_breakfast}/>
                <MenuComponent />
            </div>
        )
    }
}
