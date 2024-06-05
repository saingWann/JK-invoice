import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../state/categories/CategoriesSlice";
import { upadateCurrentUserRecords } from "../../state/data/recordsSlice";
import { CircularProgress } from "@nextui-org/react";

const IncomeCardDashboard = ({
  incomeType,
  amount,
  color,
  percent = 40,
  cate,
}) => {
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

  const dispatch = useDispatch();
  const { allRecords } = useSelector((state) => state.allRecords);

  const parseDate = (dateString) => {
    return new Date(dateString);
  };

  const adminRenderByCategories = (cate) => {
    if (cate === "ALL") {
      // console.log("admin");
      const filterBycategory = [...allRecords];
      filterBycategory.sort(
        (a, b) => parseDate(b.issueTime) - parseDate(a.issueTime)
      );
      // console.log(filterBycategory);
      dispatch(upadateCurrentUserRecords(filterBycategory));
    } else {
      // console.log("admin elese");
      const filterBycategory = allRecords.filter(
        (record) => record.type === cate
      );
      filterBycategory.sort(
        (a, b) => parseDate(b.issueTime) - parseDate(a.issueTime)
      );
      dispatch(upadateCurrentUserRecords(filterBycategory));
      // console.log(filterBycategory);
      // console.log(allRecords);
    }
  };

  return (
    <div
      className={`${gradientClass} lg:w-1/4 md:w-1/3 w-full rounded-lg px-6 py-8 text-white relative overflow-hidden flex-shrink-0 transition-all duration-150 font-body group`}
    >
      <div className="size-28 bg-white/10 absolute top-0 -right-10 rounded-full group-hover:size-32 transition-all duration-250"></div>
      <div className="size-44 bg-white/10 absolute -bottom-16 -right-10 rounded-full group-hover:size-52 transition-all duration-250"></div>

      <p className="uppercase font-semibold text-sm">{incomeType}</p>
      <p className="uppercase font-normal text-2xl mt-4">
        {Number(amount).toLocaleString()} MMK
      </p>
      <div className="flex justify-between mt-10 items-center">
        <button
          type="button"
          onClick={() => {
            dispatch(setCategories(cate));
            adminRenderByCategories(cate.toUpperCase());
          }}
          className="hover:underline hover:text-black/70 "
        >
          see records
        </button>

        <CircularProgress
          classNames={{
            svg: "w-16 h-16 drop-shadow-md",
            indicator: "stroke-white",
            track: "stroke-white/20",
            value: "text-sm font-semibold text-white",
          }}
          aria-label="circular progress"
          value={percent}
          strokeWidth={4}
          showValueLabel={true}
        />
      </div>
    </div>
  );
};

export default IncomeCardDashboard;
