import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      
      <p>
        Email:{" "}
        <a
          href="mailto:abdimaaaalik0@gmail.com"
          className="text-blue-600 underline"
        >
          abdimaaaalik0@gmail.com
        </a>
      </p>
      
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
      
      <p>
        LeetCode:{" "}
        <a
          href="https://leetcode.com/u/asahal0/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          asahal0
        </a>
      </p>

      {/* Resume Download Button */}
      <a
        href="/abdimaalik-portfolio/AbdimaalikSahalCV-v2.pdf?v=2"  
        download
        className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Contact;





