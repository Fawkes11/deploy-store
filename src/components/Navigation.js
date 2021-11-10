import React from "react";
import logo from "../images/logo@2x.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles/Navigation.css";
import { Link } from "react-router-dom";
import CartCounterIcon from "./miniComponents/CartCounterIcon";

const Navegacion = () => {
  return (
    <Container id="header">
      <Navbar collapseOnSelect expand="lg" className="px-3 mt-2" id="navbar">
        <Navbar.Brand>
          <Link to="/deploy-store">
            <img src={logo} alt="restaurant_logo" width="110px" />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Link className="nav-link" to="/deploy-store">
              Inicio
            </Link>
            <Link className="nav-link" to="/deploy-store/About">
              Nosotros
            </Link>
            <Link className="nav-link" to="/deploy-store/Menu">
              Menú
            </Link>
            <Link className="nav-link active" to="/deploy-store/Services">
              Servicios
            </Link>
            <Link className="nav-link" to="/deploy-store/Contact">
              Contáctanos
            </Link>
            <Link
              className="nav-link position-relative"
              to="/deploy-store/CartPage"
            >
              <CartCounterIcon />
              <img
                alt="carrito de compras"
                src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
                width="50px"
              />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Navegacion;
