

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
