import React, { useEffect, useState } from "react";
import axios from "axios";

function MyBooks() {
  const [borrows, setBorrows] = useState([]);
  const [removing, setRemoving] = useState(null); // Track removing book ID
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchBorrows = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/borrow/my-borrows", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBorrows(res.data);
      } catch (err) {
        console.error("Error fetching borrowed books:", err.response ? err.response.data : err);
        setError("Failed to fetch borrowed books");
      } finally {
        setLoading(false);
      }
    };

    fetchBorrows();
  }, [token]);

  const handleReturn = async (borrowId) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/borrow/return",
        { borrowId },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data.msg === "Book already returned") {
        alert("This book has already been returned.");
        // remove from frontend anyway
        setBorrows((prev) => prev.filter((b) => b._id !== borrowId));
        return;
      }

      if (res.data.success || res.data.msg === "Book returned successfully") {
        // Animate removal
        setRemoving(borrowId);

        // Wait for animation then remove from state
        setTimeout(() => {
          setBorrows((prev) => prev.filter((b) => b._id !== borrowId));
          setRemoving(null);
        }, 300);
      } else {
        alert("Failed to return the book.");
      }
    } catch (err) {
      console.error("Error returning book:", err.response ? err.response.data : err);
      alert("Error returning the book.");
    }
  };

  if (loading) return <p className="p-6">Loading your borrowed books...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  // Filter out already returned books
  const activeBorrows = borrows.filter((b) => !b.returnDate);

  if (activeBorrows.length === 0) return <p className="p-6">No borrowed books found.</p>;

  return (
    <div className="px-10 py-6">
      <h2 className="text-2xl font-bold mb-6">My Borrowed Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {activeBorrows.map((borrow) => {
          if (!borrow.bookId) return null;

          return (
            <div
              key={borrow._id}
              className={`flex flex-col gap-2 p-4 border rounded-lg shadow hover:shadow-lg transition-all duration-300 ${
                removing === borrow._id ? "opacity-0 transform scale-95" : "opacity-100"
              }`}
            >
              <p className="text-[#111218] text-base font-semibold">
                {borrow.bookId.title}
              </p>
              <p className="text-[#616789] text-sm">Author: {borrow.bookId.author}</p>
              <p className="text-[#616789] text-sm">ISBN: {borrow.bookId.isbn}</p>
              <p className="text-sm mt-1">
                Borrowed: {new Date(borrow.borrowDate).toLocaleDateString()}
              </p>
              <p className="text-sm">
                Due: {new Date(borrow.dueDate).toLocaleDateString()}
              </p>

              <button
                onClick={() => handleReturn(borrow._id)}
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Return
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyBooks;
