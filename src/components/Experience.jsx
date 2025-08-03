import React from "react";
import StarfieldCanvas from "./StarfieldCanvas";

// Import icons from react-icons
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiBootstrap
} from "react-icons/si";

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

const internships = [
  {
    role: "MERN Stack Developer",
    company: "Council for Skills and Competencies (CSC India)",
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
        <h2 className="text-4xl font-bold mb-10 text-blue-50">
          Internship Experience
        </h2>

        {internships.map((internship, idx) => (
          <div
            key={idx}
            className="mb-12 border border-gray-700 rounded-lg p-6 bg-[#111111] shadow-lg shadow-blue-100/40"
          >
            <h3 className="text-2xl font-semibold text-blue-200">
              {internship.role}
            </h3>
            <p className="text-gray-400 italic mt-1">{internship.company}</p>
            <p className="text-gray-500 mt-1">
              {internship.duration} · {internship.location}
            </p>

            <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
              {internship.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-3">
              {internship.skills.map((skill, i) => (
                <span
                  key={i}
                  className="stack-btn flex items-center gap-4 px-5 py-2 rounded-full text-xs font-medium  transition cursor-default select-none"
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
