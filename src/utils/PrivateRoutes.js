import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
  const login = useSelector((state) => state.login);
  return login.isLogin ? <Outlet /> : alert("Access Denied, Login First!");
};

export default PrivateRoutes;

//local storage user data after login (token )
// islogin true when data ava
//React.Suspense move at root check it 
// blog about us memo
//window.location 
//deploy both
//integrate sentry relic , GA 


