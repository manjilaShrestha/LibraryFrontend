// // // import { Menu } from "lucide-react";
// // // import { Link, NavLink, useNavigate } from "react-router-dom";
// // // import { useState } from "react";

// // // const BorrowerNavbar = () => {
// // //   const navigate = useNavigate();
// // //   const [menuOpen, setMenuOpen] = useState(false);

// // //   const handleLogout = () => {
// // //     localStorage.removeItem("isLoggedIn");
// // //     localStorage.removeItem("name");
// // //     localStorage.removeItem("token");
// // //     navigate("/"); // redirect to login
// // //   };

// // //   const userInitial = localStorage.getItem("name")?.[0] || "U";

// // //   const navLinks = [
// // //     { name: "Home", path: "/home" },
// // //     { name: "Catalog", path: "/catalog" },
// // //     { name: "My Books", path: "/my-books" },
// // //     { name: "About Us", path: "/about" },
// // //     { name: "Contact", path: "/contact" },
// // //   ];

// // //   return (
// // //     <nav className="w-full bg-white shadow-sm px-6 h-20 flex items-center justify-between relative">
// // //       <div className="text-xl font-semibold text-gray-700">MyELib</div>

// // //       {/* Desktop Links */}
// // //       <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
// // //         {navLinks.map((link) => (
// // //           <NavLink
// // //             key={link.name}
// // //             to={link.path}
// // //             className={({ isActive }) =>
// // //               isActive
// // //                 ? "text-blue-600"
// // //                 : "hover:text-blue-600"
// // //             }
// // //           >
// // //             {link.name}
// // //           </NavLink>
// // //         ))}
// // //       </div>

// // //       {/* Right Section */}
// // //       <div className="flex items-center space-x-4">
// // //         <button
// // //           onClick={handleLogout}
// // //           className="text-red-500 hover:text-red-700"
// // //           aria-label="Logout"
// // //         >
// // //           Logout
// // //         </button>

// // //         <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium">
          
// // //         </div>

// // //         {/* Mobile Menu Button */}
// // //         <button
// // //           className="md:hidden text-gray-600"
// // //           onClick={() => setMenuOpen(!menuOpen)}
// // //           aria-label="Open menu"
// // //         >
// // //           <Menu size={22} />
// // //         </button>
// // //       </div>

// // //       {/* Mobile Menu */}
// // //       {menuOpen && (
// // //         <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col md:hidden p-4">
// // //           {navLinks.map((link) => (
// // //             <NavLink
// // //               key={link.name}
// // //               to={link.path}
// // //               className={({ isActive }) =>
// // //                 isActive
// // //                   ? "py-2 text-blue-600"
// // //                   : "py-2 hover:text-blue-600"
// // //               }
// // //               onClick={() => setMenuOpen(false)} // close menu on click
// // //             >
// // //               {link.name}
// // //             </NavLink>
// // //           ))}
// // //         </div>
// // //       )}
// // //     </nav>
// // //   );
// // // };

// // // export default BorrowerNavbar;

// // import { Menu, X } from "lucide-react";
// // import { NavLink, useNavigate } from "react-router-dom";
// // import { useState } from "react";

