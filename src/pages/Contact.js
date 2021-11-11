import React from "react";
import Header from "../components/Header";
import bg_contact from "../images/bg-contact.jpg";
import FormContact from "../components/FormContact";

export default function Contact() {
  return (
    <div>
      <Header fondo={bg_contact} />
      <FormContact />
    </div>
  );
}
