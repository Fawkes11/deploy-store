import React, { useState } from "react";
import { Col, Row, Image } from "react-bootstrap";
import ReservePopup from "../ReservePopup";

const ServiceCard = (props) => {
  const [servpopup, setServpopup] = useState(false);
  return (
    <Col
      lg={12}
      className="col-lg-12 mb-4 py-4 px-2 text-center"
      style={especificCard}
    >
      <ReservePopup
        props={props}
        servpopup={servpopup}
        setServpopup={setServpopup}
      />
      <Row className="d-flex justify-content-center align-items-center">
        <Col xs={6}>
          <Image
            src={props.img}
            style={{ width: "230px", borderRadius: "8px" }}
          />
        </Col>
        <Col xs={6}>
          <h5>{props.tittle}</h5>
          <p>{props.text}</p>
          <button
            className="productCardButton btn btn-info"
            onClick={() => setServpopup(true)}
          >
            RESERVAR
          </button>
        </Col>
      </Row>
    </Col>
  );
};
const especificCard = {
  minWidth: "500px",
  backgroundColor: "#e2e0d5",
  borderRadius: "16px",
};

export default ServiceCard;
