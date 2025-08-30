import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LibrarianNavbar from "./components/Librarian/Navbar"; // Librarian Navbar
import BorrowerNavbar from "./components/Borrower/Navbar";   // Borrower Navbar
import ProtectedRoute from "./components/Librarian/ProtectedRoute"; // role-aware


import Login from "./pages/LibrarianPage/Login";
import Register from "./pages/LibrarianPage/Register";
import Dashboard from "./pages/LibrarianPage/Dashboard";
import Books from "./pages/LibrarianPage/Books";
import Members from "./pages/LibrarianPage/Members";
import Reports from "./pages/LibrarianPage/History";
import Transactions from "./pages/LibrarianPage/Transactions";
import Home from "./pages/BorrowerPage/Home"; 
import MyBooks from "./pages/BorrowerPage/MyBooks";
import Catalog from "./pages/BorrowerPage/CatLog";
import About from "./pages/BorrowerPage/About"
import Contact from "./pages/BorrowerPage/Contact";

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

        {/* Borrower route */}
        <Route
          path="/home"
          element={
            <ProtectedRoute allowedRoles={["borrower"]}>
              <div>
                <BorrowerNavbar />
                <Home />
              </div>
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-books"
          element={
            <ProtectedRoute allowedRoles={["borrower"]}>
              <div>
                <BorrowerNavbar />
                <MyBooks /> {/* Make sure you are using <MyBooks /> here, not <My /> */}
              </div>
            </ProtectedRoute>
          }
        />

        <Route
          path="/catalog"
          element={
            <ProtectedRoute allowedRoles={["borrower"]}>
              <div>
                <BorrowerNavbar /> {/* or your regular Navbar */}
                <Catalog /> {/* Catalog page showing half-screen image & details */}
              </div>
            </ProtectedRoute>
          }
        />


        <Route
          path="/about"
          element={
            <ProtectedRoute allowedRoles={["borrower"]}>
              <div>
                <BorrowerNavbar />
                <About />
              </div>
            </ProtectedRoute>
          }
        />

        <Route
          path="/contact"
          element={
            <ProtectedRoute allowedRoles={["borrower"]}>
              <div>
                <BorrowerNavbar /> {/* optional: your navbar for borrowers */}
                <Contact /> {/* Contact page component */}
              </div>
            </ProtectedRoute>
          }
        />




        {/* Protected routes for librarian */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={["librarian"]}>
              <div>
                <LibrarianNavbar />
                <Dashboard />
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/books"
          element={
            <ProtectedRoute allowedRoles={["librarian"]}>
              <div>
                <LibrarianNavbar />
                <Books />
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/members"
          element={
            <ProtectedRoute allowedRoles={["librarian"]}>
              <div>
                <LibrarianNavbar />
                <Members />
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/history"
          element={
            <ProtectedRoute allowedRoles={["librarian"]}>
              <div>
                <LibrarianNavbar />
                <Reports />
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/transactions"
          element={
            <ProtectedRoute allowedRoles={["librarian"]}>
              <div>
                <LibrarianNavbar />
                <Transactions />
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
