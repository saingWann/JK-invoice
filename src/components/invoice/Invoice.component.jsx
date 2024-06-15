import React, { useEffect, useState } from "react";
import Container from "../Container";
import PrintBtnComponent from "../printBtn/PrintBtn.component";
import InvoiceHeaderComponent from "./invoiceHeader/InvoiceHeader.component";
import AddressComponent from "./address/Address.component";
import InvoiceFooterComponent from "../../invoiceFooter/InvoiceFooter.component";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import MM_TH_Table from "./MM-TH/MM_TH_Table";
import TH_MM_Table from "./TH-MM/TH-MM_Table";
import InvoiceFooterMMTHComponent from "./MM-TH/InvoiceFooterMMTH.component";
import AC_tableComponent from "./AIR_CARGO/AC_table.component";
import ACinvoiceFooterComponent from "./AIR_CARGO/ACinvoiceFooter.component";

const InvoiceComponent = () => {
  const voucherType = useSelector((state) => state.voucherType);
  const { voucherNumber } = useSelector((state) => state.allRecords);

  return (
    <Container>
      <div
        className="relative mx-auto w-full p-5 font-body lg:mt-10 lg:w-3/4 lg:p-10"
        id="print-content "
      >
        {voucherNumber && (
          <p className="absolute right-12 top-20" id="voucherNumber">
            VoucherNo:
            <span className="ml-2 text-sm font-light">{voucherType}</span>
            <span className="font-body font-semibold">
              {voucherNumber < 10
                ? voucherNumber > 10 && voucherNumber < 100
                  ? voucherNumber > 100 && voucherNumber < 1000
                    ? String(voucherNumber).padStart(3, 0)
                    : String(voucherNumber).padStart(2, 0)
                  : String(voucherNumber).padStart(4, 0)
                : String(voucherNumber).padStart(4, 0)}
            </span>
          </p>
        )}
        <InvoiceHeaderComponent />
        {/* <TableComponent /> */}

        {voucherType === "THAI - MYANMAR" && <TH_MM_Table />}
        {voucherType === "THAI - MYANMAR" && <InvoiceFooterComponent />}

        {voucherType === "MYANMAR - THAI" && <MM_TH_Table />}
        {voucherType === "MYANMAR - THAI" && <InvoiceFooterMMTHComponent />}

        {voucherType === "AIR CARGO" && <AC_tableComponent />}
        {voucherType === "AIR CARGO" && <ACinvoiceFooterComponent />}

        {voucherType === "THAI - MYANMAR" && (
          <AddressComponent marginTop="mt-24" />
        )}
        {voucherType === "MYANMAR - THAI" && (
          <AddressComponent marginTop="mt-1" />
        )}
        {voucherType === "AIR CARGO" && <AddressComponent marginTop="mt-1" />}
      </div>

      <div className="mx-auto my-10 flex w-3/4 justify-end">
        <PrintBtnComponent />
      </div>
    </Container>
  );
};

export default InvoiceComponent;
