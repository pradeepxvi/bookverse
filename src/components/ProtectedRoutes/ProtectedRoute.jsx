import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // extract token from local storage
  const token = localStorage.getItem("token");

  // const token = true;
  // uncomment line 5 for production  and do comment to line 7

  // allow user with valid token to access outlet else redirect to signin
  // return token ? <Outlet /> : <Navigate to={"/signin"} />;
  return <Outlet />;
};

export default ProtectedRoute;
