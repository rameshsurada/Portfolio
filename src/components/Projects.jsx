import React from "react";
import { FaStar } from "react-icons/fa";
import assets from "../assets/assets";
import { LuArrowRight } from "react-icons/lu";

const StarForgeProject = () => {
  return (
    <section className="w-full px-6 py-12 bg-black text-white flex flex-col md:flex-row items-center gap-12">
      {/* Left Side - Project Visualization */}

      <div className="flex items-center justify-center min-h-screen bg-black">
        <div
          className="relative w-[700px] h-[450px] bg-black rounded-3xl p-[10px]"
          style={{
            boxShadow: "0 0 4px rgba(90, 89, 89, 0.81)" // green glow (updated)
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-0.2 z-30"
            style={{
              background:
                "linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)"
            }}
          />

          <div className="relative w-full h-full overflow-hidden rounded-2xl bg-blue-900">
            {/* Main screen content and gradient overlay */}
            <div className="group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl lg:rounded-2xl dark:bg-gradient-to-b from-black/40 to-transparent transition-all duration-300">
              <div
                className="absolute inset-0 -z-10"
                style={{
                  background:
                    "linear-gradient(188.62deg, rgb(6, 95, 14) 49.9%, rgb(22, 161, 74) 81.7%, rgb(110, 222, 137) 93.88%, rgb(188, 249, 198) 113.5%)"
                  /* Dark green → medium green → light green → pale green */
                }}
              />

              <div
                className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)"
                }}
              />

              <div className="hidden w-full flex-row items-center justify-between px-12 py-8 lg:flex text-blue-300">
                <h3 className="max-w-[90%] text-2xl">
                  Design Unleashed: A Captivating Portfolio Showcasing
                  Innovative Web Development and UI/UX
                </h3>
                <LuArrowRight className="size-6" />
              </div>

              <img
                src={assets.project1}
                alt="Personal Portfolio"
                loading="lazy"
                width={1203}
                height={702}
                decoding="async"
                className="lg:group-hover:translate-y-10 w-full max-w-[85%] translate-y-5 -rotate-3 rounded-t-lg border-[1.5px] border-white/20 transition-all duration-300 will-change-transform lg:block lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3 shadow-[0_0_30px_#090cb5]"
                srcSet={assets.project1}
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Project Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold text-pink-400">StarForge</h2>
        <p className="text-gray-300">
          An AI SaaS landing page showcasing modern UI/UX excellence. With sleek
          design and smooth animations, it delivers an engaging user experience
          and serves as an inspiring reference for developers and designers.
        </p>

        <ul className="space-y-3 text-sm text-white">
          {[
            "Built with React and Vite for fast and scalable development.",
            "Designed responsive layouts using Tailwind CSS.",
            "Smooth animations using react-just-parallax.",
            "Dynamic JavaScript interactions for seamless functionality."
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#8ab1ed" // or any color you want
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-4">
          <span className="bg-white text-black px-3 py-1 rounded text-sm">
            Next.js
          </span>
          <span className="bg-blue-500 px-3 py-1 rounded text-sm">React</span>
          <span className="bg-gray-700 px-3 py-1 rounded text-sm">
            TypeScript
          </span>
          <span className="bg-cyan-600 px-3 py-1 rounded text-sm">
            Tailwind CSS
          </span>
          <span className="bg-indigo-700 px-3 py-1 rounded text-sm">
            react-just-parallax
          </span>
          <span className="bg-black border border-white px-3 py-1 rounded text-sm">
            Vercel
          </span>
        </div>
      </div>
    </section>
  );
};

export default StarForgeProject;
