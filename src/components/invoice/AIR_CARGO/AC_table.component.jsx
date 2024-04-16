import React from "react";
import { useSelector } from "react-redux";
import ACkgChargeComponent from "./ACkgCharge.component";
import ACdeliveryFeeComponent from "./ACdeliveryFee.component";
import ACexchangeRateComponent from "./ACexchangeRate.component";
import ACtotalAmountMMKComponent from "./ACtotalAmountMMK.component";
import ACrecieverInfoComponent from "./ACrecieverInfo.component";
import ACpickupFeeComponent from "./ACpickupFee.component";

const AC_tableComponent = () => {
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
              className="px-2 text-center py-3  text-white w-5/12 "
            >
              description
            </th>
            <th
              scope="col"
              className="px-2 text-center py-3 w-2/12 text-white "
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
                <ACkgChargeComponent
                  placeholder="kg charge"
                  key={row}
                  rowId={row}
                  rowNo={1}
                />
              );
            }

            if (index === 1) {
              return (
                <ACdeliveryFeeComponent
                  placeholder="delivery fee"
                  key={row}
                  rowId={row}
                  rowNo={2}
                />
              );
            }

            if (index === 2) {
              return (
                <ACexchangeRateComponent
                  key={row}
                  rowNo={3}
                  placeholder="exchagne rate"
                  rowId={row}
                />
              );
            }

            if (index === 3) {
              return (
                <ACtotalAmountMMKComponent
                  key={row}
                  rowNo={4}
                  placeholder="total amount"
                  rowId={row}
                />
              );
            }

            if (index === 4) {
              return (
                <ACpickupFeeComponent
                  key={row}
                  rowNo={5}
                  placeholder="pick up fee"
                  rowId={row}
                />
              );
            }
          })}
        </tbody>
      </table>
      <ACrecieverInfoComponent />
    </div>
  );
};

export default AC_tableComponent;
