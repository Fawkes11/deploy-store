import React from "react";
import { Button } from "react-bootstrap";
import { CartFill } from "react-bootstrap-icons";
import CheckoutCard from "./Cards/CheckoutCard";

function Checkout(props) {
  return (
    <>
      <Button onClick={() => props.setCheckout(false)}>
        <CartFill className="me-3" />
        Atras
      </Button>
      <CheckoutCard setCheckout={props.setCheckout} />
    </>
  );
}

export default Checkout;
