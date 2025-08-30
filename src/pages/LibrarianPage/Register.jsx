// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:5000/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, password }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         alert("Registration successful! Please login.");
//         navigate("/login");
//       } else {
//         alert(data.msg || "Error registering user");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Server error");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[repeating-linear-gradient(90deg,white,white_60px,#fce7f3_60px,#fce7f3_120px)]">
//       <div className="w-full max-w-md bg-white p-10 rounded-xl shadow-md">
//         {/* Logo */}
//         <h2 className="absolute top-4 left-6 text-gray-700 font-semibold text-lg">
//           MyELib
//         </h2>

//         {/* Heading */}
//         <h1 className="text-center text-2xl font-bold mb-2">CREATE ACCOUNT</h1>
//         <p className="text-center text-sm text-gray-500 mb-6">
//           Sign Up To Get Started
//         </p>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name */}
//           <div>
//             <label className="block text-sm mb-1">Full Name</label>
//             <input
//               type="text"
//               className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               placeholder="John Doe"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm mb-1">Email</label>
//             <input
//               type="email"
//               className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               placeholder="someone@gmail.com"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm mb-1">Password</label>
//             <input
//               type="password"
//               className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               placeholder="********"
//             />
//           </div>

//           {/* Confirm Password */}
//           <div>
//             <label className="block text-sm mb-1">Confirm Password</label>
//             <input
//               type="password"
//               className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//               placeholder="********"
//             />
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full transition"
//           >
//             SIGN UP
//           </button>
//         </form>

//         {/* Already have account */}
//         <p className="text-center text-sm text-gray-500 mt-4">
//           Already Have An Account?{" "}
//           <a href="/login" className="text-blue-600 hover:underline">
//             Sign In
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Register;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic password match check
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Registration successful! Please login.");
        navigate("/"); // redirect to login
      } else {
        setError(data.msg || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      setError("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-10 rounded-xl shadow-md">
        <h1 className="text-center text-2xl font-bold mb-6">CREATE ACCOUNT</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
