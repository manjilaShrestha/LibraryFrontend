// // import { useEffect, useState } from "react";

// // export default function Members({ token, setToken }) {
// //   const [borrows, setBorrows] = useState([]);
// //   const [overdue, setOverdue] = useState([]);
// //   const [error, setError] = useState("");

// //   const fetchData = async () => {
// //     try {
// //       const res1 = await fetch("http://localhost:5000/api/borrows/all", {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       const data1 = await res1.json();

// //       const res2 = await fetch("http://localhost:5000/api/borrows/overdue", {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       const data2 = await res2.json();

// //       if (res1.ok) setBorrows(data1);
// //       if (res2.ok) setOverdue(data2);

// //       if (!res1.ok || !res2.ok) setError("Failed to fetch data");
// //     } catch {
// //       setError("Server error");
// //     }
// //   };

// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const handleLogout = () => {
// //     setToken(null);
// //   };

// //   return (
// //     <div className="p-6">
// //       {/* Navbar */}
// //       <div className="flex justify-between items-center mb-6">
// //         <h1 className="text-2xl font-bold text-gray-700">📚 Library Members</h1>
// //         <button
// //           onClick={handleLogout}
// //           className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
// //         >
// //           Logout
// //         </button>
// //       </div>

// //       {error && <p className="text-red-500 mb-4">{error}</p>}

