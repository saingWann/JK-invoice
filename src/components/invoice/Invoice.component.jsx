import React from "react";
import TableComponent from "./table/Table.component";
import Container from "../Container";
import DatepickerComponent from "./datepicker/Datepicker.component";
import PrintBtnComponent from "../printBtn/PrintBtn.component";

const InvoiceComponent = () => {
  return (
    <Container>
      <div className="shadow-md p-10 mt-10" id="print-content">
        <p className="text-7xl font-bold text-center text-red-600">JK</p>
        <div className="my-10 flex justify-between items-start">
          <ul className="text-sm font-semibold w-1/2 flex flex-col gap-1">
            <li className="flex gap-8 items-center ">
              <label htmlFor="customerName">Name</label>
              <input
                placeholder="customer name"
                type="text"
                name="customerName"
                id="customerName"
                className="placeholder:font-light rounded-lg border-none focus:ring-red-600 w-full text-sm"
              />
            </li>
            <li className="flex gap-8 items-center ">
              <label htmlFor="customerPhone">Phone</label>
              <input
                placeholder="phone"
                type="text"
                name="customerPhone"
                id="customerPhone"
                className="placeholder:font-light rounded-lg border-none focus:ring-red-600 w-full text-sm"
              />
            </li>
            <li className="flex gap-5 items-center ">
              <label htmlFor="customerPhone">Address</label>
              <input
                placeholder="address"
                type="text"
                name="customerPhone"
                id="customerPhone"
                className="placeholder:font-light rounded-lg border-none focus:ring-red-600 w-full text-sm"
              />
            </li>
          </ul>

          {/* date */}
          <div className="flex gap-4 items-center">
            <p className="text-sm font-semibold">Date</p>
            <DatepickerComponent />
          </div>
        </div>
        <TableComponent />
      </div>
      <div className="w-full flex justify-end my-10">
        <PrintBtnComponent func={printDiv.bind("print-content")} />
      </div>
    </Container>
  );
};

export default InvoiceComponent;
