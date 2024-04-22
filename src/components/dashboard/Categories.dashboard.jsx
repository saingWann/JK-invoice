import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setCategories } from "../../state/categories/CategoriesSlice";

const categoriesConstant = [
  "thai-myanmar",
  "myanmar-thai",
  "air cargo",
  "myanmar-singapore",
  "car rental",
];

const CategoriesDashboard = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <section>
      <div className="flex justify-center lg:my-10 my-5 max-sm:overflow-x-auto ">
        {categoriesConstant.map((cate, index) => (
          <button
            key={index}
            onClick={() => dispatch(setCategories(cate))}
            className={`px-4 py-2 border-e uppercase hover:bg-black/10 active:bg-black font-semibold text-sm max-sm:text-xs text-nowrap active:text-white ${
              cate === categories ? "bg-black text-white" : "bg-transparent"
            }`}
          >
            {cate}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategoriesDashboard;
