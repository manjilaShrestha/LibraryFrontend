// // import { Navigate } from "react-router-dom";

// // const ProtectedRoute = ({ children }) => {
// //   const isLoggedIn = localStorage.getItem("isLoggedIn");

// //   // if not logged in, redirect to login page
// //   if (!isLoggedIn) {
// //     return <Navigate to="/" replace />;
// //   }

// //   // otherwise, render the protected content
// //   return children;
// // };

// // export default ProtectedRoute;


// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children, allowedRoles }) => {
//   const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
//   const role = localStorage.getItem("role");

//   // Not logged in → redirect to login
//   if (!isLoggedIn) {
//     return <Navigate to="/" replace />;
//   }

//   // Logged in but role not allowed → redirect to correct page
//   if (allowedRoles && !allowedRoles.includes(role)) {
//     return role === "librarian" ? (
//       <Navigate to="/dashboard" replace />
//     ) : (
//       <Navigate to="/home" replace />
//     );
//   }

//   // User is logged in and role is allowed → render children
//   return children;
// };

// export default ProtectedRoute;


import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const role = localStorage.getItem("role");

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return role === "librarian" ? (
      <Navigate to="/dashboard" replace />
    ) : (
      <Navigate to="/home" replace />
    );
  }

  return children;
};

export default ProtectedRoute;
