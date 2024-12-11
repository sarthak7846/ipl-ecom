import { Navigate, Outlet } from "react-router";

const PublicLayout = () => {
  const token = localStorage.getItem("authToken");

  if (token) {
    return <Navigate to="/home" replace />;
  }

  console.log("inside public layout isauth");
  return <Outlet />;
};

export default PublicLayout;
