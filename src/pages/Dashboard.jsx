// export default function Dashboard() {
//   return (
//     <div>
//       <h1>Dashboard Page</h1>
//     </div>
//   );
// }


// Dashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const name = localStorage.getItem("name") || "User";
  const role = localStorage.getItem("role") || "Member";
  const [books, setBooks] = useState([]);
  const [members, setMembers] = useState([]);
  const [loans, setLoans] = useState([]);

  // Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const booksRes = await axios.get("http://localhost:3000/books");
        const membersRes = await axios.get("http://localhost:3000/members");
        const loansRes = await axios.get("http://localhost:3000/loans");

        setBooks(booksRes.data);
        setMembers(membersRes.data);
        setLoans(loansRes.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };
    fetchData();
  }, []);

  // Compute card stats
  const totalBooks = books.length;
  const totalMembers = members.length;
  const activeLoans = loans.filter(loan => !loan.returned).length;
  const overdueLoans = loans.filter(loan => !loan.returned && new Date(loan.dueDate) < new Date()).length;

  // Upcoming due dates
  const upcomingDueDates = loans
    .filter(loan => !loan.returned)
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    .slice(0, 5);

  return (
    <div className="relative flex flex-col min-h-screen bg-[#f8f9fb] overflow-x-hidden font-sans">
      <Navbar />

      <div className="flex flex-1 gap-6 px-6 py-5 justify-center">
        {/* Left Content */}
        <div className="flex flex-col max-w-[920px] flex-1 gap-6">
          <div className="flex justify-between flex-wrap gap-3 p-4">
            <p className="text-[#0e121b] text-3xl font-bold">Dashboard</p>
          </div>

          {/* Dashboard Cards */}
          <div className="flex flex-wrap gap-4 p-4">
            <div className="flex flex-col gap-2 flex-1 min-w-[158px] p-6 rounded-lg bg-[#e8ebf3]">
              <p className="text-base font-medium text-[#0e121b]">Total Books</p>
              <p className="text-2xl font-bold text-[#0e121b]">{totalBooks}</p>
            </div>
            <div className="flex flex-col gap-2 flex-1 min-w-[158px] p-6 rounded-lg bg-[#e8ebf3]">
              <p className="text-base font-medium text-[#0e121b]">Active Loans</p>
              <p className="text-2xl font-bold text-[#0e121b]">{activeLoans}</p>
            </div>
            <div className="flex flex-col gap-2 flex-1 min-w-[158px] p-6 rounded-lg bg-[#e8ebf3]">
              <p className="text-base font-medium text-[#0e121b]">Overdue Books</p>
              <p className="text-2xl font-bold text-[#0e121b]">{overdueLoans}</p>
            </div>
            <div className="flex flex-col gap-2 flex-1 min-w-[158px] p-6 rounded-lg bg-[#e8ebf3]">
              <p className="text-base font-medium text-[#0e121b]">Total Members</p>
              <p className="text-2xl font-bold text-[#0e121b]">{totalMembers}</p>
            </div>
          </div>

          {/* Recent Activity Table */}
          <h2 className="px-4 pt-5 pb-3 text-[22px] font-bold text-[#0e121b]">Recent Activity</h2>
          <div className="overflow-x-auto p-4 bg-white rounded-lg shadow">
            <table className="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left text-gray-700">Book</th>
                  <th className="border p-2 text-left text-gray-700">Member</th>
                  <th className="border p-2 text-left text-gray-700">Date Borrowed</th>
                  <th className="border p-2 text-left text-gray-700">Due Date</th>
                  <th className="border p-2 text-left text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {loans.map(loan => (
                  <tr key={loan._id} className="hover:bg-gray-50">
                    <td className="border p-2">{loan.bookName}</td>
                    <td className="border p-2">{loan.memberName}</td>
                    <td className="border p-2">{new Date(loan.borrowDate).toLocaleDateString()}</td>
                    <td className="border p-2">{new Date(loan.dueDate).toLocaleDateString()}</td>
                    <td className={`border p-2 ${loan.returned ? "text-green-600" : new Date(loan.dueDate) < new Date() ? "text-red-600" : "text-yellow-600"}`}>
                      {loan.returned ? "Returned" : new Date(loan.dueDate) < new Date() ? "Overdue" : "Borrowed"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-[360px] flex flex-col gap-6">
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="font-bold text-gray-800">Upcoming Due Dates</h3>
            <ul className="mt-2 text-gray-600">
              {upcomingDueDates.map(loan => (
                <li key={loan._id}>{loan.bookName} - {new Date(loan.dueDate).toLocaleDateString()}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
