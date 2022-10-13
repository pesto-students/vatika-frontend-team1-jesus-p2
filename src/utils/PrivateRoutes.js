import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
  const login = useSelector((state) => state.login);
  return login.isLogin ? <Outlet /> : alert("Access Denied, Login First!");
};

export default PrivateRoutes;
