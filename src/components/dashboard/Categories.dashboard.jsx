import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setCategories } from "../../state/categories/CategoriesSlice";
import { upadateCurrentUserRecords } from "../../state/data/recordsSlice";

const categoriesConstant = [
  "all",
  "th-mm",
  "mm-th",
  "air cargo",
  "mm-sga",
  "car rental",
];

const CategoriesDashboard = () => {
  const categories = useSelector((state) => state.categories);
  const { allRecords } = useSelector((state) => state.allRecords);
  const dispatch = useDispatch();

  const parseDate = (dateString) => {
    return new Date(dateString);
  };

  const renderBycategories = (cate) => {
    const currentUser = localStorage.getItem("currentUsername");

    if (cate === "ALL") {
      const filterBycategory = allRecords.filter(
        (record) => record.userIssued === currentUser
      );
      filterBycategory.sort(
        (a, b) => parseDate(b.issueTime) - parseDate(a.issueTime)
      );
      dispatch(upadateCurrentUserRecords(filterBycategory));
      console.log(filterBycategory);
    } else {
      const filterBycategory = allRecords.filter(
        (record) => record.type === cate && record.userIssued === currentUser
      );
      // console.log(currentUser);
      filterBycategory.sort(
        (a, b) => parseDate(b.issueTime) - parseDate(a.issueTime)
      );
      dispatch(upadateCurrentUserRecords(filterBycategory));
      // console.log(filterBycategory);
    }
  };

  const adminRenderByCategories = (cate) => {
    if (cate === "ALL") {
      console.log("admin");
      const filterBycategory = [...allRecords];
      filterBycategory.sort(
        (a, b) => parseDate(b.issueTime) - parseDate(a.issueTime)
      );
      // console.log(filterBycategory);
      dispatch(upadateCurrentUserRecords(filterBycategory));
    } else {
      console.log("admin elese");
      const filterBycategory = allRecords.filter(
        (record) => record.type === cate
      );
      filterBycategory.sort(
        (a, b) => parseDate(b.issueTime) - parseDate(a.issueTime)
      );
      dispatch(upadateCurrentUserRecords(filterBycategory));
      // console.log(filterBycategory);
    }
  };

  return (
    <section>
      <div className="flex justify-start lg:mt-10 my-5 max-sm:overflow-x-auto ">
        {categoriesConstant.map((cate, index) => (
          <button
            key={index}
            onClick={() => {
              if (localStorage.getItem("currentUsername") === "adminJK") {
                // console.log("i am admin");
                adminRenderByCategories(cate.toUpperCase());
                dispatch(setCategories(cate));
              } else {
                // console.log("i am normal staff");
                renderBycategories(cate.toUpperCase());
                dispatch(setCategories(cate));
              }
            }}
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
