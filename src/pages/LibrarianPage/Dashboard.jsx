import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [members, setMembers] = useState([]);
  const [overdues, setOverdues] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      console.error("No token found. Please login again.");
      return;
    }

    const fetchData = async () => {
      try {
        const [booksRes, membersRes, overdueRes] = await Promise.all([
          axios.get("http://localhost:5000/api/books", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("http://localhost:5000/api/borrow/all", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("http://localhost:5000/api/borrow/overdue", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        setBooks(booksRes.data);
        setMembers(membersRes.data);
        setOverdues(overdueRes.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        setLoading(false);
      }
    };

    fetchData();

    // Auto-refresh every 30s
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, [token]);

  if (loading) return <p className="text-center mt-10">Loading dashboard...</p>;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold"> Library Dashboard</h1>

      {/* Books Section */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Books</h2>
        <table className="w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Author</th>
              <th className="p-2 border">ISBN</th>
              <th className="p-2 border">Available</th>
              <th className="p-2 border">Total</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book._id} className="text-center">
                <td className="p-2 border">{book.title}</td>
                <td className="p-2 border">{book.author}</td>
                <td className="p-2 border">{book.isbn}</td>
                <td className="p-2 border">{book.available}</td>
                <td className="p-2 border">{book.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Borrowed Books Section */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Borrowed Books</h2>
        <table className="w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Member</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Book</th>
              <th className="p-2 border">Borrow Date</th>
              <th className="p-2 border">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {members
              .filter((m) => !m.returnDate) // Only show active borrows
              .map((m) => (
                <tr key={m._id} className="text-center">
                  <td className="p-2 border">{m.userId?.name}</td>
                  <td className="p-2 border">{m.userId?.email}</td>
                  <td className="p-2 border">{m.bookId?.title}</td>
                  <td className="p-2 border">
                    {new Date(m.borrowDate).toLocaleDateString()}
                  </td>
                  <td className="p-2 border">
                    {new Date(m.dueDate).toLocaleDateString()}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>

      {/* Overdue Section */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Overdue Books</h2>
        {overdues.length === 0 ? (
          <p className="text-gray-600"> No overdue books</p>
        ) : (
          <table className="w-full border">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border">Member</th>
                <th className="p-2 border">Book</th>
                <th className="p-2 border">Due Date</th>
              </tr>
            </thead>
            <tbody>
              {overdues.map((o) => (
                <tr key={o._id} className="text-center">
                  <td className="p-2 border">{o.userId?.name}</td>
                  <td className="p-2 border">{o.bookId?.title}</td>
                  <td className="p-2 border">
                    {new Date(o.dueDate).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
