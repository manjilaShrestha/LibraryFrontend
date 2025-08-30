import React, { useEffect, useState } from "react";
import axios from "axios";

const History = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      console.error("No token found. Please login again.");
      return;
    }

    const fetchHistory = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/borrow/all", {
          headers: { Authorization: `Bearer ${token}` },
        });

        //  Only returned borrows
        setHistory(res.data.filter((b) => b.returnDate));
        setLoading(false);
      } catch (err) {
        console.error("Error fetching borrow history:", err);
        setLoading(false);
      }
    };

    fetchHistory();
  }, [token]);

  // Filter history by name (case insensitive)
  const filteredHistory = history.filter((h) =>
    h.userId?.name?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className="text-center mt-10">Loading history...</p>;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold"> Borrow History</h1>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by member name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      {filteredHistory.length === 0 ? (
        <p className="text-gray-600">No matching results.</p>
      ) : (
        <table className="w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Member</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Book</th>
              <th className="p-2 border">Borrow Date</th>
              <th className="p-2 border">Due Date</th>
              <th className="p-2 border">Return Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredHistory.map((h) => (
              <tr key={h._id} className="text-center">
                <td className="p-2 border">{h.userId?.name}</td>
                <td className="p-2 border">{h.userId?.email}</td>
                <td className="p-2 border">{h.bookId?.title}</td>
                <td className="p-2 border">
                  {new Date(h.borrowDate).toLocaleDateString()}
                </td>
                <td className="p-2 border">
                  {new Date(h.dueDate).toLocaleDateString()}
                </td>
                <td className="p-2 border text-green-600 font-semibold">
                  {new Date(h.returnDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default History;
