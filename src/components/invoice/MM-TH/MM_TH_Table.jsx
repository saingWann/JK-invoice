import React from "react";
import { useSelector } from "react-redux";
import KgChargeRow_Mm_th from "./KgChargeRow.mm-th";
import ReciverInfo_MM_TH from "./ReciverInfo_MM_TH";
import PackageFeeComponent from "./PackageFee.component";
import PickUpFee_mm_thComponenet from "./PickUpFee_mm_th.componenet";
import ExchangeRow from "./ExchangeRow";
import TotalAmountMMK from "./TotalAmountMMK";

const MM_TH_Table = () => {
  const tableRows = useSelector((state) => state.addRow);

  return (
    <div className="relative overflow-x-auto">
      <table
        id="table"
        className="w-full overflow-hidden rounded-lg p-4 shadow-md md:p-10 lg:p-20"
      >
        <thead id="tabel-head" className="bg-red-600 uppercase">
          <tr className="text-xs font-bold">
            <th
              id="th"
              scope="col"
              className="w-1/12 px-2 py-3 text-center text-white"
            >
              No
            </th>
            <th scope="col" className="w-5/12 px-2 py-3 text-center text-white">
              description
            </th>
            <th scope="col" className="w-2/12 px-2 py-3 text-center text-white">
              quantity
            </th>
            <th scope="col" className="w-2/12 px-2 py-3 text-center text-white">
              Price
            </th>
            <th scope="col" className="w-2/12 px-2 py-3 text-center text-white">
              amount
            </th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row, index) => {
            if (index === 0) {
              return (
                <KgChargeRow_Mm_th
                  placeholder="kg charge"
                  key={row}
                  rowId={row}
                  rowNo={1}
                />
              );
            }

            if (index === 1) {
              return (
                <ExchangeRow
                  placeholder="exchange rate"
                  key={row}
                  rowId={row}
                  rowNo={2}
                />
              );
            }

            if (index === 2) {
              return (
                <TotalAmountMMK
                  placeholder="total in mmk"
                  key={row}
                  rowId={row}
                  rowNo={3}
                />
              );
            }

            if (index === 3) {
              return (
                <PickUpFee_mm_thComponenet
                  placeholder="pick up fee"
                  key={row}
                  rowId={row}
                  rowNo={4}
                />
              );
            }

            if (index === 4) {
              return (
                <PackageFeeComponent
                  key={row}
                  rowNo={5}
                  placeholder="package fee"
                  rowId={row}
                />
              );
            }
          })}
        </tbody>
      </table>
      <ReciverInfo_MM_TH />
    </div>
  );
};

export default MM_TH_Table;
