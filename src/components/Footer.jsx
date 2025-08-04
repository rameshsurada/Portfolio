import React from "react";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-6 px-4 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm">
          &copy; 2025 Ramesh Surada. All rights reserved.
        </p>

        {/* Contact Links */}
        <div className="flex space-x-6 text-xl">
          <a
            href="mailto:suradaramesh4@gmail.com"
            aria-label="Email"
            className="hover:text-blue-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMail />
          </a>
          <a
            href="https://github.com/rameshsurada"
            aria-label="GitHub"
            className="hover:text-gray-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rameshsurada/"
            aria-label="LinkedIn"
            className="hover:text-blue-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/rameshsurada/"
            aria-label="LeetCode"
            className="hover:text-yellow-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* LeetCode icon (custom SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="inline-block"
            >
              <path d="M18.666 3.54L14.85 8.607 20.45 11.48a.93.93 0 01.13 1.627l-2.8 2.16a.96.96 0 01-1.306-.286l-2.345-3.487-3.374 4.65 2.208 1.32a.945.945 0 11-1.006 1.582L6.36 15.635a.94.94 0 01-.315-1.282l7.458-12.9a.947.947 0 011.646-.028l3.433 5.208a.951.951 0 01-.01 1.045z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
