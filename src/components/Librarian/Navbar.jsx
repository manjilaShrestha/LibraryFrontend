// // // import { Bell, Menu } from "lucide-react";

// // // const Navbar = () => {
// // //   return (
// // //     <nav className="w-full bg-white shadow-sm px-6 py-3 flex items-center justify-between">
// // //       {/* Left Logo */}
// // //       <div className="text-xl font-semibold text-gray-700">
// // //         MyELib
// // //       </div>

// // //       {/* Center Menu */}
// // //       <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
// // //         <a href="/dashboard" className="hover:text-blue-600">DASHBOARD</a>
// // //         <a href="/books" className="hover:text-blue-600">BOOKS</a>
// // //         <a href="/members" className="hover:text-blue-600">MEMBERS</a>
// // //         <a href="/reports" className="hover:text-blue-600">REPORTS</a>
// // //         <a href="/transactions" className="hover:text-blue-600">TRANSACTIONS</a>
// // //       </div>

// // //       {/* Right Icons */}
// // //       <div className="flex items-center space-x-4">
// // //         <button className="text-gray-600 hover:text-blue-600">
// // //           <Bell size={20} />
// // //         </button>
// // //         <div className="w-8 h-8 rounded-full bg-gray-200"></div>
// // //         <button className="md:hidden text-gray-600">
// // //           <Menu size={22} />
// // //         </button>
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;


// // import { Bell, Menu } from "lucide-react";
// // import { Link } from "react-router-dom";

// // const Navbar = () => {
// //   return (
// //     <nav className="w-full bg-white shadow-sm px-6 py-3 flex items-center justify-between">
// //       <div className="text-xl font-semibold text-gray-700">
// //         MyELib
// //       </div>

// //       <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
// //         <Link to="/dashboard" className="hover:text-blue-600">DASHBOARD</Link>
// //         <Link to="/books" className="hover:text-blue-600">BOOKS</Link>
// //         <Link to="/members" className="hover:text-blue-600">MEMBERS</Link>
// //         <Link to="/reports" className="hover:text-blue-600">REPORTS</Link>
// //         <Link to="/transactions" className="hover:text-blue-600">TRANSACTIONS</Link>
// //       </div>

// //       <div className="flex items-center space-x-4">
// //         <button className="text-gray-600 hover:text-blue-600">
// //           <Bell size={20} />
// //         </button>
// //         <div className="w-8 h-8 rounded-full bg-gray-200"></div>
// //         <button className="md:hidden text-gray-600">
// //           <Menu size={22} />
// //         </button>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;



// import { Bell, Menu } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     navigate("/"); // back to login
//   };

//   return (
//     <nav className="w-full bg-white shadow-sm px-6 py-3 flex items-center justify-between">
//       <div className="text-xl font-semibold text-gray-700">MyELib</div>

//       <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
//         <Link to="/dashboard" className="hover:text-blue-600">DASHBOARD</Link>
//         <Link to="/books" className="hover:text-blue-600">BOOKS</Link>
//         <Link to="/members" className="hover:text-blue-600">MEMBERS</Link>
//         <Link to="/reports" className="hover:text-blue-600">REPORTS</Link>
//         <Link to="/transactions" className="hover:text-blue-600">TRANSACTIONS</Link>
//       </div>

//       <div className="flex items-center space-x-4">
//         <button onClick={handleLogout} className="text-red-500 hover:text-red-700">
//           Logout
//         </button>
//         <button className="text-gray-600 hover:text-blue-600">
//           <Bell size={20} />
//         </button>
//         <div className="w-8 h-8 rounded-full bg-gray-200"></div>
//         <button className="md:hidden text-gray-600">
//           <Menu size={22} />
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import { Bell, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear login-related data
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("name"); 
    localStorage.removeItem("token"); // if you’re using token

    // Redirect to login page
    navigate("/");
  };

  return (
    <nav className="w-full bg-white shadow-sm px-6 h-20 flex items-center justify-between">
      <div className="text-xl font-semibold text-gray-700">MyELib</div>

      <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
        <Link to="/dashboard" className="hover:text-blue-600">DASHBOARD</Link>
        <Link to="/books" className="hover:text-blue-600">BOOKS</Link>
        <Link to="/members" className="hover:text-blue-600">MEMBERS</Link>
        <Link to="/history" className="hover:text-blue-600">HISTORY</Link>
        <Link to="/transactions" className="hover:text-blue-600">TRANSACTIONS</Link>
      </div>

      <div className="flex items-center space-x-4">
        <button 
          onClick={handleLogout} 
          className="text-red-500 hover:text-red-700"
        >
          Logout
        </button>
        
        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
        <button className="md:hidden text-gray-600">
          <Menu size={22} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
