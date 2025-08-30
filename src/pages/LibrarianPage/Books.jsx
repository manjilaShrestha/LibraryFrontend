import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/books";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("add");
  const [currentBook, setCurrentBook] = useState({});

  const token = localStorage.getItem("token"); // Get JWT token

  // Setup Axios with token
  const axiosInstance = axios.create({
    headers: { Authorization: `Bearer ${token}` },
  });

  // Fetch books from backend
  const fetchBooks = async () => {
    try {
      const res = await axios.get(API_URL);
      setBooks(res.data);
    } catch (err) {
      console.error("Error fetching books:", err);
      alert("Failed to fetch books. Check console.");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Filter books based on search text and availability
  const filteredBooks = books.filter((book) => {
    const matchSearch =
      book.title.toLowerCase().includes(searchText.toLowerCase()) ||
      book.isbn.toLowerCase().includes(searchText.toLowerCase());
    let matchAvailability = true;
    if (availabilityFilter === "available") matchAvailability = book.available > 0;
    if (availabilityFilter === "unavailable") matchAvailability = book.available === 0;
    return matchSearch && matchAvailability;
  });

  const openModal = (type, book = {}) => {
    setModalType(type);
    setCurrentBook(book);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentBook({});
  };

  const saveBook = async () => {
    if (
      !currentBook.title ||
      !currentBook.author ||
      !currentBook.isbn ||
      !currentBook.quantity
    ) {
      alert("All fields are required!");
      return;
    }

    try {
      if (modalType === "add") {
        await axiosInstance.post(API_URL, {
          title: currentBook.title,
          author: currentBook.author,
          isbn: currentBook.isbn,
          quantity: Number(currentBook.quantity),
          available: Number(currentBook.quantity),
        });
      } else {
        await axiosInstance.put(`${API_URL}/${currentBook._id}`, {
          title: currentBook.title,
          author: currentBook.author,
          isbn: currentBook.isbn,
          quantity: Number(currentBook.quantity),
          available: Number(currentBook.available),
        });
      }
      fetchBooks();
      closeModal();
    } catch (err) {
      console.error("Error saving book:", err);
      alert(err.response?.data?.message || "Failed to save book");
    }
  };

  const deleteBook = async (id) => {
    if (!window.confirm("Are you sure you want to delete this book?")) return;
    try {
      await axiosInstance.delete(`${API_URL}/${id}`);
      fetchBooks();
    } catch (err) {
      console.error("Error deleting book:", err);
      alert(err.response?.data?.message || "Failed to delete book");
    }
  };

  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Books</h2>
        <button
          onClick={() => openModal("add")}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
        >
          Add New Book
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by title or ISBN"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border px-3 py-2 rounded flex-1"
        />
        <select
          value={availabilityFilter}
          onChange={(e) => setAvailabilityFilter(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="all">All</option>
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
      </div>

      {/* Books Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Author</th>
              <th className="px-4 py-2">ISBN</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Available</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book) => (
              <tr key={book._id} className="border-t">
                <td className="px-4 py-2">{book.title}</td>
                <td className="px-4 py-2">{book.author}</td>
                <td className="px-4 py-2">{book.isbn}</td>
                <td className="px-4 py-2">{book.quantity}</td>
                <td className="px-4 py-2">{book.available}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => openModal("edit", book)}
                    className="text-blue-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteBook(book._id)}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-xl font-bold mb-4">
              {modalType === "add" ? "Add New Book" : "Edit Book"}
            </h3>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Title"
                value={currentBook.title || ""}
                onChange={(e) =>
                  setCurrentBook({ ...currentBook, title: e.target.value })
                }
                className="border px-3 py-2 rounded"
              />
              <input
                type="text"
                placeholder="Author"
                value={currentBook.author || ""}
                onChange={(e) =>
                  setCurrentBook({ ...currentBook, author: e.target.value })
                }
                className="border px-3 py-2 rounded"
              />
              <input
                type="text"
                placeholder="ISBN"
                value={currentBook.isbn || ""}
                onChange={(e) =>
                  setCurrentBook({ ...currentBook, isbn: e.target.value })
                }
                className="border px-3 py-2 rounded"
              />
              <input
                type="number"
                placeholder="Quantity"
                value={currentBook.quantity || ""}
                onChange={(e) =>
                  setCurrentBook({ ...currentBook, quantity: e.target.value })
                }
                className="border px-3 py-2 rounded"
              />
              {modalType === "edit" && (
                <input
                  type="number"
                  placeholder="Available"
                  value={currentBook.available || ""}
                  onChange={(e) =>
                    setCurrentBook({ ...currentBook, available: e.target.value })
                  }
                  className="border px-3 py-2 rounded"
                />
              )}
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={saveBook}
                  className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Books;
