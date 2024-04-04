import React from "react";
import TableComponent from "./TH-MM/TH-MM_Table";
import Container from "../Container";
import PrintBtnComponent from "../printBtn/PrintBtn.component";
import InvoiceHeaderComponent from "./invoiceHeader/InvoiceHeader.component";
import AddressComponent from "./address/Address.component";
import InvoiceFooterComponent from "../../invoiceFooter/InvoiceFooter.component";
import { useDispatch } from "react-redux";
import { addRow, fillRow } from "../../state/TabelRowSlice";
import { useSelector } from "react-redux";

const InvoiceComponent = () => {
  const dispatch = useDispatch();
  const tableRows = useSelector((state) => state.addRow);
  return (
    <Container>
      <div
        className="shadow-md w-3/4 mx-auto p-5 lg:p-10 lg:mt-10"
        id="print-content"
      >
        <InvoiceHeaderComponent />
        <TableComponent />
        <InvoiceFooterComponent />
        <div className="w-full flex gap-5">
          <button
            id="addRowBtn"
            onClick={() => {
              dispatch(addRow());
            }}
            className="px-4 py-2 bg-green-600 text-white font-bold  hover:bg-green-500 active:bg-green-600 rounded-lg my-5 block "
          >
            add new row
          </button>
          <button
            id="addRowBtn"
            onClick={() => {
              dispatch(fillRow());
            }}
            className={`px-4 py-2 bg-orange-500 text-white font-bold  hover:bg-orange-400 active:bg-orange-500 rounded-lg my-5 block ${
              tableRows.length === 10 && "hidden"
            }`}
          >
            fill rows
          </button>
        </div>
        <AddressComponent />
      </div>

      <div className="w-3/4 mx-auto flex justify-end my-10">
        <PrintBtnComponent />
      </div>
    </Container>
  );
};

export default InvoiceComponent;
