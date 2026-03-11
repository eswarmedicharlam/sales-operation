import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Login } from "../login/Login";
import { EmployeeManagement } from "../pages/EmployeeManagement";
import { Dashboard } from "../pages/Dashboard";
import Layout from "../components/Layout";
import ActivityPlotting from "../pages/ActivityPlotting";


const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => state.UserData.isLoggedIn);

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />} />
      <Route element={isLoggedIn ? <Layout /> : <Navigate to="/" />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employee-management" element={<EmployeeManagement />} />
        <Route path="/activity-ploting" element={<ActivityPlotting />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
