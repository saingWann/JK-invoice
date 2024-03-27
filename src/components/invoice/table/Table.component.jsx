import React from "react";
import TableRowComponent from "./TableRow.component";

const TableComponent = () => {
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
              className="px-2 text-center py-3  text-white "
            >
              No
            </th>
            <th
              scope="col"
              className="px-2 text-center py-3  text-white w-1/2 "
            >
              description
            </th>
            <th scope="col" className="px-2 text-center py-3  text-white ">
              unit
            </th>
            <th scope="col" className="px-2 text-center py-3  text-white ">
              Price
            </th>
            <th scope="col" className="px-2 text-center py-3  text-white ">
              amount
            </th>
          </tr>
        </thead>

        <tbody>
          <TableRowComponent />
          <TableRowComponent />
          <TableRowComponent />
          <TableRowComponent />
          <TableRowComponent />
          <TableRowComponent />
          <TableRowComponent />
          <TableRowComponent />
          <TableRowComponent />
          <TableRowComponent />
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