// // const BorrowerNavbar = () => {
// //   const navigate = useNavigate();
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   const handleLogout = () => {
// //     localStorage.removeItem("isLoggedIn");
// //     localStorage.removeItem("name");
// //     localStorage.removeItem("token");
// //     navigate("/"); // redirect to login
// //   };

// //   const navLinks = [
// //     { name: "Home", path: "/home" },
// //     { name: "Catalog", path: "/catalog" },
// //     { name: "My Books", path: "/my-books" },
// //     { name: "About Us", path: "/about" },
// //     { name: "Contact", path: "/contact" },
// //   ];

// //   return (
// //     <nav className="w-full bg-white shadow-sm px-6 h-20 flex items-center justify-between relative">
// //       {/* Logo */}
// //       <div className="text-xl font-semibold text-gray-700">MyELib</div>

// //       {/* Desktop Links */}
// //       <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
// //         {navLinks.map((link) => (
// //           <NavLink
// //             key={link.name}
// //             to={link.path}
// //             className={({ isActive }) =>
// //               isActive
// //                 ? "text-blue-600 border-b-2 border-blue-600 pb-1"
// //                 : "hover:text-blue-600"
// //             }
// //           >
// //             {link.name}
// //           </NavLink>
// //         ))}
// //       </div>

// //       {/* Right Section */}
// //       <div className="flex items-center space-x-4">
// //         <button
// //           onClick={handleLogout}
// //           className="text-red-500 hover:text-red-700"
// //         >
// //           Logout
// //         </button>

// //         {/* Mobile Menu Button */}
// //         <button
// //           className="md:hidden text-gray-600"
// //           onClick={() => setMenuOpen(!menuOpen)}
// //         >
// //           {menuOpen ? <X size={22} /> : <Menu size={22} />}
// //         </button>
// //       </div>

// //       {/* Mobile Menu */}
// //       {menuOpen && (
// //         <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col md:hidden p-4 z-10">
// //           {navLinks.map((link) => (
// //             <NavLink
// //               key={link.name}
// //               to={link.path}
// //               className={({ isActive }) =>
// //                 isActive
// //                   ? "py-2 text-blue-600 border-l-4 border-blue-600 pl-2"
// //                   : "py-2 hover:text-blue-600"
// //               }
// //               onClick={() => setMenuOpen(false)} // close menu after click
// //             >
// //               {link.name}
// //             </NavLink>
// //           ))}
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default BorrowerNavbar;


// import { Menu, X } from "lucide-react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useState } from "react";

// const BorrowerNavbar = () => {
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("name");
//     localStorage.removeItem("token");
//     navigate("/login"); // redirect to login page
//   };

//   const navLinks = [
//     { name: "Home", path: "/home" },
//     { name: "Catalog", path: "/catalog" },
//     { name: "My Books", path: "/my-books" },
//     { name: "About Us", path: "/about" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav className="w-full bg-white shadow-sm px-6 h-20 flex items-center justify-between relative">
//       {/* Logo */}
//       <div className="text-xl font-semibold text-gray-700">MyELib</div>

//       {/* Desktop Links */}
//       <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
//         {navLinks.map((link) => (
//           <NavLink
//             key={link.name}
//             to={link.path}
//             className={({ isActive }) =>
//               isActive
//                 ? "text-blue-600 border-b-2 border-blue-600 pb-1"
//                 : "hover:text-blue-600"
//             }
//             onClick={() => setMenuOpen(false)} // close mobile menu if open
//           >
//             {link.name}
//           </NavLink>
//         ))}
//       </div>

//       {/* Right Section */}
//       <div className="flex items-center space-x-4">
//         <button
//           onClick={handleLogout}
//           className="text-red-500 hover:text-red-700"
//         >
//           Logout
//         </button>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-600"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <X size={22} /> : <Menu size={22} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col md:hidden p-4 z-10">
//           {navLinks.map((link) => (
//             <NavLink
//               key={link.name}
//               to={link.path}
//               className={({ isActive }) =>
//                 isActive
//                   ? "py-2 text-blue-600 border-l-4 border-blue-600 pl-2"
//                   : "py-2 hover:text-blue-600"
//               }
//               onClick={() => setMenuOpen(false)} // close menu after click
//             >
//               {link.name}
//             </NavLink>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default BorrowerNavbar;


import { Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const BorrowerNavbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("name");
    localStorage.removeItem("token");

    // redirect to login
    navigate("/");
  };

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Catalog", path: "/catalog" },
    { name: "My Books", path: "/my-books" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const profileImageUrl = "https://via.placeholder.com/40";

  return (
    <nav className="w-full bg-white shadow-sm px-6 h-20 flex items-center justify-between relative">
      <div className="text-xl font-semibold text-gray-700">MyELib</div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "hover:text-blue-600"
            }
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}
      </div>

     
      <div className="flex items-center space-x-4">
        

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="text-red-500 hover:text-red-700"
        >
          Logout
        </button>

        
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300">
          {/* <img
            src={profileImageUrl}
            alt="Profile"
            className="w-full h-full object-cover"
          /> */}
        </div>

        {/* Mobile Menu */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col md:hidden p-4 z-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "py-2 text-blue-600 border-l-4 border-blue-600 pl-2"
                  : "py-2 hover:text-blue-600"
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default BorrowerNavbar;
