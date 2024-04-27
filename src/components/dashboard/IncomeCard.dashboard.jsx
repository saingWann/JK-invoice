import React from "react";

const IncomeCardDashboard = ({ incomeType, amount, color }) => {
  const gradientClasses = {
    red: "bg-gradient-to-r from-red-300 to-red-400",
    sky: "bg-gradient-to-r from-sky-300 to-sky-400",
    emerald: "bg-gradient-to-r from-emerald-300 to-emerald-400",
    blue: "bg-gradient-to-r from-blue-300 to-blue-400",
    orange: "bg-gradient-to-r from-orange-300 to-orange-400",
  };
  const gradientClass = gradientClasses[color] || "";

  return (
    <div
      className={`${gradientClass} w-1/4 rounded-lg px-6 py-8 text-white relative overflow-hidden flex-shrink-0`}
    >
      <div className="size-28 bg-white/10 absolute top-0 -right-10 rounded-full"></div>
      <div className="size-44 bg-white/10 absolute -bottom-16 -right-10 rounded-full"></div>
      <p className="uppercase font-semibold text-sm">{incomeType}</p>
      <p className="uppercase font-normal text-3xl mt-4">
        {Number(amount).toLocaleString()} MMK
      </p>
      <button
        type="button"
        className="hover:underline hover:text-white/50 mt-10"
      >
        see records
      </button>
    </div>
  );
};

export default IncomeCardDashboard;
