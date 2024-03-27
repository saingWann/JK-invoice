import React from "react";
import TableComponent from "./table/Table.component";
import Container from "../Container";
import DatepickerComponent from "./datepicker/Datepicker.component";
import PrintBtnComponent from "../printBtn/PrintBtn.component";
import InvoiceHeaderComponent from "./invoiceHeader/InvoiceHeader.component";
import AddressComponent from "./address/Address.component";

const InvoiceComponent = () => {
  return (
    <Container>
      <div className="shadow-md p-5 lg:p-10 lg:mt-10" id="print-content">
        <InvoiceHeaderComponent />
        <TableComponent />
      </div>
      <AddressComponent />
      <div className="w-full flex justify-end my-10">
        <PrintBtnComponent />
      </div>
    </Container>
  );
};

export default InvoiceComponent;
