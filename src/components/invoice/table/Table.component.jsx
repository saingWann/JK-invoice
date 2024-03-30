import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Grip } from "lucide-react";

const TableComponent = () => {
  const rowIds = ["row1", "row2", "row3"];
  const [tableRowsOrder, setTableRowsOrder] = useState(rowIds);
  const [isChange, setIsChange] = useState(false);

  const dragEnded = (result) => {
    if (!result.destination) return;
    const items = Array.from(tableRowsOrder);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTableRowsOrder(items);
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const calculateTotalInBaht = (rowId) => {
    const unit = document.querySelector(`#unit_${rowId}`);
    const unitPrice = document.querySelector(`#unit_price_${rowId}`);
    if (unit.value && unitPrice.value) {
      const amount = document.querySelector(`#amount_${rowId}`);

      const unitValue = unit.value.match(/(\d+)/);
      const unitPriceValue = unitPrice.value.match(/(\d+)/);

      // console.log(unitPriceValue[0], unitValue[0]);

      const totalAmount = unitValue[0] * unitPriceValue[0];
      console.log(totalAmount);
      amount.value = numberWithCommas(totalAmount) + " THB";
      // console.log({ unitValue, unitPriceValue });
      setIsChange(!isChange);
    }
    return;
  };

  const calculateTotalInMMK = (rowId) => {
    const unit = document.querySelector(`#unit_${rowId}`);
    const unitPrice = document.querySelector(`#unit_price_${rowId}`);
    if (unit.value && unitPrice.value) {
      const amount = document.querySelector(`#amount_${rowId}`);

      const unitValue = unit.value.match(/(\d+)/);
      const unitPriceValue = unitPrice.value.match(/(\d+)/);

      // console.log(unitPriceValue[0], unitValue[0]);

      const totalAmount = unitValue[0] * unitPriceValue[0];
      console.log(totalAmount);
      amount.value = numberWithCommas(totalAmount) + " MMK";
      // console.log({ unitValue, unitPriceValue });
      setIsChange(!isChange);
    }
    return;
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
                  // first row
                  if (index === 0) {
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
                                placeholder={`no`}
                                type="text"
                                value={1}
                                readOnly
                                className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 text-center"
                              />
                            </td>
                            <td
                              scope="row"
                              className=" py-4 font-medium text-black  "
                            >
                              <input
                                id={`descripiton_${rowId}`}
                                name={`descripiton_${rowId}`}
                                placeholder={`descripiton`}
                                type="text"
                                value="kg charge"
                                readOnly
                                className="rounded-lg uppercase bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 text-center"
                              />
                            </td>
                            <td className=" py-4 font-medium text-black  ">
                              <input
                                onChange={() => calculateTotalInBaht(rowId)}
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
                                onChange={() => calculateTotalInBaht(rowId)}
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
                          </tr>
                        )}
                      </Draggable>
                    );
                  }

                  // second row
                  if (index === 1) {
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
                                placeholder={`no`}
                                type="text"
                                value={2}
                                readOnly
                                className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 text-center"
                              />
                            </td>
                            <td
                              scope="row"
                              className=" py-4 font-medium text-black  "
                            >
                              <input
                                id={`descripiton_${rowId}`}
                                name={`descripiton_${rowId}`}
                                placeholder={`descripiton`}
                                type="text"
                                value="exchange rate"
                                readOnly
                                className="rounded-lg uppercase bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 text-center"
                              />
                            </td>
                            <td className=" py-4 font-medium text-black  ">
                              <input
                                onChange={() => calculateTotalInMMK(rowId)}
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
                                onChange={() => calculateTotalInMMK(rowId)}
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
                          </tr>
                        )}
                      </Draggable>
                    );
                  }

                  // else row
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
                              placeholder={`no`}
                              type="text"
                              className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 text-center"
                            />
                          </td>
                          <td
                            scope="row"
                            className=" py-4 font-medium text-black  "
                          >
                            <input
                              id={`descripiton_${rowId}`}
                              name={`descripiton_${rowId}`}
                              placeholder={`descripiton`}
                              type="text"
                              className="rounded-lg uppercase bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 text-center"
                            />
                          </td>
                          <td className=" py-4 font-medium text-black  ">
                            <input
                              onChange={() => calculateTotalInMMK(rowId)}
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
                              onChange={() => calculateTotalInMMK(rowId)}
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
