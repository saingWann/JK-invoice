import React from "react";
import NavbarComponent from "./navbar/Navbar.component";
import FooterComponent from "./components/footer/Footer.component";
import InvoiceComponent from "./components/invoice/Invoice.component";

const App = () => {
  return (
    <>
      <NavbarComponent />
      <InvoiceComponent />
      <FooterComponent />
    </>
  );
};

export default App;
