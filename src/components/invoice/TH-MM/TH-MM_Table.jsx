import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Grip } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { reorderList } from "../../../state/TabelRowSlice";
import ExchangeRowComponent from "./ExchangeRow.component";
import DeliveryComponent from "./DeliveryRow.component";
import KgChargeRowComponent from "./Kgcharge.component";
import TotalAmountComponent from "./TotalAmount.component";
import PackageFeeComponent from "../MM-TH/PackageFee.component";

const TH_MM_Table = () => {
  const tableRows = useSelector((state) => state.addRow);
  // console.log(tableRows);
  const dispatch = useDispatch();

  const [isChange, setIsChange] = useState(false);

  // reorder list function
  const dragEnded = (result) => {
    // console.log(result);
    if (!result.destination) return;
    dispatch(reorderList(result));
  };

  // add coma to long number
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // calculate total in myanmar kyat
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

        {/* teble rows */}
        <DragDropContext onDragEnd={dragEnded}>
          <Droppable droppableId="rows">
            {(provided) => (
              <tbody {...provided.droppableProps} ref={provided.innerRef}>
                {tableRows.map((rowId, index) => {
                  // first row
                  if (index === 0) {
                    return (
                      <KgChargeRowComponent
                        key={rowId}
                        placeholder="kg charge"
                        rowId={rowId}
                        rowNo={1}
                      />
                    );
                  }

                  // second row
                  if (index === 1) {
                    return (
                      <ExchangeRowComponent
                        key={rowId}
                        rowNo={2}
                        placeholder="exchange rate"
                        rowId={rowId}
                      />
                    );
                  }

                  if (index === 2) {
                    return (
                      <TotalAmountComponent
                        key={rowId}
                        rowNo={rowId}
                        placeholder="Total Amount"
                      />
                    );
                  }
                  // third row
                  if (index === 3) {
                    return (
                      <DeliveryComponent
                        key={rowId}
                        rowNo={4}
                        placeholder="Delivery"
                        rowId={rowId}
                      />
                    );
                  }

                  if (index === 4) {
                    return;
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

        {/* add new table row */}
      </table>
    </div>
  );
};

export default TH_MM_Table;
