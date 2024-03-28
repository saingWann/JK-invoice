import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Grip } from "lucide-react";

import TableRowComponent from "./TableRow.component";

const TableComponent = () => {
  const rowIds = [
    "row1",
    "row2",
    "row3",
    "row4",
    "row5",
    "row6",
    "row7",
    "row8",
    "row9",
    "row10",
  ];
  const [tableRowsOrder, setTableRowsOrder] = useState(rowIds);
  const dragEnded = (result) => {
    if (!result.destination) return;
    const items = Array.from(tableRowsOrder);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTableRowsOrder(items);
  };

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

        {/* teble rows */}
        <DragDropContext onDragEnd={dragEnded}>
          <Droppable droppableId="rows">
            {(provided) => (
              <tbody {...provided.droppableProps} ref={provided.innerRef}>
                {tableRowsOrder.map((rowId, index) => {
                  return (
                    <Draggable key={rowId} draggableId={rowId} index={index}>
                      {(provided) => (
                        <tr
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                            flexWrap: "nowrap",
                          }}
                          id="tr"
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 active:bg-gray-100"
                        >
                          <td
                            scope="row"
                            className=" py-4 font-medium text-black  "
                          >
                            <input
                              id={`number_${rowId}`}
                              name={`number_${rowId}`}
                              type={`number_${rowId}`}
                              placeholder="no"
                              className="max-w-20 bg-transparent rounded-lg border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:text-gray-400 text-center"
                            />
                          </td>
                          <td
                            scope="row"
                            className=" py-4 font-medium text-black  "
                          >
                            <input
                              id={`descripiton_${rowId}`}
                              name={`descripiton_${rowId}`}
                              placeholder={`descripiton_${rowId}`}
                              type="text"
                              className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 text-center"
                            />
                          </td>
                          <td className=" py-4 font-medium text-black  ">
                            <input
                              id={`unit_${rowId}`}
                              name={`unit_${rowId}`}
                              placeholder="unit"
                              type="text"
                              className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 text-center"
                            />
                          </td>
                          <td
                            scope="row"
                            className=" py-4 font-medium text-black  "
                          >
                            <input
                              id={`unit_price_${rowId}`}
                              name={`unit_price_${rowId}`}
                              placeholder="unit price"
                              type="text"
                              className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 
                              text-center"
                            />
                          </td>
                          <td
                            scope="row"
                            className=" py-4 font-medium text-black relative overflow-y-hidden"
                          >
                            <input
                              id={`amount_${rowId}`}
                              name={`amount_${rowId}`}
                              placeholder="amount"
                              type="text"
                              className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 
                              text-center"
                            />
                            <Grip className="grip absolute right-0 top-6 opacity-30" />
                          </td>
                          {/* <td
                            scope="row"
                            className=" py-4 font-medium text-black flex relative"
                          >
                            <input
                              placeholder="amount"
                              type="text"
                              className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 
                              text-center"
                            />
                          </td> */}
                        </tr>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </tbody>
            )}
          </Droppable>
        </DragDropContext>
      </table>
    </div>
  );
};

export default TableComponent;
