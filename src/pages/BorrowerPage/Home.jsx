// // // // // import React, { useEffect, useState } from "react";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import Navbar from "../../components/Admin/Navbar";

// // // // // const Home = () => {
// // // // //   const navigate = useNavigate();
// // // // //   const [name, setName] = useState("");

// // // // //   // ✅ Redirect if not logged in or role is not borrower
// // // // //   useEffect(() => {
// // // // //     const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
// // // // //     const role = localStorage.getItem("role");

// // // // //     if (!isLoggedIn || role !== "borrower") {
// // // // //       navigate("/login"); // redirect if not a borrower
// // // // //     } else {
// // // // //       setName(localStorage.getItem("name"));
// // // // //     }
// // // // //   }, [navigate]);

// // // // //   const handleLogout = () => {
// // // // //     localStorage.clear();
// // // // //     navigate("/login");
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gray-100">
// // // // //       {/* Navbar */}
// // // // //       <Navbar />

// // // // //       {/* Main Content */}
// // // // //       <div className="p-6">
// // // // //         <h1 className="text-3xl font-bold mb-4">Welcome, {name}!</h1>
// // // // //         <p className="mb-6">This is your home page.</p>

// // // // //         <button
// // // // //           onClick={handleLogout}
// // // // //           className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
// // // // //         >
// // // // //           Logout
// // // // //         </button>

// // // // //         {/* Add sections like My Books, Catalog, etc. */}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Home;


// // // // // src/pages/Home.jsx
// // // // import React from "react";

// // // // function Home() {
// // // //   return (
// // // //     <div className="min-h-screen flex items-center justify-center">
// // // //       <h1 className="text-3xl font-bold">Welcome, Borrower!</h1>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Home;


// // // // src/pages/UserPage/Home.jsx
// // // import React from "react";
// // // import Navbar from "../../components/Librarian/Navbar";

// // // function Home() {
// // //   return (
// // //     <div>
// // //       <Navbar /> {/* Optional: include navbar for borrower */}
// // //       <div className="min-h-screen flex items-center justify-center bg-gray-100">
// // //         <h1 className="text-3xl font-bold">Welcome, Borrower!</h1>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Home;


// // import React from "react";
// // import BorrowerNavbar from "../../components/Borrower/Navbar"; // Borrower navbar

// // function Home() {
// //   return (
// //     <div>
      
// //     </div>
// //   );
// // }

// // export default Home;


// import { useState, useEffect } from "react";
// import axios from "axios";

// function Home() {
//   const [books, setBooks] = useState([]);
//   const [search, setSearch] = useState("");

//   // Fetch all books
//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get("http://localhost:5000/api/books", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setBooks(res.data);
//       } catch (err) {
//         console.error("Error fetching books:", err);
//       }
//     };

//     fetchBooks();
//   }, []);

//   // Borrow book function
//   const borrowBook = async (bookId) => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await axios.post(
//         "http://localhost:5000/api/borrow",
//         { bookId },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       alert(res.data.msg);

//       // update available count in UI
//       setBooks((prev) =>
//         prev.map((book) =>
//           book._id === bookId
//             ? { ...book, available: book.available - 1 }
//             : book
//         )
//       );
//     } catch (err) {
//       console.error(err.response?.data || err.message);
//       alert("Failed to borrow book");
//     }
//   };

//   // Filtered search
//   const filteredBooks = books.filter((b) =>
//     b.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Library Books</h1>

//       {/* Search bar */}
//       <input
//         type="text"
//         placeholder="Search books..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="border px-3 py-2 rounded-lg w-full mb-6"
//       />

//       {/* Book list */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {filteredBooks.map((book) => (
//           <div
//             key={book._id}
//             className="border rounded-2xl p-4 shadow-md bg-white"
//           >
//             <h3 className="text-lg font-semibold">{book.title}</h3>
//             <p className="text-gray-600">{book.author}</p>
//             <p className="text-gray-500">Available: {book.available}</p>

//             <button
//               onClick={() => borrowBook(book._id)}
//               disabled={book.available === 0}
//               className={`mt-3 px-4 py-2 rounded-lg text-white ${
//                 book.available > 0
//                   ? "bg-green-600 hover:bg-green-700"
//                   : "bg-gray-400 cursor-not-allowed"
//               }`}
//             >
//               {book.available > 0 ? "Borrow" : "Unavailable"}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;


