import React from "react";
import TableRowComponent from "./TableRow.component";

const TableComponent = () => {
  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg shadow-md overflow-hidden">
          <thead className="text-sm text-white uppercase bg-red-500 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3 w-1/2">
                description
              </th>
              <th scope="col" className="px-6 py-3">
                unit
              </th>
              <th scope="col" className="px-6 py-3">
                unit Price
              </th>
              <th scope="col" className="px-6 py-3">
                amount
              </th>
            </tr>
          </thead>
          <tbody>
            <TableRowComponent />
            <TableRowComponent />
            <TableRowComponent />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
