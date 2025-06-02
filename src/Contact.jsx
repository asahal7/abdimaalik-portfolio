// src/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-16 px-4 sm:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Me</h2>
        <p className="text-gray-600 mb-8">
          Feel free to reach out for opportunities, collaborations, or just to connect!
        </p>
        <form
          action="https://formspree.io/f/yourformid" // Replace this later
          method="POST"
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
