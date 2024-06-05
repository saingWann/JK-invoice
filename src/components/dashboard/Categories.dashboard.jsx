import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setCategories } from "../../state/categories/CategoriesSlice";
import { Select, SelectItem } from "@nextui-org/react";

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
  const { allUsers } = useSelector((state) => state.allUsers);
  const [usersArray, setUsersArray] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const users = allUsers.map((user) => {
      return { key: user.userName, label: user.userName };
    });
    setUsersArray([{ key: "all", label: "All" }, ...users]);
  }, [allUsers]);

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
    }
  };

  const filteredWithUsername = (userName) => {
    console.log(userName);
    if (userName === "All") {
      const filterByUsername = [...allRecords];
      filterByUsername.sort(
        (a, b) => parseDate(b.issueTime) - parseDate(a.issueTime)
      );
      dispatch(upadateCurrentUserRecords(filterByUsername));
    } else {
      const filterByUsername = allRecords.filter(
        (record) => record.userIssued === userName
      );
      filterByUsername.sort(
        (a, b) => parseDate(b.issueTime) - parseDate(a.issueTime)
      );
      dispatch(upadateCurrentUserRecords(filterByUsername));
      // console.log(allRecords);
      // console.log(filterBycategory);
    }
  };

  return (
    <section className="flex lg:flex-row md:flex-row flex-col items-center justify-between">
      <div className="flex lg:w-fit w-full lg:mt-10 my-5 md:px-4 max-sm:overflow-x-auto max-sm:px-4">
        {categoriesConstant.map((cate, index) => (
          <button
            key={index}
            onClick={() => {
              if (localStorage.getItem("currentRole") === "admin") {
                adminRenderByCategories(cate.toUpperCase());
                dispatch(setCategories(cate));
              } else {
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
      {localStorage.getItem("currentRole") === "admin" && (
        <div className="lg:w-1/3 md:w-1/2 w-full">
          <Select
            items={usersArray}
            label="Filter by users"
            placeholder="Select a user"
            className="w-full"
          >
            {(usersArray) => (
              <SelectItem
                onClick={() => filteredWithUsername(usersArray.label)}
              >
                {usersArray.label}
              </SelectItem>
            )}
          </Select>
        </div>
      )}
    </section>
  );
};

export default CategoriesDashboard;
