import React, { Component } from 'react'
import logo from '../images/logo@2x.png'
import {Link} from 'react-router-dom'
import {Nav} from 'react-bootstrap';
import '../styles/footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div id="footer" className="d-flex flex-wrap justify-content-between align-items-center py-3">
                <a href="/" className="col-md-3 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <img src={logo} alt="restaurant_logo" width="110px"/>
                </a>
                
                <div className="col-md-5 justify-content-start">
                    <Nav>
                        <Link className="nav-link active" to="/deploy-store">Inicio</Link>
                        <Link className="nav-link" to="/deploy-store/About">Nosotros</Link>
                        <Link className="nav-link" to="/deploy-store/Menu">Menú</Link>
                        <Link className="nav-link" to="/deploy-store/Services">Servicios</Link>
                        <Link className="nav-link" to="/deploy-store/Contact">Contáctanos</Link>
                    </Nav>
                    <div className="ps-3">
                        <p >Restaurante Sal y Salsa Ltda. <br/>
                            Via Matteo Boiardo, 4, 00185 Roma RM, Italia <br/>
                            reservas@salysalsa.com <br/>
                            535-563-2632 <br/><br/>
                        </p>
                        <p id="copy">
                            @ Copyright 2021.
                        </p>
                    </div>
                </div>
                

                <div className="col-md-4 mb-0 text-muted">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23762.141834642378!2d12.50009421161002!3d41.887098944297975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2a03cb5f931e1591!2sSangio&#39;%20L&#39;Antico%20Forno%20-%20Ristorante%20Pizzeria!5e0!3m2!1ses!2sco!4v1631896243972!5m2!1ses!2sco" width="300" height="250"  allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        )
    }
}
