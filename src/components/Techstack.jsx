import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiGit,
  SiVercel,
  SiPostman,
  SiClerk
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import { TbApi } from "react-icons/tb";

const techStack = [
  { name: "HTML5", icon: <SiHtml5 />, color: "#e34f26" },
  { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
  { name: "Java", icon: <FaJava />, color: "#e60000" },
  { name: "React.js", icon: <SiReact />, color: "#61DAFB" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
  { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
  { name: "SQL", icon: <SiMysql />, color: "#00758F" }
];

const tools = [
  { name: "Git", icon: <SiGit />, color: "#F05032" },
  { name: "Vercel", icon: <SiVercel />, color: "#ffffff" },
  { name: "VS Code", icon: <BiLogoVisualStudio />, color: "#007ACC" },
  { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
  { name: "Clerk", icon: <SiClerk />, color: "#3B49DF" },
  { name: "REST API", icon: <TbApi />, color: "#6EE7B7" }
];

export default function TechStack() {
  return (
    <section className="bg-black text-white py-12 px-6 max-w-7xl mx-auto  shadow-xl">
      <h2 className="text-4xl font-semibold text-center text-blue-200 mb-12">
        Tech Stack & Tools
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
        {/* Left: Tech Stack */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-4 text-white">Tech Stack</h3>
          <div className="grid  grid-cols-3 sm:grid-cols-6 gap-2">
            {techStack.map(({ name, icon, color }) => (
              <div
                key={name}
                className="flex flex-col items-center justify-center border border-gray-700 rounded-md p-3 h-20 w-20 bg-gray-800
            hover:border-purple-500 hover:shadow-[0_0_10px_rgba(128,0,128,0.7)] transition-all"
              >
                <div className="text-3xl" style={{ color }}>
                  {icon}
                </div>
                <p className="mt-1 text-xs text-center text-gray-300">{name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Tools & Platforms */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Tools & Platforms
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {tools.map(({ name, icon, color }) => (
              <div
                key={name}
                className="flex flex-col items-center justify-center border border-gray-700 rounded-md p-3 h-20 w-20 bg-gray-800
            hover:border-purple-500 hover:shadow-[0_0_10px_rgba(128,0,128,0.7)] transition-all"
              >
                <div className="text-3xl mb-1" style={{ color }}>
                  {icon}
                </div>
                <p className="text-xs text-center text-gray-300">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
