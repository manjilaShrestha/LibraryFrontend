import React, { useState, useEffect } from "react";
import axios from "axios";

function Contact() {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({ msg: "", type: "" });

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (status.msg) {
      const timer = setTimeout(() => setStatus({ msg: "", type: "" }), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      setStatus({ msg: "Please fill in all fields.", type: "error" });
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/send-message",
        { name, email, subject, message },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data.success) {
        setStatus({ msg: "Message sent successfully!", type: "success" });
        setSubject("");
        setMessage("");
        window.dispatchEvent(new Event("newMessage"));
      } else {
        setStatus({ msg: res.data.msg || "Failed to send message.", type: "error" });
      }
    } catch (err) {
      console.error(err);
      setStatus({ msg: "Server error. Please try again later.", type: "error" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start py-16">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-10">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Contact Us</h2>
        <p className="text-center text-gray-600 mb-6">
          Have questions or feedback? Send us a message.
        </p>

        {status.msg && (
          <div
            className={`mb-4 px-4 py-2 rounded ${
              status.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {status.msg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="p-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-700"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="p-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-700"
          />
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            className="p-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-700"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            className="p-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-700 min-h-[120px] resize-none"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
