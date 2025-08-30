import { useState, useEffect } from "react";
import axios from "axios";

export default function Members() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token"); 
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        // fetch all borrowed records
        const resAll = await axios.get("http://localhost:5000/api/borrow/all", { headers });

        // extract unique members from borrow records
        const uniqueMembers = {};
        resAll.data.forEach((m) => {
          if (m.userId?._id) {
            uniqueMembers[m.userId._id] = {
              name: m.userId.name,
              email: m.userId.email,
            };
          }
        });

        setMembers(Object.values(uniqueMembers)); // only unique users
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4"> Library Members</h2>
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
          </tr>
        </thead>
        <tbody>
          {members.map((m, index) => (
            <tr key={index}>
              <td className="p-2 border">{m.name}</td>
              <td className="p-2 border">{m.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
