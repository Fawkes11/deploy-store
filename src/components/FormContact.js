import React, { useState } from "react";
import { Container, Form, InputGroup, Row, Col, Button } from "react-bootstrap";

const FormContact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container fluid style={{ backgroundColor: "rgba(174, 122, 71, 0.4" }}>
      <Row>
        <Col className="d-flex justify-content-center" xs={12}>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="my-5"
          >
            <h2 className="my-3">CONTÁCTANOS</h2>
            <InputGroup hasValidation className="my-3">
              <InputGroup.Text>Asunto</InputGroup.Text>
              <Form.Control type="text" required />
              <Form.Control.Feedback type="invalid">
                Por favor ingrese un asunto valido.
              </Form.Control.Feedback>
            </InputGroup>

            <Row className="my-3">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Nombre</Form.Label>
                <Form.Control required type="text" placeholder="Pedro" />
                <Form.Control.Feedback>¡Se ve bien!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control required type="text" placeholder="Perez" />
                <Form.Control.Feedback>¡Se ve bien!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="my-3">
              <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                <Form.Label>Celular</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="salsa@gmail.com"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingrese un correo valido.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                <Form.Label>Celular</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">+57</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Cel"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingrese un numero de celular valido.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="my-3">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control type="text" placeholder="Bogota" required />
                <Form.Control.Feedback type="invalid">
                  Proporcione una ciudad válida.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>País</Form.Label>
                <Form.Control type="text" placeholder="Colombia" required />
                <Form.Control.Feedback type="invalid">
                  Proporcione un país válido.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Control
                required
                as="textarea"
                placeholder="Deja tus comentarios aqui."
                style={{ height: "100px" }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationCustom05">
              <Form.Check
                required
                label="Acepto términos y condiciones."
                feedback="Debes estar de acuerdo antes de enviar."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormContact;
