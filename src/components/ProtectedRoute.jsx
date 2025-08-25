import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  // if not logged in, redirect to login page
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  // otherwise, render the protected content
  return children;
};

export default ProtectedRoute;
