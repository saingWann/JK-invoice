import React from "react";
import { useSelector } from "react-redux";
import KgChargeRow_Mm_th from "./KgChargeRow.mm-th";
import ReciverInfo_MM_TH from "./ReciverInfo_MM_TH";
import PackageFeeComponent from "./PackageFee.component";
import PickUpFee_mm_thComponenet from "./PickUpFee_mm_th.componenet";

const MM_TH_Table = () => {
  const tableRows = useSelector((state) => state.addRow);

  return (
    <div className="relative overflow-x-auto ">
      <table
        id="table"
        className="w-full rounded-lg overflow-hidden shadow-md lg:p-20 md:p-10 p-4"
      >
        <thead id="tabel-head" className="bg-red-600 uppercase ">
          <tr className="text-xs font-bold">
            <th
              id="th"
              scope="col"
              className="px-2 text-center py-3 w-1/12 text-white "
            >
              No
            </th>
            <th
              scope="col"
              className="px-2 text-center py-3  text-white w-6/12 "
            >
              description
            </th>
            <th
              scope="col"
              className="px-2 text-center py-3 w-1/12 text-white "
            >
              quantity
            </th>
            <th
              scope="col"
              className="px-2 w-2/12 text-center py-3  text-white "
            >
              Price
            </th>
            <th
              scope="col"
              className="px-2 w-2/12 text-center py-3  text-white "
            >
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
                <PickUpFee_mm_thComponenet
                  placeholder="pick up fee"
                  key={row}
                  rowId={row}
                  rowNo={2}
                />
              );
            }

            if (index === 2) {
              return (
                <PackageFeeComponent
                  key={row}
                  rowNo={3}
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
