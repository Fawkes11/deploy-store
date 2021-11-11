import React, { useContext, useRef } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

import emailjs from "emailjs-com";
import CartContext from "../../modules/CartContext";

function CheckoutCard(props) {
  const CartCxt = useContext(CartContext);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tv96eys",
        "template_n4kci39",
        form.current,
        "user_1fIetOJnEqYyFFcKdpAkZ"
      )
      .then(
        (result) => {
          alert("Su pedido fue realizado de manera exitosa");
        },
        (error) => {
          alert(`Pedido ${error.text}`);
        }
      );
    setTimeout(() => {
      props.setCheckout(false);
      CartCxt.removeAllCart();
    }, 2000);
  };

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center" xs={12}>
          <Form className="my-5" ref={form} onSubmit={sendEmail}>
            <h3 className="text-center my-5">CHECKOUT</h3>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Ingresar nombre"
                  name="name"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridApellido">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Apellidos"
                  name="apellidos"
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formGridAddress1"
              >
                <Form.Label>Direccion</Form.Label>
                <Form.Control
                  placeholder="Carrera 1 # 00-00"
                  name="direccion"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridBarrio">
                <Form.Label>Barrio</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Barrio"
                  name="barrio"
                  required
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                required
              />
              <Form.Text className="text-muted">
                Nunca compartiremos su correo electrónico con nadie más.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                label="Acepto las condiciones generales y la política de confidencialidad."
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default CheckoutCard;
