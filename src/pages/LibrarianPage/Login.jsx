// // // // // // import { useState } from "react";

// // // // // // export default function Login({ setToken }) {
// // // // // //   const [email, setEmail] = useState("");
// // // // // //   const [password, setPassword] = useState("");
// // // // // //   const [error, setError] = useState("");

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     try {
// // // // // //       const res = await fetch("http://localhost:5000/api/auth/login", {
// // // // // //         method: "POST",
// // // // // //         headers: { "Content-Type": "application/json" },
// // // // // //         body: JSON.stringify({ email, password }),
// // // // // //       });

// // // // // //       const data = await res.json();
// // // // // //       if (res.ok && data.token) {
// // // // // //         setToken(data.token);
// // // // // //       } else {
// // // // // //         setError(data.msg || "Login failed");
// // // // // //       }
// // // // // //     } catch (err) {
// // // // // //       setError("Server error");
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="flex items-center justify-center h-screen bg-gray-200">
// // // // // //       <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
// // // // // //         <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">
// // // // // //           Librarian Login
// // // // // //         </h1>
// // // // // //         {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
// // // // // //         <form onSubmit={handleSubmit} className="space-y-4">
// // // // // //           <input
// // // // // //             type="email"
// // // // // //             placeholder="Email"
// // // // // //             className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // //             value={email}
// // // // // //             onChange={(e) => setEmail(e.target.value)}
// // // // // //             required
// // // // // //           />
// // // // // //           <input
// // // // // //             type="password"
// // // // // //             placeholder="Password"
// // // // // //             className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // //             value={password}
// // // // // //             onChange={(e) => setPassword(e.target.value)}
// // // // // //             required
// // // // // //           />
// // // // // //           <button
// // // // // //             type="submit"
// // // // // //             className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
// // // // // //           >
// // // // // //             Login
// // // // // //           </button>
// // // // // //         </form>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // import { useState } from "react";
// // // // // import { useNavigate } from "react-router-dom";

// // // // // function Login() {
// // // // //   const [email, setEmail] = useState("");
// // // // //   const [password, setPassword] = useState("");
// // // // //   const navigate = useNavigate();

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();

// // // // //     try {
// // // // //       const res = await fetch("http://localhost:5000/api/auth/login", {
// // // // //         method: "POST",
// // // // //         headers: { "Content-Type": "application/json" },
// // // // //         body: JSON.stringify({ email, password }),
// // // // //       });

// // // // //       const data = await res.json();

// // // // //       if (res.ok) {
// // // // //         localStorage.setItem("token", data.token);
// // // // //         localStorage.setItem("role", data.role);

// // // // //         // Redirect based on role
// // // // //         if (data.role === "librarian") {
// // // // //           navigate("/members");
// // // // //         } else if (data.role === "borrower") {
// // // // //           navigate("/borrower-dashboard");
// // // // //         } else {
// // // // //           navigate("/");
// // // // //         }
// // // // //       } else {
// // // // //         alert(data.msg || "Invalid credentials");
// // // // //       }
// // // // //     } catch (err) {
// // // // //       console.error(err);
// // // // //       alert("Server error");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen flex items-center justify-center bg-gray-100">
// // // // //       <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
// // // // //         <h1 className="text-2xl font-bold mb-6 text-center">📚 Library Login</h1>

// // // // //         <form onSubmit={handleSubmit} className="space-y-5">
// // // // //           {/* Email */}
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700">
// // // // //               Email
// // // // //             </label>
// // // // //             <input
// // // // //               type="email"
// // // // //               className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
// // // // //               value={email}
// // // // //               onChange={(e) => setEmail(e.target.value)}
// // // // //               required
// // // // //             />
// // // // //           </div>

// // // // //           {/* Password */}
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-700">
// // // // //               Password
// // // // //             </label>
// // // // //             <input
// // // // //               type="password"
// // // // //               className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
// // // // //               value={password}
// // // // //               onChange={(e) => setPassword(e.target.value)}
// // // // //               required
// // // // //             />
// // // // //           </div>

// // // // //           {/* Submit Button */}
// // // // //           <button
// // // // //             type="submit"
// // // // //             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
// // // // //           >
// // // // //             Login
// // // // //           </button>
// // // // //         </form>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default Login;


// // // // import { useState } from "react";
// // // // import { useNavigate } from "react-router-dom";

// // // // function Login() {
// // // //   const [email, setEmail] = useState("");
// // // //   const [password, setPassword] = useState("");
// // // //   const navigate = useNavigate();

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();

// // // //     try {
// // // //       const res = await fetch("http://localhost:5000/api/auth/login", {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify({ email, password }),
// // // //       });

// // // //       const data = await res.json();

// // // //       if (res.ok) {
// // // //         localStorage.setItem("token", data.token);
// // // //         localStorage.setItem("role", data.role);

// // // //         if (data.role === "librarian") {
// // // //           navigate("/members");
// // // //         } else {
// // // //           navigate("/borrower-dashboard");
// // // //         }
// // // //       } else {
// // // //         alert(data.msg || "Invalid credentials");
// // // //       }
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //       alert("Server error");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen flex items-center justify-center bg-[repeating-linear-gradient(90deg,white,white_60px,#fce7f3_60px,#fce7f3_120px)]">
// // // //       <div className="w-full max-w-md bg-white p-10 rounded-xl shadow-md">
// // // //         {/* Logo */}
// // // //         <h2 className="absolute top-4 left-6 text-gray-700 font-semibold text-lg">
// // // //           MyELib
// // // //         </h2>

// // // //         {/* Heading */}
// // // //         <h1 className="text-center text-2xl font-bold mb-2">WELCOME BACK!</h1>
// // // //         <p className="text-center text-sm text-gray-500 mb-6">
// // // //           Log In To Your Account
// // // //         </p>

// // // //         {/* Form */}
// // // //         <form onSubmit={handleSubmit} className="space-y-4">
// // // //           {/* Email */}
// // // //           <div>
// // // //             <label className="block text-sm mb-1">Email</label>
// // // //             <input
// // // //               type="email"
// // // //               className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
// // // //               value={email}
// // // //               onChange={(e) => setEmail(e.target.value)}
// // // //               required
// // // //               placeholder="someone@gmail.com"
// // // //             />
// // // //           </div>

// // // //           {/* Password */}
// // // //           <div>
// // // //             <label className="block text-sm mb-1">Password</label>
// // // //             <input
// // // //               type="password"
// // // //               className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
// // // //               value={password}
// // // //               onChange={(e) => setPassword(e.target.value)}
// // // //               required
// // // //               placeholder="********"
// // // //             />
// // // //           </div>

// // // //           {/* Forgot Password */}
// // // //           <div className="text-right">
// // // //             <a href="#" className="text-xs text-blue-600 hover:underline">
// // // //               Forgot Password?
// // // //             </a>
// // // //           </div>

// // // //           {/* Submit */}
// // // //           <button
// // // //             type="submit"
// // // //             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full transition"
// // // //           >
// // // //             SIGN IN
// // // //           </button>
// // // //         </form>

// // // //         {/* Register */}
// // // //         <p className="text-center text-sm text-gray-500 mt-4">
// // // //           Don’t Have An Account?{" "}
// // // //           <a href="/register" className="text-blue-600 hover:underline">
// // // //             Sign Up
// // // //           </a>
// // // //         </p>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Login;


// // // import { useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import Dashboard from "./Dashboard";

// // // function Login() {
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const navigate = useNavigate();

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     try {
// // //       const res = await fetch("http://localhost:5000/api/auth/login", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ email, password }),
// // //       });

// // //       const data = await res.json();

// // //       if (res.ok) {
// // //         // Save token, role, and login state
// // //         localStorage.setItem("token", data.token);
// // //         localStorage.setItem("role", data.role);
// // //         localStorage.setItem("isLoggedIn", "true"); // ✅ login flag

// // //         // Redirect everyone to dashboard
// // //         navigate("/dashboard");
// // //       } else {
// // //         alert(data.msg || "Invalid credentials");
// // //       }
// // //     } catch (err) {
// // //       console.error(err);
// // //       alert("Server error");
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen flex items-center justify-center bg-[repeating-linear-gradient(90deg,white,white_60px,#fce7f3_60px,#fce7f3_120px)]">
// // //       <div className="w-full max-w-md bg-white p-10 rounded-xl shadow-md">
// // //         <h2 className="absolute top-4 left-6 text-gray-700 font-semibold text-lg">
// // //           MyELib
// // //         </h2>

// // //         <h1 className="text-center text-2xl font-bold mb-2">WELCOME BACK!</h1>
// // //         <p className="text-center text-sm text-gray-500 mb-6">
// // //           Log In To Your Account
// // //         </p>

// // //         <form onSubmit={handleSubmit} className="space-y-4">
// // //           <div>
// // //             <label className="block text-sm mb-1">Email</label>
// // //             <input
// // //               type="email"
// // //               className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
// // //               value={email}
// // //               onChange={(e) => setEmail(e.target.value)}
// // //               required
// // //               placeholder="someone@gmail.com"
// // //             />
// // //           </div>

// // //           <div>
// // //             <label className="block text-sm mb-1">Password</label>
// // //             <input
// // //               type="password"
// // //               className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
// // //               value={password}
// // //               onChange={(e) => setPassword(e.target.value)}
// // //               required
// // //               placeholder="********"
// // //             />
// // //           </div>

// // //           <div className="text-right">
// // //             <a href="#" className="text-xs text-blue-600 hover:underline">
// // //               Forgot Password?
// // //             </a>
// // //           </div>

// // //           <button
// // //             type="submit"
// // //             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full transition"
// // //           >
// // //             SIGN IN
// // //           </button>
// // //         </form>

// // //         <p className="text-center text-sm text-gray-500 mt-4">
// // //           Don’t Have An Account?{" "}
// // //           <a href="/register" className="text-blue-600 hover:underline">
// // //             Sign Up
// // //           </a>
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Login;


// // import { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";

// // function Login() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const navigate = useNavigate();

// //   // ✅ Redirect if already logged in
// //   useEffect(() => {
// //     const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
// //     if (isLoggedIn) {
// //       navigate("/dashboard");
// //     }
// //   }, [navigate]);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const res = await fetch("http://localhost:5000/api/auth/login", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ email, password }),
// //       });

// //       const data = await res.json();

// //       if (res.ok) {
// //         // Save login state
// //         localStorage.setItem("token", data.token);
// //         localStorage.setItem("name", data.user.name);
// //         localStorage.setItem("role", data.user.role);

// //         // localStorage.setItem("name", data.name);
// //         // localStorage.setItem("role", data.role);
// //         localStorage.setItem("isLoggedIn", "true");

// //         // Redirect to dashboard
// //         if(data.user.role === "librarian"){
// //           navigate("/dashboard");
// //         }
// //         else if (data.user.role === "borrower"){
// //           navigate("/home");
        
// //         }
// //       } else {
// //         alert(data.msg || "Invalid credentials");
// //       }
// //     } catch (err) {
// //       console.error(err);
// //       alert("Server error");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-100">
// //       <div className="w-full max-w-md bg-white p-10 rounded-xl shadow-md">
// //         <h1 className="text-center text-2xl font-bold mb-6">WELCOME BACK!</h1>

// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <div>
// //             <label>Email</label>
// //             <input
// //               type="email"
// //               autoComplete="username"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //               className="w-full border px-3 py-2 rounded"
// //             />
// //           </div>

// //           <div>
// //             <label>Password</label>
// //             <input
// //               type="password"
// //               autoComplete="current-password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //               className="w-full border px-3 py-2 rounded"
// //             />
// //           </div>

// //           <button
// //             type="submit"
// //             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
// //           >
// //             LOGIN
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;


// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   // ✅ Centralized redirect logic
//   const redirectUser = () => {
//     const role = localStorage.getItem("role");

//     if (role === "librarian") {
//       navigate("/dashboard");
//     } else if (role === "borrower") {
//       navigate("/home");
//     }
//   };

//   // ✅ Redirect if already logged in
//   useEffect(() => {
//     const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
//     if (isLoggedIn) {
//       redirectUser();
//     }
//   }, [navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         // Save login state
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("name", data.user.name);
//         localStorage.setItem("role", data.user.role);
//         localStorage.setItem("isLoggedIn", "true");

//         // ✅ Just call redirect function
//         redirectUser();
//       } else {
//         alert(data.msg || "Invalid credentials");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Server error");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md bg-white p-10 rounded-xl shadow-md">
//         <h1 className="text-center text-2xl font-bold mb-6">WELCOME BACK!</h1>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label>Email</label>
//             <input
//               type="email"
//               autoComplete="username"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full border px-3 py-2 rounded"
//             />
//           </div>

//           <div>
//             <label>Password</label>
//             <input
//               type="password"
//               autoComplete="current-password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full border px-3 py-2 rounded"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//           >
//             LOGIN
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // 🔹 Centralized redirect function
  const redirectUser = (role) => {
    if (role === "librarian") {
      navigate("/dashboard");
    } else if (role === "borrower") {
      navigate("/home");
    } else {
      navigate("/home"); // fallback for any unknown role
    }
  };

  // 🔹 Redirect if already logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const role = localStorage.getItem("role");
    if (isLoggedIn && role) {
      redirectUser(role);
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // 🔹 Save login state
        localStorage.setItem("token", data.token);
        localStorage.setItem("name", data.user.name);
        localStorage.setItem("role", data.user.role);
        localStorage.setItem("isLoggedIn", "true");

        // 🔹 Redirect based on role
        redirectUser(data.user.role);
      } else {
        alert(data.msg || "Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-10 rounded-xl shadow-md">
        <h1 className="text-center text-2xl font-bold mb-6">WELCOME BACK!</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
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
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
