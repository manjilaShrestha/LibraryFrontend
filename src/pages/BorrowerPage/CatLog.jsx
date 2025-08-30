// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// // Import default images
// import book1Image from "../../image/1984.jpg";
// import book2Image from "../../image/pride.jpg";
// import book3Image from "../../image/hobbit.jpg";
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


// // Map book titles to default images
// const defaultImages = {
//   "1984": book1Image,
//   "Pride and Prejudice": book2Image,
//   "The Hobbit": book3Image,
// };

// function Catalog() {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const [book, setBook] = useState(state?.book || null);
//   const [allBooks, setAllBooks] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/books")
//       .then((res) => setAllBooks(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   useEffect(() => {
//     if (!book && allBooks.length > 0) {
//       setBook(allBooks[0]);
//     }
//   }, [allBooks, book]);

//   if (!book) return <p style={{ padding: "50px" }}>Loading book...</p>;

//   // Handle borrow with token
//   const handleBorrow = async () => {
//     try {
//       const token = localStorage.getItem("token"); // get token from login
//       const response = await axios.post(
//         "http://localhost:5000/api/borrow",
//         { bookId: book._id },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       if (response.data.success) {
//         alert("Book borrowed successfully!");
//         navigate("/my-books");
//       } else {
//         alert("Book borrowed successfully!");
//       }
//     } catch (error) {
//       console.error("Error borrowing book:", error.response ? error.response.data : error);
//       alert("Error borrowing book.");
//     }
//   };

//   // Determine image: backend image if exists, otherwise default per book title
//   const bookImage = book.imageUrl || defaultImages[book.title] || book1Image;

//   return (
//     <div
//       style={{
//         display: "flex",
//         height: "calc(100vh - 70px)",
//         backgroundColor: "#f0f2f5",
//         padding: "20px",
//       }}
//     >
//       {/* Left: Book Image */}
//       <div
//         style={{
//           flex: 1,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           padding: "20px",
//         }}
//       >
//         <img
//           src={bookImage}
//           alt={book.title}
//           style={{
//             maxWidth: "100%",
//             maxHeight: "90%",
//             borderRadius: "10px",
//             boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
//           }}
//         />
//       </div>

//       {/* Right: Book Details */}
//       <div
//         style={{
//           flex: 1,
//           padding: "40px",
//           backgroundColor: "#fff",
//           borderRadius: "10px",
//           boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "flex-start",
//         }}
//       >
//         <h1 style={{ marginBottom: "15px", fontSize: "32px", color: "#333" }}>
//           {book.title}
//         </h1>
//         {book.author && <h3 style={{ marginBottom: "10px" }}>Author: {book.author}</h3>}
//         {book.genre && (
//           <p style={{ marginBottom: "10px" }}>
//             <strong>Genre:</strong> {book.genre}
//           </p>
//         )}
//         {book.publishedDate && (
//           <p style={{ marginBottom: "10px" }}>
//             <strong>Published:</strong> {book.publishedDate}
//           </p>
//         )}
//         {book.description && (
//           <p style={{ marginBottom: "20px", lineHeight: "1.6", color: "#555" }}>
//             <strong>Description:</strong> {book.description}
//           </p>
//         )}

//         <button
//           onClick={handleBorrow}
//           style={{
//             padding: "12px 25px",
//             backgroundColor: "#007bff",
//             color: "#fff",
//             border: "none",
//             borderRadius: "6px",
//             cursor: "pointer",
//             fontSize: "16px",
//             alignSelf: "flex-start",
//             transition: "background 0.2s",
//           }}
//           onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
//           onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
//         >
//           Borrow
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Catalog;


import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

// Import local images
import book1Image from "../../image/1984.jpg";
import book2Image from "../../image/pride.jpg";
import book3Image from "../../image/hobbit.jpg";
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

function Catalog() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [book, setBook] = useState(state?.book || null);
  const [allBooks, setAllBooks] = useState([]);

  // Array of all local images
  const allLocalImages = [
    book1Image, book2Image, book3Image, book4,
    book5, book6, book7, book8, book9, book10,
    book12, book13, book14, book15, book16
  ];

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/books")
      .then((res) => setAllBooks(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (!book && allBooks.length > 0) {
      setBook(allBooks[0]);
    }
  }, [allBooks, book]);

  if (!book) return <p style={{ padding: "50px" }}>Loading book...</p>;

  // Handle borrow
  const handleBorrow = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5000/api/borrow",
        { bookId: book._id },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        alert("Book borrowed successfully!");
        navigate("/my-books");
      } else {
        alert("Book borrowed successfully!");
      }
    } catch (error) {
      console.error("Error borrowing book:", error.response ? error.response.data : error);
      alert("Error borrowing book.");
    }
  };

  // Determine image dynamically:
  const bookIndex = allBooks.findIndex(b => b._id === book._id);
  const bookImage =
    book.imageUrl ||
    allLocalImages[bookIndex % allLocalImages.length] || // pick local image by index
    "https://via.placeholder.com/400x500?text=No+Image"; // fallback placeholder

  return (
    <div
      style={{
        display: "flex",
        height: "calc(100vh - 70px)",
        backgroundColor: "#f0f2f5",
        padding: "20px",
      }}
    >
      {/* Left: Book Image */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <img
          src={bookImage}
          alt={book.title}
          style={{
            maxWidth: "100%",
            maxHeight: "90%",
            borderRadius: "10px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          }}
        />
      </div>

      {/* Right: Book Details */}
      <div
        style={{
          flex: 1,
          padding: "40px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <h1 style={{ marginBottom: "15px", fontSize: "32px", color: "#333" }}>
          {book.title}
        </h1>
        {book.author && <h3 style={{ marginBottom: "10px" }}>Author: {book.author}</h3>}
        {book.genre && (
          <p style={{ marginBottom: "10px" }}>
            <strong>Genre:</strong> {book.genre}
          </p>
        )}
        {book.publishedDate && (
          <p style={{ marginBottom: "10px" }}>
            <strong>Published:</strong> {book.publishedDate}
          </p>
        )}
        {book.description && (
          <p style={{ marginBottom: "20px", lineHeight: "1.6", color: "#555" }}>
            <strong>Description:</strong> {book.description}
          </p>
        )}

        <button
          onClick={handleBorrow}
          style={{
            padding: "12px 25px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
            alignSelf: "flex-start",
            transition: "background 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Borrow
        </button>
      </div>
    </div>
  );
}

export default Catalog;
