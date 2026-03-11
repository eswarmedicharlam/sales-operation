import { Route, Routes, } from "react-router-dom";
import { Login } from "../login/login";
import { EmployeeManagement } from "../pages/EmployeeManagement";
import { Dashboard } from "../pages/Dashboard";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/employee-management" element={<EmployeeManagement />} />
      <Route path="/dashboard" element={<Dashboard />} />

      {/* <Route element={<Layout />}>
       
 
      </Route> */}
    </Routes>
  );
};

export default AppRoutes;
