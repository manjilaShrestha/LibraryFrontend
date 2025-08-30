// export default function Transactions() {
//   return (
//     <div>
//       <h1>Transactions Page</h1>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import axios from "axios";

export default function Members() {
  const [members, setMembers] = useState([]);
  const [overdueMembers, setOverdueMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token"); // if you store JWT
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        // fetch all borrowed records
        const resAll = await axios.get("http://localhost:5000/api/borrow/all", { headers });
        // fetch overdue borrowers
        const resOverdue = await axios.get("http://localhost:5000/api/borrow/overdue", { headers });

        setMembers(resAll.data);
        setOverdueMembers(resOverdue.data.map(m => m._id)); // keep only overdue IDs
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    fetchData();
  }, []);

  const isOverdue = (id) => overdueMembers.includes(id);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Transactions</h2>
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Book Borrowed</th>
            <th className="p-2 border">Borrow Date</th>
            <th className="p-2 border">Due Date</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {members.map((m) => (
            <tr key={m._id}>
              <td className="p-2 border">{m.userId?.name}</td>
              <td className="p-2 border">{m.userId?.email}</td>
              <td className="p-2 border">{m.bookId?.title}</td>
              <td className="p-2 border">{new Date(m.borrowDate).toLocaleDateString()}</td>
              <td className="p-2 border">{new Date(m.dueDate).toLocaleDateString()}</td>
              <td
                className={`p-2 border font-semibold ${
                  isOverdue(m._id) ? "text-red-600" : "text-green-600"
                }`}
              >
                {isOverdue(m._id) ? "Overdue" : "Active"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
