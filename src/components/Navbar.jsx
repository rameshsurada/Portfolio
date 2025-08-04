import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import myResume from "../assets/myResume.pdf";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Project", href: "#projects" },
  { label: "Work", href: "/experience", isRoute: true },
  { label: "About", href: "#about" },
  { label: "GitHub", href: "https://github.com/rameshsurada", external: true }
];

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleClick = (href, isRoute = false, external = false) => {
    if (external) {
      window.open(href, "_blank");
      return;
    }

    if (isRoute) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ scroll to top
      setIsMobileOpen(false);
      return;
    }

    const id = href.replace("#", "");

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }

    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <ul className="fixed top-4 left-1/2 z-50 hidden -translate-x-1/2 items-center space-x-1 rounded-full border border-black/10 bg-black/5 px-1.5 py-1 backdrop-blur-md md:flex dark:border-white/10 dark:bg-white/10">
        {navLinks.map(({ label, href, external, isRoute }) => (
          <li key={label} className="relative list-none">
            <button
              onClick={() => handleClick(href, isRoute, external)}
              className="block px-4 py-1.5 text-sm font-light text-black transition hover:text-black/80 dark:text-white/70 dark:hover:text-white"
            >
              {label}
            </button>
          </li>
        ))}

        <li className="list-none">
          <button
            onClick={() => window.open(myResume, "_blank")}
            className="relative inline-block h-full cursor-pointer rounded-full bg-black/20 px-4 py-1.5 text-sm font-light text-black transition-all duration-300 hover:bg-black/15 hover:text-black/85 dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/15 dark:hover:text-white/90"
          >
            CV
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
              {navLinks.map(({ label, href, external }) => (
                <li key={label}>
                  {external ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-black dark:text-white hover:underline"
                    >
                      {label}
                    </a>
                  ) : (
                    <button
                      onClick={() => handleClick(href)}
                      className="block w-full text-left text-sm text-black dark:text-white hover:underline"
                    >
                      {label}
                    </button>
                  )}
                </li>
              ))}
              <li>
                <button className="w-full rounded-md bg-black/10 px-3 py-1.5 text-left text-sm text-black dark:text-white hover:bg-black/20 dark:hover:bg-white/20">
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
