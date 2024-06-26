import React, { useEffect } from "react";
import NavbarComponent from "./navbar/Navbar.component";
import FooterComponent from "./components/footer/Footer.component";
import { Route, Routes } from "react-router-dom";
import LoginPageComponent from "./Login.page.component";
import InvoicePageComponent from "./Invoice.page.component";
import DashBoradPage from "./DashBorad.page";
import { useDispatch } from "react-redux";
import { fetchAllUsers } from "./state/data/usersSlice";
import {
  calculateIndividualIncome,
  fetchRecords,
} from "./state/data/recordsSlice";
import UserManagementComponent from "./components/dashboard/UserManagement.component";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
    dispatch(fetchRecords());
  }, []);

  return (
    <>
      <NavbarComponent />
      {/* <Hero />
      <InvoiceComponent /> */}
      <Routes>
        <Route index element={<LoginPageComponent />} />

        <Route path="invoice" element={<InvoicePageComponent />} />

        <Route path="profile/:currentUser" element={<DashBoradPage />} />
        <Route
          path="profile/:currentUser/userManagement"
          element={<UserManagementComponent />}
        />
      </Routes>

      <FooterComponent />
    </>
  );
};

export default App;
