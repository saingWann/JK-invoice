import React, { useEffect, useState } from "react";
import IncomeCardDashboard from "./IncomeCard.dashboard";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { calculateIndividualIncome } from "../../state/data/recordsSlice";

const IncomeDashboard = () => {
  const {
    allRecords,
    individualIncome,
    totalIncome,
    individualIncomePercentage,
  } = useSelector((state) => state.allRecords);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateIndividualIncome());
  }, [allRecords]);

  return (
    <section className="bg-gray-100 p-10">
      <div>
        <p className="uppercase font-bold">this month income</p>
        <p className="font-semibold text-4xl">
          {totalIncome.toLocaleString()} MMK
        </p>
      </div>
      {individualIncome && (
        <div
          id="scroll"
          className="w-full overflow-x-auto flex  gap-5 -mt-20 translate-y-32 px-4 mb-10"
        >
          <IncomeCardDashboard
            incomeType="thai-myanmar"
            amount={individualIncome.th_mm}
            color="red"
            percent={individualIncomePercentage.th_mm}
          />
          <IncomeCardDashboard
            incomeType="myanmar-thai"
            amount={individualIncome.mm_th}
            color="sky"
            percent={individualIncomePercentage.mm_th}
          />

          <IncomeCardDashboard
            incomeType="air cargo"
            amount={individualIncome.airCargo}
            color="emerald"
            percent={individualIncomePercentage.airCargo}
          />
          <IncomeCardDashboard
            incomeType="myanmar-singapore"
            amount={individualIncome.mm_sga}
            color="blue"
            percent={individualIncomePercentage.mm_sga}
          />
          <IncomeCardDashboard
            incomeType="car rental"
            amount={individualIncome.carRental}
            color="orange"
            percent={individualIncomePercentage.carRental}
          />
        </div>
      )}
    </section>
  );
};

export default IncomeDashboard;
