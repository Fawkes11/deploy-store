import React from "react";
import logo from "../images/logo@2x.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles/Navigation.css";
import { Link, NavLink } from "react-router-dom";
import CartCounterIcon from "./miniComponents/CartCounterIcon";

const Navegacion = () => {
  return (
    <Container id="header">
      <Navbar collapseOnSelect expand="lg" className="px-3 mt-2" id="navbar">
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="restaurant_logo" width="110px" />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <NavLink
              activeStyle={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "rgb(145, 73, 26)",
              }}
              className="nav-link"
              to="/Home"
            >
              Inicio
            </NavLink>
            <NavLink activeStyle={{
                fontWeight: "bold",
                color: "rgb(145, 73, 26)",
              }} className="nav-link" to="/About">
              Nosotros
            </NavLink>
            <NavLink activeStyle={{
                fontWeight: "bold",
                color: "rgb(145, 73, 26)",
              }} className="nav-link" to="/Menu">
              Menú
            </NavLink>
            <NavLink activeStyle={{
                fontWeight: "bold",
                color: "rgb(145, 73, 26)",
              }} className="nav-link" to="/Services">
              Servicios
            </NavLink>
            <NavLink activeStyle={{
                fontWeight: "bold",
                color: "rgb(145, 73, 26)",
              }} className="nav-link" to="/Contact">
              Contáctanos
            </NavLink>
            <Link className="nav-link position-relative" to="/CartPage">
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
