import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

function Login() {
  return (
    <Form className="my-5">
      <h2 className="my-5">Iniciar sesión</h2>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Row>
        <Col>
          <a href="#">Olvidó su contraseña?</a>
        </Col>
        <Col>
          <Button>Registrarse</Button>
        </Col>
        <Col>
          <Button type="submit">Iniciar sesion</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default Login;
