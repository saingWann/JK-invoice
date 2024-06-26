import { useNavigate } from "react-router-dom";
import Container from "./components/Container";

import AdminDashBoradPage1 from "./components/dashboard/AdminDashboard";
import UserDashBoradPage1 from "./components/dashboard/UserDashboard";
import { useEffect } from "react";

const DashBoradPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/");
    }
  }, []);
  return (
    <Container>
      {localStorage.getItem("currentRole") === "admin" && (
        <AdminDashBoradPage1 />
      )}
      {localStorage.getItem("currentRole") !== "admin" && (
        <UserDashBoradPage1 />
      )}
    </Container>
  );
};

export default DashBoradPage;
