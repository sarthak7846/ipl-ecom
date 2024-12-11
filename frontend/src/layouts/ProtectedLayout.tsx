import { Navigate, Outlet } from "react-router";

const ProtectedLayout = () => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedLayout;
