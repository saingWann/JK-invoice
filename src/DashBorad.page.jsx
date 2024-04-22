import React from "react";

import RecordsTable from "./components/dashboard/RecordsTable.dashboard";
import CategoriesDashboard from "./components/dashboard/Categories.dashboard";
import Container from "./components/Container";
import { useSelector } from "react-redux";

const DashBoradPage = () => {
  const { currentUser } = useSelector((state) => state.allUsers);
  return (
    <Container>
      <section>
        <div className="mt-10 border-b pb-3">
          <p className="text-2xl uppercase">
            {currentUser.userName}'s issued recordss
          </p>
        </div>
        <CategoriesDashboard />
        <RecordsTable />
      </section>
    </Container>
  );
};

export default DashBoradPage;
