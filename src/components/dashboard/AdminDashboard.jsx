import React, { useEffect, useState } from "react";

import RecordsTable from "./RecordsTable.dashboard";
import CategoriesDashboard from "./Categories.dashboard";
// import Container from "./Container";
import { useDispatch, useSelector } from "react-redux";
import IncomeDashboard from "./Income.dashboard";
import { LayoutDashboard, UserRoundCog } from "lucide-react";
import { Tooltip } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import Container from "../Container";
import { fetchRecords } from "../../state/data/recordsSlice";

const AdminDashBoradPage1 = () => {
  const { currentUser } = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchRecords());
  }, []);

  return (
    <Container>
      <section className="min-h-[60vh]">
        <div className="fixed xl:flex  flex-col hidden gap-5 shadow-md px-4 py-10 rounded-full min-h-[50vh] top-20 left-20">
          <Tooltip content="Dashboard">
            <button
              onClick={() => {
                navigate(`/profile/${currentUser.userName}`);
              }}
              className={`p-3 hover:scale-95 active:scale-105 transition-all  duration-300 rounded-full bg-black text-white`}
            >
              <LayoutDashboard />
            </button>
          </Tooltip>
          <Tooltip content="User Management">
            <button
              onClick={() =>
                navigate(`/profile/${currentUser.userName}/userManagement`)
              }
              className={`p-3 hover:scale-95 active:scale-105 transition-all  duration-300 rounded-full `}
            >
              <UserRoundCog />
            </button>
          </Tooltip>
        </div>

        <div className="fixed flex xl:hidden lg:w-52 gap-5 shadow-md lg:pl-5 pl-2 lg:py-4 py-2 rounded-l-full top-16 right-0 z-20 bg-black">
          <Tooltip content="Dashboard">
            <button
              onClick={() => navigate(`/profile/${currentUser.userName}`)}
              className={`p-2 size-10 hover:scale-95 active:scale-105 transition-all  duration-300 rounded-full bg-white `}
            >
              <LayoutDashboard />
            </button>
          </Tooltip>
          <Tooltip content="User Management">
            <button
              onClick={() =>
                navigate(`/profile/${currentUser.userName}/userManagement`)
              }
              className={`p-2 size-10 hover:scale-95 active:scale-105 transition-all  duration-300 rounded-full bg-black text-white`}
            >
              <UserRoundCog />
            </button>
          </Tooltip>
        </div>

        <div>
          <IncomeDashboard />
          <div className="mt-28 border-b pb-3">
            <p className="lg:text-2xl font-body lg:font-semibold uppercase text-lg font-bold lg:px-3 px-3">
              {currentUser.userName}'s issued records
            </p>
          </div>
          <CategoriesDashboard />
          <RecordsTable />
        </div>
      </section>
    </Container>
  );
};

export default AdminDashBoradPage1;
