import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoute = () => {
  // extract token from local storage
  const token = localStorage.getItem("token");

  // extract account type from local storage
  const accountType = localStorage.getItem("accountType");

  // allow the admin and loggedin to access the page
  const isAdmin = token && accountType === "admin";

  // else redirect to signin
  // return isAdmin ? <Outlet /> : <Navigate to="/signin" />;
  return <Outlet />;
};

export default AdminProtectedRoute;
