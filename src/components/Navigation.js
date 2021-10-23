import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navigation.css'
import logo from '../images/logo@2x.png'

export default class Navigation extends Component {
    render() {
        return (
            <div class="container" id="header">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">
                            <img src={logo} alt="restaurant_logo" width="110px"/>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto"> 
                                <li class="nav-item px-3">
                                    <Link class="nav-link active" to="/deploy-store">
                                    Inicio
                                    </Link>
                                    {/* <a  aria-current="page" href="/">Inicio</a> */}
                                </li>
                                <li class="nav-item px-3">
                                    <Link class="nav-link" to="/deploy-store/About">Nosotros</Link>
                                </li>
                                <li class="nav-item px-3">
                                    <Link class="nav-link" to="/deploy-store/Menu">Menú</Link>
                                </li>
                                <li class="nav-item px-3">
                                    <Link class="nav-link" to="/deploy-store/Services">Servicios</Link>
                                </li>
                                <li class="nav-item px-3"> 
                                    <Link class="nav-link" to="/deploy-store/Contact">Contáctanos</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
