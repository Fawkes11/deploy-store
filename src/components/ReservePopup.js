import React, { useState, useRef } from "react";
import { Col, Row, Form, InputGroup, Button } from "react-bootstrap";
import { XSquareFill } from "react-bootstrap-icons";
import "../styles/reservePopup.css";
import emailjs from "emailjs-com";
export default function ReservePopup(props) {
  const [validated, setValidated] = useState(false);

  const forma = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const temp = e.currentTarget;
    if (temp.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);

    if (validated === true) {
      emailjs
        .sendForm(
          "service_tv96eys",
          "template_ihp7ixc",
          forma.current,
          "user_1fIetOJnEqYyFFcKdpAkZ"
        )
        .then(
          (result) => {
            alert("Su reservacion fue realizada de manera exitosa");
          },
          (error) => {
            alert(`Reservacion ${error.text}`);
          }
        );
      setTimeout(() => {
        props.setServpopup(false);
      }, 2000);
    }
  };
  return props.servpopup ? (
    <div className="servicepopup">
      <div className="service-popup-inner">
        <Form
          noValidate
          ref={forma}
          validated={validated}
          onSubmit={sendEmail}
          className="my-2"
        >
          <h2 className="my-3">RESERVA</h2>

          <Row className="my-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Pedro"
                name="name"
              />
              <Form.Control.Feedback>¡Se ve bien!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Por favor ingrese un nombre valido.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Perez"
                name="last_name"
              />
              <Form.Control.Feedback>¡Se ve bien!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Por favor ingrese un apellido valido.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="my-3">
            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="salsa@gmail.com"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback>¡Se ve bien!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese un Email valido.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
              <Form.Label>Celular</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">+57</InputGroup.Text>
                <Form.Control
                  name="celular"
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
            <Form.Group as={Col} md="8" controlId="formGridState">
              <Form.Label>Evento</Form.Label>
              <Form.Select
                name="to_event"
                className="text-center"
                defaultValue={props.props.tittle}
              >
                <option>Celebracion de cumpleaños</option>
                <option>Aniversario</option>
                <option>Fiestas infantiles</option>
                <option>Declaraciones o propuestas</option>
                <option>Despedidas</option>
                <option>Cena con amigos</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Numero de personas</Form.Label>
              <Form.Control
                className="text-center"
                min={1}
                max={20}
                type="number"
                name="person_number"
                placeholder={4}
                required
              />
              <Form.Control.Feedback type="invalid">
                Proporcione un numero válido.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="my-3">
            <Form.Group as={Col} md="6" controlId="formGridState">
              <Form.Label>Evento</Form.Label>
              <Form.Control type="date" name="date" required></Form.Control>
              <Form.Control.Feedback type="invalid">
                Proporcione una hora válida.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>Numero de personas</Form.Label>
              <Form.Control type="time" name="hour" required />
              <Form.Control.Feedback type="invalid">
                Proporcione una hora válida.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              name="message"
              placeholder="Deja tus recomendaciones adicionales aqui."
              style={{ height: "100px" }}
            />
          </Form.Group>

          <Form.Group
            className="mb-3 d-flex justify-content-center"
            controlId="validationCustom05"
          >
            <Form.Check
              required
              label="Acepto términos y condiciones."
              feedback="Debes estar de acuerdo antes de enviar."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit" className="reserve-btn">
            Reservar
          </Button>
        </Form>
        <button
          className="service-close-btn"
          onClick={() => props.setServpopup(false)}
        >
          <XSquareFill color="darkred" size={25} />
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}
