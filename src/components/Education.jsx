import React from "react";
import StarfieldCanvas from "./StarfieldCanvas";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    year: "2021 – 2025",
    title: "B.Tech in CSE",
    institution: "Jawaharlal Nehru Technological University, Vizianagaram",
    score: "CGPA: 7.5"
  },
  {
    year: "2020",
    title: "Intermediate (MPC)",
    institution: "Sri Chaitanya Junior College, Visakhapatnam",
    score: "945/1000 Marks"
  },
  {
    year: "2018",
    title: "SSC",
    institution: "ARDAR Public School, Vizianagaram",
    score: "CGPA: 10"
  }
];

const EducationJourney = () => (
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
    <div className="relative z-10 max-w-5xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-16 text-center text-indigo-300">
        Education Roadmap
      </h2>
      <div className="relative border-l-2 border-indigo-600 pl-8 ml-4 space-y-14">
        {educationData.map((edu, i) => (
          <div
            key={i}
            className="relative opacity-0 animate-fadeIn"
            style={{ animationDelay: `${i * 0.4}s` }}
          >
            <span className="absolute -left-8 top-[4px] w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-lg">
              <FaGraduationCap size={14} />
            </span>
            <p className="text-indigo-400 font-semibold">{edu.year}</p>
            <h3 className="text-xl font-bold text-white hover:text-indigo-200 transition">
              {edu.title}
            </h3>
            <p className="text-white/70">{edu.institution}</p>
            <p className="text-white/50 text-sm">{edu.score}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Inline CSS for fade-in effect */}
    <style jsx>{`
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-fadeIn {
        animation: fadeIn 0.8s ease forwards;
      }
    `}</style>
  </div>
);

export default EducationJourney;
