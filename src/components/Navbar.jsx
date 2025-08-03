// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left - Your Name */}
        <div className="text-lg font-semibold text-blue-600">Ramesh Surada</div>

        {/* Right - Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Right - Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-700 focus:outline-none"
          >
            <IoReorderThreeOutline />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-3">
          <ul className="flex flex-col gap-3 text-sm font-medium">
            <li>
              <Link to="/skills" onClick={() => setMenuOpen(false)}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setMenuOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/experience" onClick={() => setMenuOpen(false)}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="/education" onClick={() => setMenuOpen(false)}>
                Education
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
