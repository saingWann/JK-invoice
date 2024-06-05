import Container from "./components/Container";

import AdminDashBoradPage1 from "./components/dashboard/AdminDashboard";
import UserDashBoradPage1 from "./components/dashboard/UserDashboard";

const DashBoradPage = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchRecords());
  // }, []);

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