// //       {/* All Borrows */}
// //       <h2 className="text-xl font-semibold mb-2">All Borrowed Books</h2>
// //       <div className="bg-white shadow rounded-2xl p-4 mb-6">
// //         {borrows.length > 0 ? (
// //           <table className="w-full border-collapse">
// //             <thead>
// //               <tr className="bg-gray-100 text-left">
// //                 <th className="p-2 border">Borrower</th>
// //                 <th className="p-2 border">Book</th>
// //                 <th className="p-2 border">Due Date</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {borrows.map((b) => (
// //                 <tr key={b._id}>
// //                   <td className="p-2 border">{b.user?.name || "N/A"}</td>
// //                   <td className="p-2 border">{b.book?.title || "N/A"}</td>
// //                   <td className="p-2 border">
// //                     {b.dueDate ? new Date(b.dueDate).toLocaleDateString() : "N/A"}
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         ) : (
// //           <p>No borrow records found.</p>
// //         )}
// //       </div>

// //       {/* Overdue */}
// //       <h2 className="text-xl font-semibold mb-2">Overdue Books</h2>
// //       <div className="bg-white shadow rounded-2xl p-4">
// //         {overdue.length > 0 ? (
// //           <table className="w-full border-collapse">
// //             <thead>
// //               <tr className="bg-gray-100 text-left">
// //                 <th className="p-2 border">Borrower</th>
// //                 <th className="p-2 border">Book</th>
// //                 <th className="p-2 border">Due Date</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {overdue.map((o) => (
// //                 <tr key={o._id}>
// //                   <td className="p-2 border">{o.user?.name || "N/A"}</td>
// //                   <td className="p-2 border">{o.book?.title || "N/A"}</td>
// //                   <td className="p-2 border text-red-500 font-semibold">
// //                     {o.dueDate ? new Date(o.dueDate).toLocaleDateString() : "N/A"}
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         ) : (
// //           <p>No overdue records.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }


// import { useEffect, useState } from "react";

// function Members() {
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     const fetchMembers = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/borrows/all", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         const data = await res.json();

//         if (res.ok) {
//           setMembers(data);
//         } else {
//           alert(data.msg || "Failed to fetch members");
//         }
//       } catch (error) {
//         console.error(error);
//         alert("Server error");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMembers();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold mb-6 text-center">📚 Member Records</h1>

//       {loading ? (
//         <p className="text-center">Loading...</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {members.map((member) => (
//             <div
//               key={member._id}
//               className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition"
//             >
//               <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
//               <p className="text-gray-600">📖 Book: {member.bookTitle}</p>
//               <p className="text-gray-600">
//                 ⏰ Borrowed: {new Date(member.borrowDate).toLocaleDateString()}
//               </p>
//               <p className="text-gray-600">
//                 🔙 Due: {new Date(member.dueDate).toLocaleDateString()}
//               </p>

//               {member.overdue && (
//                 <p className="text-red-500 font-semibold mt-2">⚠️ Overdue</p>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Members;


import { useState } from "react";

const Members = () => {
  const [search, setSearch] = useState("");

  const members = [
    { id: "#1231", name: "Sophie Clark", type: "Premium", join: "2023-01-10", expiry: "2024-01-10", status: "Active" },
    { id: "#1232", name: "Ethan Brown", type: "Standard", join: "2023-02-12", expiry: "2024-02-12", status: "Active" },
    { id: "#1233", name: "Olivia Carter", type: "Premium", join: "2023-03-05", expiry: "2024-03-05", status: "Active" },
    { id: "#1234", name: "Liam Davis", type: "Premium", join: "2023-04-01", expiry: "2024-04-01", status: "Active" },
    { id: "#1235", name: "Ava Harris", type: "Basic", join: "2023-05-06", expiry: "2024-05-06", status: "Active" },
    { id: "#1236", name: "Noah Fraser", type: "Standard", join: "2023-06-10", expiry: "2024-06-10", status: "Active" },
    { id: "#1237", name: "Jackson Hayes", type: "Standard", join: "2023-07-15", expiry: "2024-07-15", status: "Active" },
    { id: "#1238", name: "Mia Thompson", type: "Premium", join: "2023-08-20", expiry: "2024-08-20", status: "Active" },
    { id: "#1239", name: "Margaret Green", type: "Basic", join: "2023-09-25", expiry: "2024-09-25", status: "Active" },
    { id: "#1240", name: "Lucas Jenkins", type: "Premium", join: "2023-10-30", expiry: "2024-10-30", status: "Active" },
  ];

  const filtered = members.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6">Members</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h2 className="text-gray-500 text-sm">Total Members</h2>
          <p className="text-2xl font-bold">1,250</p>
          <p className="text-green-500 text-xs">+5%</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h2 className="text-gray-500 text-sm">Active Members</h2>
          <p className="text-2xl font-bold">1,100</p>
          <p className="text-green-500 text-xs">+5%</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h2 className="text-gray-500 text-sm">New This Month</h2>
          <p className="text-2xl font-bold">50</p>
          <p className="text-green-500 text-xs">+20%</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h2 className="text-gray-500 text-sm">Expired Members</h2>
          <p className="text-2xl font-bold text-red-500">100</p>
          <p className="text-red-500 text-xs">-5%</p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-2">
        <input
          type="text"
          placeholder="Search by name"
          className="border border-gray-300 rounded-lg px-3 py-2 w-full sm:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex gap-2">
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <option>Membership Type</option>
            <option>Basic</option>
            <option>Standard</option>
            <option>Premium</option>
          </select>
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <option>Status</option>
            <option>Active</option>
            <option>Expired</option>
          </select>
        </div>
      </div>

      {/* Members Table */}
      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Type</th>
              <th className="p-3">Join Date</th>
              <th className="p-3">Expiry Date</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((m) => (
              <tr key={m.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{m.id}</td>
                <td className="p-3">{m.name}</td>
                <td className="p-3">{m.type}</td>
                <td className="p-3">{m.join}</td>
                <td className="p-3">{m.expiry}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      m.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {m.status}
                  </span>
                </td>
                <td className="p-3">
                  <button className="text-blue-600 hover:underline">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-4 gap-2">
        <button className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200">1</button>
        <button className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200">2</button>
        <button className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200">3</button>
        <button className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200">...</button>
        <button className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200">5</button>
      </div>
    </div>
  );
};

export default Members;
