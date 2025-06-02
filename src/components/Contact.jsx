import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p>Email: <a href="mailto:abdimaaaalik0@gmail.com" className="text-blue-600 underline">abdimaaaalik0@gmail.com</a></p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/abdimaalik-sahal-33bbab336/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Abdimaalik Sahal
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/asahal7"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          asahal7
        </a>
      </p>
    </section>
  );
};

export default Contact;


