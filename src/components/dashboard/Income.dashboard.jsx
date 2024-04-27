import React, { useEffect, useState } from "react";
import IncomeCardDashboard from "./IncomeCard.dashboard";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { calculateIndividualIncome } from "../../state/data/recordsSlice";

const IncomeDashboard = () => {
  const { allRecords, individualIncome } = useSelector(
    (state) => state.allRecords
  );
  const dispatch = useDispatch();
  const [totalAdvanue, setTotalAdvanue] = useState(0);

  useEffect(() => {
    const totalIncome = allRecords.reduce((prev, currentValue) => {
      const numericValue = parseFloat(
        currentValue.totalMMK.replace(/[^0-9.-]+/g, "")
      );
      return prev + (isNaN(numericValue) ? 0 : numericValue);
    }, 0);
    dispatch(calculateIndividualIncome());
    // console.log(individualIncome);
    setTotalAdvanue(totalIncome);
  }, [allRecords]);

  return (
    <section className="bg-gray-100 p-10">
      <div>
        <p className="uppercase font-bold">this month income</p>
        <p className="font-semibold text-4xl">
          {totalAdvanue.toLocaleString()} MMK
        </p>
      </div>
      {individualIncome !== 0 && (
        <div
          id="scroll"
          className="w-full overflow-x-auto flex  gap-5 -mt-20 translate-y-24"
        >
          <IncomeCardDashboard
            incomeType="thai-myanmar"
            amount={individualIncome.th_mm}
            color="red"
          />
          <IncomeCardDashboard
            incomeType="myanmar-thai"
            amount={400000}
            color="sky"
          />

          <IncomeCardDashboard
            incomeType="air cargo"
            amount={400000}
            color="emerald"
          />
          <IncomeCardDashboard
            incomeType="myanmar-singapore"
            amount={400000}
            color="blue"
          />
          <IncomeCardDashboard
            incomeType="car rental"
            amount={400000}
            color="orange"
          />
        </div>
      )}
    </section>
  );
};

export default IncomeDashboard;
