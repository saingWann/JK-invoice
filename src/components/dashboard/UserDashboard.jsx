import React, { useEffect, useState } from "react";

import RecordsTable from "./RecordsTable.dashboard";
import CategoriesDashboard from "./Categories.dashboard";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecords } from "../../state/data/recordsSlice";
import Container from "../Container";

const UserDashBoradPage1 = () => {
  const { currentUser } = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecords());
  }, []);

  return (
    <Container>
      <section className="min-h-[60vh]">
        <div className="mt-10 border-b pb-3">
          <p className="text-2xl font-body font-semibold uppercase max-sm:text-lg max-sm:font-bold lg:p-0 px-3">
            {currentUser.userName}'s issued records
          </p>
        </div>
        <CategoriesDashboard />
        <RecordsTable />
      </section>
    </Container>
  );
};

export default UserDashBoradPage1;
