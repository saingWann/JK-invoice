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
    if (allRecords) dispatch(calculateIndividualIncome());
  }, [allRecords]);

  return (
    <section className="rounded-b-lg bg-gradient-to-b from-gray-50/50 to-slate-100 p-10">
      <div>
        <p className="font-bold uppercase">this month income</p>
        <p className="text-4xl font-semibold">
          {totalIncome.toLocaleString()} MMK
        </p>
      </div>
      {individualIncome.th_mm && (
        <div
          id="scroll"
          className="-mt-20 mb-10 flex w-full translate-y-32 gap-5 overflow-x-auto px-4"
        >
          <IncomeCardDashboard
            incomeType="thai-myanmar"
            amount={individualIncome.th_mm}
            color="red"
            percent={individualIncomePercentage.th_mm}
            cate="th-mm"
          />

          <IncomeCardDashboard
            incomeType="myanmar-thai"
            amount={individualIncome.mm_th}
            color="sky"
            percent={individualIncomePercentage.mm_th}
            cate="mm-th"
          />

          <IncomeCardDashboard
            incomeType="air cargo"
            amount={individualIncome.airCargo}
            color="emerald"
            percent={individualIncomePercentage.airCargo}
            cate="air cargo"
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
