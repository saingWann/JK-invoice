import React from "react";

const IncomeCardDashboard = ({ incomeType, amount, color, percent }) => {
  const gradientClasses = {
    red: "bg-gradient-to-r from-red-300 to-red-400 hover:ring-red-200 hover:ring-8",
    sky: "bg-gradient-to-r from-sky-300 to-sky-400 hover:ring-sky-200 hover:ring-8",
    emerald:
      "bg-gradient-to-r from-emerald-300 to-emerald-400 hover:ring-emerald-200 hover:ring-8",
    blue: "bg-gradient-to-r from-blue-300 to-blue-400 hover:ring-blue-200 hover:ring-8",
    orange:
      "bg-gradient-to-r from-orange-300 to-orange-400 hover:ring-orange-200 hover:ring-8",
  };
  const gradientClass = gradientClasses[color] || "";

  const percentTextColor = {
    red: "text-red-500",
    sky: "text-sky-500",
    emerald: "text-emerald-500",
    blue: "text-blue-500",
    orange: "text-orange-500",
  };
  const percentTextClass = percentTextColor[color] || "";

  return (
    <div
      className={`${gradientClass} lg:w-1/4 md:w-1/3 w-full rounded-lg px-6 py-8 text-white relative overflow-hidden flex-shrink-0 transition-all duration-150 `}
    >
      <div className="size-28 bg-white/10 absolute top-0 -right-10 rounded-full"></div>
      <div className="size-44 bg-white/10 absolute -bottom-16 -right-10 rounded-full"></div>
      <p className="uppercase font-semibold text-sm">{incomeType}</p>
      <p className="uppercase font-normal text-3xl mt-4">
        {Number(amount).toLocaleString()} MMK
      </p>
      <div className="flex justify-between mt-10 items-end">
        <button
          type="button"
          className="hover:underline hover:text-white/50 mt-"
        >
          see records
        </button>
        <p
          className={`text-sm font-bold bg-white px-2 ${percentTextClass} rounded-full`}
        >
          {percent}%
        </p>
      </div>
    </div>
  );
};

export default IncomeCardDashboard;
