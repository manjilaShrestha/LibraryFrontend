// // 


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import ProtectedRoute from "./components/ProtectedRoute";

// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import Books from "./pages/Books";
// import Members from "./pages/Members";
// import Reports from "./pages/Reports";
// import Transactions from "./pages/Transactions";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public routes */}
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Protected routes */}
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Navbar />
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/books"
//           element={
//             <ProtectedRoute>
//               <Navbar />
//               <Books />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/members"
//           element={
//             <ProtectedRoute>
//               <Navbar />
//               <Members />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/reports"
//           element={
//             <ProtectedRoute>
//               <Navbar />
//               <Reports />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/transactions"
//           element={
//             <ProtectedRoute>
//               <Navbar />
//               <Transactions />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import Members from "./pages/Members";
import Reports from "./pages/Reports";
import Transactions from "./pages/Transactions";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />}
        />
        <Route
          path="/register"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <Register />}
        />

        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Navbar />
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/books"
          element={
            <ProtectedRoute>
              <Navbar />
              <Books />
            </ProtectedRoute>
          }
        />
        <Route
          path="/members"
          element={
            <ProtectedRoute>
              <Navbar />
              <Members />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <Navbar />
              <Reports />
            </ProtectedRoute>
          }
        />
        <Route
          path="/transactions"
          element={
            <ProtectedRoute>
              <Navbar />
              <Transactions />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
