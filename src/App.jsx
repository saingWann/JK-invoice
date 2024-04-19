import React from "react";
import NavbarComponent from "./navbar/Navbar.component";
import FooterComponent from "./components/footer/Footer.component";
import InvoiceComponent from "./components/invoice/Invoice.component";
import Hero from "./hero/Hero";

import { Route, Routes } from "react-router-dom";
import LoginPageComponent from "./Login.page.component";
import InvoicePageComponent from "./Invoice.page.component";

const App = () => {
  return (
    <>
      <NavbarComponent />
      {/* <Hero />
      <InvoiceComponent /> */}
      <Routes>
        <Route index element={<LoginPageComponent />} />

        <Route path="invoice" element={<InvoicePageComponent />} />
        <Route path="profile" element={<InvoicePageComponent />} />
      </Routes>

      <FooterComponent />
    </>
  );
};

export default App;
