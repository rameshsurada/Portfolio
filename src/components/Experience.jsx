import React from "react";
import StarfieldCanvas from "./StarfieldCanvas";

// Logo images
import cscLogo from "../assets/cscLogo.png";
import datavalleyLogo from "../assets/datavalleyLogo.png";

// Icons
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiBootstrap
} from "react-icons/si";

// Skill icon mapping
const skillIcons = {
  React: <FaReact className="text-cyan-400" />,
  "Node.js": <FaNodeJs className="text-green-600" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  Express: <SiExpress className="text-gray-300" />,
  HTML5: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  TailwindCSS: <SiTailwindcss className="text-sky-400" />,
  Bootstrap: <SiBootstrap className="text-purple-600" />
};

// Internship data
const internships = [
  {
    role: "MERN Stack Developer - Intern",
    company: "Council for Skills and Competencies (CSC India)",
    logo: cscLogo,
    duration: "Dec 2024 - Apr 2025 · 5 mos",
    location: "Vishakhapatnam, Andhra Pradesh, India · Remote",
    description: [
      "Developed responsive and dynamic web applications using React.js for the frontend and Node.js/Express for the backend.",
      "Implemented RESTful APIs and connected them with MongoDB for seamless data operations.",
      "Participated in live training sessions, code reviews, and real-time collaborative tasks.",
      "Improved hands-on skills in routing, authentication, state management, and full-stack deployment.",
      "Strengthened problem-solving and remote team collaboration capabilities."
    ],
    skills: ["React", "Node.js", "JavaScript", "MongoDB", "Express"]
  },
  {
    role: "Web Development Intern",
    company: "Datavalley Inc",
    logo: datavalleyLogo,
    duration: "May 2024 - Jun 2024 · 2 mos",
    location: "Vijayawada, Andhra Pradesh, India · Remote",
    description: [
      "Developed responsive, user-friendly web pages using HTML, CSS, and JavaScript.",
      "Utilized front-end frameworks such as Bootstrap and Tailwind CSS to create consistent and visually appealing layouts.",
      "Assisted in designing and implementing key UI components like user dashboards and payment pages.",
      "Tested and debugged websites to ensure cross-browser compatibility and mobile responsiveness."
    ],
    skills: ["HTML5", "CSS", "JavaScript", "Bootstrap", "TailwindCSS"]
  }
];

const Experience = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: "black",
        padding: "3rem 1rem"
      }}
    >
      {/* Starfield background */}
      <StarfieldCanvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-white">
        <h2 className="text-4xl font-bold mb-10 text-blue-50 text-center">
          Internship Experience
        </h2>

        {internships.map((internship, idx) => (
          <div
            key={idx}
            className="mb-12 border border-gray-700 rounded-xl p-6 bg-[#111111] shadow-lg shadow-blue-100/30"
          >
            <h3 className="text-2xl font-semibold text-blue-100">
              {internship.role}
            </h3>

            {/* Company Logo and Info */}
            <div className="flex items-center gap-4 mt-3">
              <img
                src={internship.logo}
                alt={internship.company}
                className="w-12 h-12 rounded-full border border-white/20 object-contain"
              />
              <div>
                <p className="text-gray-400 italic">{internship.company}</p>
                <p className="text-gray-500 text-sm">
                  {internship.duration} · {internship.location}
                </p>
              </div>
            </div>

            {/* Description */}
            <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2 text-sm sm:text-base">
              {internship.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>

            {/* Skills */}
            <div className="mt-5 flex flex-wrap gap-4">
              {internship.skills.map((skill, i) => (
                <span
                  key={i}
                  className="stack-btn flex items-center gap-3 px-5 py-2 text-sm font-medium border border-white/10 rounded-full bg-white/5 backdrop-blur-sm"
                >
                  {skillIcons[skill] || null}
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
