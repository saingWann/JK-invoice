import React from "react";
import NavbarComponent from "./navbar/Navbar.component";
import FooterComponent from "./components/footer/Footer.component";
import InvoiceComponent from "./components/invoice/Invoice.component";
import Hero from "./hero/Hero";

const App = () => {
  return (
    <>
      <NavbarComponent />
      <Hero />
      <InvoiceComponent />
      <FooterComponent />
    </>
  );
};

export default App;
