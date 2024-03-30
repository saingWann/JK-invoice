import React from "react";
import TableComponent from "./table/Table.component";
import Container from "../Container";
import PrintBtnComponent from "../printBtn/PrintBtn.component";
import InvoiceHeaderComponent from "./invoiceHeader/InvoiceHeader.component";
import AddressComponent from "./address/Address.component";
import InvoiceFooterComponent from "../../invoiceFooter/InvoiceFooter.component";

const InvoiceComponent = () => {
  return (
    <Container>
      <div
        className="shadow-md w-3/4 mx-auto p-5 lg:p-10 lg:mt-10"
        id="print-content"
      >
        <InvoiceHeaderComponent />
        <TableComponent />
        <InvoiceFooterComponent />
        <AddressComponent />
      </div>

      <div className="w-3/4 mx-auto flex justify-end my-10">
        <PrintBtnComponent />
      </div>
    </Container>
  );
};

export default InvoiceComponent;
