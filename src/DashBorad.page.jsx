import React, { useEffect } from "react";

import RecordsTable from "./components/dashboard/RecordsTable.dashboard";
import CategoriesDashboard from "./components/dashboard/Categories.dashboard";
import Container from "./components/Container";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecords } from "./state/data/recordsSlice";
import IncomeDashboard from "./components/dashboard/Income.dashboard";

const DashBoradPage = () => {
  const { currentUser } = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("dashboard render");
    dispatch(fetchRecords());
  }, []);

  return (
    <Container>
      <section className="min-h-[60vh]">
        <IncomeDashboard />
        <div className="mt-28 border-b pb-3">
          <p className="text-2xl uppercase max-sm:text-lg max-sm:font-bold lg:p-0 px-3">
            {currentUser.userName}'s issued records
          </p>
        </div>
        <CategoriesDashboard />
        <RecordsTable />
      </section>
    </Container>
  );
};

export default DashBoradPage;
