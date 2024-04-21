import React, { useEffect } from "react";
import Hero from "./hero/Hero";
import InvoiceComponent from "./components/invoice/Invoice.component";
import { useNavigate } from "react-router-dom";

const InvoicePageComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <Hero />
      <InvoiceComponent />
    </>
  );
};

export default InvoicePageComponent;