// Home.jsx
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function Home() {
//   const [books, setBooks] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch all books from API
//     axios
//       .get("http://localhost:5000/api/books") // adjust your API route
//       .then((res) => setBooks(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   const openCatalog = (book) => {
//     // Navigate to catalog page with book data
//     navigate("/catalog", { state: { book } });
//   };

//   return (
//     <div className="home-container" style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
//       {books.map((book) => (
//         <div
//           key={book._id}
//           className="book-card"
//           style={{
//             border: "1px solid #ddd",
//             borderRadius: "10px",
//             width: "200px",
//             padding: "10px",
//             cursor: "pointer",
//             boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//             transition: "transform 0.2s",
//           }}
//           onClick={() => openCatalog(book)}
//         >
//           <img
//             src={book.imageUrl} // your book image URL field
//             alt={book.title}
//             style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }}
//           />
//           <h3 style={{ margin: "10px 0 5px" }}>{book.title}</h3>
//           <p style={{ fontSize: "14px", color: "#555" }}>{book.author}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Home;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// // Import your local images
// import book1 from "../../image/1984.jpg";
// import book2 from "../../image/pride.jpg";
// import book3 from "../../image/Hobbit.jpg";
// import book4 from "../../image/The Alchemist.webp";
// import book5 from "../../image/1.jpg";
// import book6 from "../../image/2.jpeg";
// import book7 from "../../image/3.jpeg";
// import book8 from "../../image/4.jpeg";
// import book9 from "../../image/5.jpeg";
// import book10 from "../../image/6.jpeg";
// import book12 from "../../image/7.jpeg";
// import book13 from "../../image/8.jpeg";
// import book14 from "../../image/9.jpeg";
// import book15 from "../../image/10.jpeg";
// import book16 from "../../image/12.jpeg";



// function Home() {
//   const [books, setBooks] = useState([]);
//   const navigate = useNavigate();

//   // Array of local images to use
//   const localImages = [book1, book2, book3];

//   useEffect(() => {
//     // Fetch all books from API
//     axios
//       .get("http://localhost:5000/api/books") // adjust your API route
//       .then((res) => setBooks(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   const openCatalog = (book) => {
//     // Navigate to catalog page with book data
//     navigate("/catalog", { state: { book } });
//   };

//   return (
//     <div
//       className="home-container"
//       style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}
//     >
//       {books.map((book, index) => (
//         <div
//           key={book._id}
//           className="book-card"
//           style={{
//             border: "1px solid #ddd",
//             borderRadius: "10px",
//             width: "200px",
//             padding: "10px",
//             cursor: "pointer",
//             boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//             transition: "transform 0.2s",
//           }}
//           onClick={() => openCatalog(book)}
//         >
//           <img
//             src={localImages[index % localImages.length]} // use local image
//             alt={book.title}
//             style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }}
//           />
//           <h3 style={{ margin: "10px 0 5px" }}>{book.title}</h3>
//           <p style={{ fontSize: "14px", color: "#555" }}>{book.author}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Home;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Import your local images
import book1 from "../../image/1984.jpg";
import book2 from "../../image/pride.jpg";
import book3 from "../../image/Hobbit.jpg";
import book4 from "../../image/The Alchemist.webp";
import book5 from "../../image/1.jpg";
import book6 from "../../image/2.jpeg";
import book7 from "../../image/3.jpeg";
import book8 from "../../image/4.jpeg";
import book9 from "../../image/5.jpeg";
import book10 from "../../image/6.jpeg";
import book12 from "../../image/7.jpeg";
import book13 from "../../image/8.jpeg";
import book14 from "../../image/9.jpeg";
import book15 from "../../image/10.jpeg";
import book16 from "../../image/12.jpeg";

function Home() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  // Array of all known images
  const localImages = [
    book1, book2, book3, book4, book5, book6, book7, book8,
    book9, book10, book12, book13, book14, book15, book16
  ];

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  }, []);

  const openCatalog = (book) => {
    navigate("/catalog", { state: { book } });
  };

  return (
    <div
      className="home-container"
      style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}
    >
      {books.map((book, index) => (
        <div
          key={book._id}
          className="book-card"
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            width: "200px",
            padding: "10px",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            transition: "transform 0.2s",
          }}
          onClick={() => openCatalog(book)}
        >
          <img
            src={localImages[index] || "https://via.placeholder.com/200x250?text=No+Image"} // online placeholder fallback
            alt={book.title}
            style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }}
          />
          <h3 style={{ margin: "10px 0 5px" }}>{book.title}</h3>
          <p style={{ fontSize: "14px", color: "#555" }}>{book.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
