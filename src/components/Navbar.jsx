import React, { useState } from "react";
import { Link } from "react-router-dom"; // optional

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Project", href: "/projects" },
  { label: "Work", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "GitHub", href: "https://github.com/rameshsurada" }
];

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <ul className="fixed top-4 left-1/2 z-50 hidden -translate-x-1/2 items-center space-x-1 rounded-full border border-black/10 bg-black/5 px-1.5 py-1 backdrop-blur-md md:flex dark:border-white/10 dark:bg-white/10">
        {navLinks.map(({ label, href }, i) => (
          <li key={label} className="relative list-none">
            <a
              href={href}
              className="block px-4 py-1.5 text-sm font-light text-black transition hover:text-black/80 dark:text-white/70 dark:hover:text-white"
            >
              {label}
            </a>
            {i === 0 && (
              <span className="bg-primary/5 absolute inset-0 -z-10 w-full rounded-full">
                <div className="bg-primary absolute -top-[9px] left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full">
                  <div className="bg-primary/20 absolute -top-2 -left-2 h-6 w-12 rounded-full blur-md"></div>
                  <div className="bg-primary/20 absolute -top-1 h-6 w-8 rounded-full blur-md"></div>
                  <div className="bg-primary/20 absolute top-0 left-2 h-4 w-4 rounded-full blur-sm"></div>
                </div>
              </span>
            )}
          </li>
        ))}
        <li className="list-none">
          <button className="relative inline-block h-full cursor-pointer rounded-full bg-black/20 px-4 py-1.5 text-sm font-light text-black transition-all duration-300 hover:bg-black/15 hover:text-black/85 dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/15 dark:hover:text-white/90">
            CV
            <div
              aria-hidden="true"
              className="absolute bottom-0 h-1/3 w-full -translate-x-4 rounded-full bg-black opacity-30 blur-sm dark:bg-white"
            ></div>
          </button>
        </li>
      </ul>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="inline-flex items-center justify-center rounded-md bg-black/10 p-2 text-black dark:text-white dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {isMobileOpen && (
          <div className="absolute left-0 mt-3 w-48 rounded-lg bg-white p-4 shadow-lg dark:bg-black/80 backdrop-blur-md">
            <ul className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="block text-sm text-black dark:text-white hover:underline"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="w-full rounded-md bg-black/10 px-3 py-1.5 text-left text-sm text-black dark:text-white hover:bg-black/20 dark:hover:bg-white/20"
                >
                  CV
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
