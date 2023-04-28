import { useContext } from "react";
import { authContext } from "../Context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { auth } = useContext(authContext);

  return auth.data ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
