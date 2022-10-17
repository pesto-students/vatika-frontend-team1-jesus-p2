import { Outlet,Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const token = localStorage.getItem("token");
  return token !== null ? <Outlet /> : <Navigate to="/"/>;
};

export default PrivateRoutes;
