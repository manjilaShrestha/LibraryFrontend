import React from "react";
import aboutImage from "../../image/cover.avif";

function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <div className="max-w-5xl w-full p-8 flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl shadow-xl">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={aboutImage}
            alt="About Us"
            className="rounded-xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl font-bold mb-6 text-blue-600">About Us</h1>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Welcome to our library system! We are dedicated to providing an easy
            and efficient way to borrow and return books. Our platform ensures
            that borrowers can access a wide range of books and return them
            conveniently, keeping track of due dates to avoid penalties.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our borrow and return policy is simple: borrow the book you love,
            enjoy it, and return it on time. You can always check your current
            borrowed books and due dates through your dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
