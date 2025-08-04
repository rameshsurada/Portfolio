import React from "react";
import { FaStar } from "react-icons/fa";
import assets from "../assets/assets";
import { LuArrowRight } from "react-icons/lu";
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";
import { TbBrandVercelFilled } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiClerk } from "react-icons/si";

const Projects = () => {
  return (
    <div className="pt-1">
      <h2 className="relative z-[2] mt-40 text-4xl font-medium tracking-tight text-center text-balance break-words sm:text-5xl md:mb-5 md:text-6xl">
        <p className="mb-3 text-xs text-gray-300 font-normal tracking-widest text-blue-50 uppercase md:text-sm">
          FEATURED CASE STUDIES
        </p>

        <span>
          <span className="text-blue-50 outfit-font">Curated </span>
          <span className="text-transparent edu-cursive bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 animate-gradient-x font-nyght tracking-wide">
            work
          </span>
        </span>
      </h2>

      {/* Remove bg */}
      <section className="w-full px-4 sm:px-6 py-12 bg-black text-white flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Project Visualization */}
        <a
          href="https://remove-bg-w6cn.vercel.app/"
          className="flex items-center justify-center min-h-[300px] sm:min-h-[450px] w-full sm:w-[700px] bg-black rounded-3xl p-[10px]"
          style={{ boxShadow: "0 0 4px rgba(90, 89, 89, 0.81)" }}
        >
          <div
            className="absolute top-0 left-0 w-full h-0.5 z-30"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0) 5%, rgba(255,255,255,0.8) 35%, rgb(255,255,255) 50%, rgba(255,255,255,0.8) 65%, rgba(0,0,0,0) 95%)"
            }}
          />
          <div className="relative w-full h-full overflow-hidden rounded-2xl bg-blue-600">
            <div className="group relative flex flex-col items-center justify-between overflow-hidden rounded-xl lg:rounded-2xl dark:bg-gradient-to-b from-black/40 to-transparent transition-all duration-300">
              <div
                className="absolute inset-0 -z-10"
                style={{
                  background:
                    "linear-gradient(188.62deg, rgb(6, 95, 14) 49.9%, rgb(22, 161, 74) 81.7%, rgb(110, 222, 137) 93.88%, rgb(188, 249, 198) 113.5%)"
                }}
              />

              <div
                className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)"
                }}
              />

              <div className="hidden w-full flex-row items-center justify-between px-12 py-8 lg:flex text-blue-200">
                <h3 className="max-w-[90%] text-2xl">
                  RemoveBG: AI-powered Instant Background Removal Web App
                </h3>
                <LuArrowRight className="size-6" />
              </div>

              <img
                src={assets.removebg}
                alt="RemoveBG Project Screenshot"
                loading="lazy"
                width={700}
                height={450}
                decoding="async"
                className="lg:group-hover:translate-y-10 w-full max-w-full sm:max-w-[85%] translate-y-5 -rotate-3 rounded-t-lg border-[1.5px] border-white/20 transition-all duration-300 will-change-transform lg:block lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3 shadow-[0_0_30px_#1D4ED8]"
                style={{ color: "transparent" }}
              />
            </div>
          </div>{" "}
        </a>

        {/* Right Side - Project Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl font-semibold outfit-font text-blue-300">
            RemoveBG
          </h2>

          <p className="text-gray-300">
            RemoveBG is a full-stack AI SaaS web app that allows users to remove
            image backgrounds instantly using AI. Built with the MERN stack and
            powered by the ClipDrop API, it offers seamless Google login and
            phone OTP authentication via Clerk.
          </p>

          <ul className="space-y-3 text-sm text-white">
            {[
              "AI-powered background removal via ClipDrop API",
              "Secure authentication using Clerk (Google login + Phone OTP)",
              "Upload and preview images before and after removal",
              "Fast and mobile-responsive design using Tailwind CSS",
              "User authentication with email or phone number",
              "Pricing plans and usage management",
              "Data securely stored in MongoDB"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#93C5FD" // Tailwind blue-400 hex color
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 mt-4 justify-start">
            <span className="stack-btn">
              <FaReact className="text-cyan-400" /> React
            </span>

            <span className="stack-btn">
              <FaJs className="text-yellow-300" /> JavaScript
            </span>

            <span className="stack-btn">
              <SiTailwindcss className="text-sky-400" /> Tailwind CSS
            </span>

            <span className="stack-btn">
              <FaCss3Alt className="text-blue-500" /> CSS
            </span>

            <span className="stack-btn">
              <TbBrandVercelFilled className="text-white" /> Vercel
            </span>

            {/* Added backend and auth tech stack */}
            <span className="stack-btn">
              <FaNodeJs className="text-green-600" /> Node.js
            </span>

            <span className="stack-btn">
              <SiExpress className="text-gray-400" /> Express.js
            </span>

            <span className="stack-btn">
              <SiMongodb className="text-green-700" /> MongoDB
            </span>

            <span className="stack-btn">
              <SiClerk className="text-purple-500" /> Clerk Auth
            </span>
          </div>
        </div>
      </section>

      {/* AppointRx Section */}
      <section className="w-full px-4 sm:px-6 py-12 bg-black text-white flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Project Visualization */}
        <a
          href="https://appoint-rx.vercel.app/"
          className="flex items-center justify-center min-h-[300px] sm:min-h-[450px] w-full sm:w-[700px] bg-black rounded-3xl p-[10px]"
          style={{ boxShadow: "0 0 4px rgba(90, 89, 89, 0.81)" }}
        >
          <div
            className="absolute top-0 left-0 w-full h-0.5 z-30"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0) 5%, rgba(255,255,255,0.8) 35%, rgb(255,255,255) 50%, rgba(255,255,255,0.8) 65%, rgba(0,0,0,0) 95%)"
            }}
          />

          <div className="relative w-full h-full overflow-hidden rounded-2xl bg-blue-900">
            <div className="group relative flex flex-col items-center justify-between overflow-hidden rounded-xl lg:rounded-2xl dark:bg-gradient-to-b from-black/40 to-transparent transition-all duration-300">
              <div
                className="absolute inset-0 -z-10"
                style={{
                  background:
                    "linear-gradient(188.62deg, rgb(6, 95, 14) 49.9%, rgb(22, 161, 74) 81.7%, rgb(110, 222, 137) 93.88%, rgb(188, 249, 198) 113.5%)"
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
                  AppointRx: A Modern Healthcare Appointment Platform
                </h3>
                <LuArrowRight className="size-6" />
              </div>

              <img
                src={assets.appoint}
                alt="AppointRx Project Screenshot"
                loading="lazy"
                width={700}
                height={450}
                decoding="async"
                className="lg:group-hover:translate-y-10 w-full max-w-full sm:max-w-[85%] translate-y-5 -rotate-3 rounded-t-lg border-[1.5px] border-white/20 transition-all duration-300 will-change-transform lg:block lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3 shadow-[0_0_30px_#090cb5]"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </a>

        {/* Right Side - Project Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-blue-400">AppointRx</h2>

          <p className="text-gray-300">
            AppointRx is a modern healthcare appointment platform built to
            streamline the process of booking doctor consultations, managing
            medical profiles, and enhancing accessibility to healthcare
            professionals across India.
          </p>

          <ul className="space-y-3 text-sm text-white">
            {[
              "Browse verified doctor profiles with specialization, experience, and fees.",
              "Book appointments quickly and easily.",
              "View detailed doctor information (bio, address, experience).",
              "Filter doctors by specialization.",
              "Designed with a clean, user-friendly interface.",
              "Indian context and location integration."
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#8ab1ed"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 mt-4 justify-start">
            <span className="stack-btn">
              <FaReact className="text-cyan-400" /> React
            </span>

            <span className="stack-btn">
              <FaJs className="text-yellow-300" /> JavaScript
            </span>

            <span className="stack-btn">
              <SiTailwindcss className="text-sky-400" /> Tailwind CSS
            </span>

            <span className="stack-btn">
              <FaCss3Alt className="text-blue-500" /> CSS
            </span>

            <span className="stack-btn">
              <TbBrandVercelFilled className="text-white" /> Vercel
            </span>

            {/* Backend */}
            <span className="stack-btn">
              <FaNodeJs className="text-green-600" /> Node.js
            </span>

            <span className="stack-btn">
              <SiExpress className="text-gray-400" /> Express.js
            </span>

            <span className="stack-btn">
              <SiMongodb className="text-green-700" /> MongoDB
            </span>
          </div>
        </div>
      </section>
      {/* sci - calculator */}
      <section className="w-full px-4 sm:px-6 py-12 bg-black text-white flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Project Visualization */}
        <a
          href="https://calculator-lite-neon.vercel.app/"
          className="flex items-center justify-center min-h-[300px] sm:min-h-[450px] w-full sm:w-[700px] bg-black rounded-3xl p-[10px]"
          style={{ boxShadow: "0 0 4px rgba(90, 89, 89, 0.81)" }}
        >
          <div
            className="absolute top-0 left-0 w-full h-[0.5px] z-30"
            style={{
              background:
                "linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)"
            }}
          />

          <div className="relative w-full h-full overflow-hidden rounded-2xl bg-rose-900">
            {/* Main screen content and gradient overlay */}
            <div className="group relative flex flex-col items-center justify-between overflow-hidden rounded-xl lg:rounded-2xl dark:bg-gradient-to-b from-black/40 to-transparent transition-all duration-300">
              <div
                className="absolute inset-0 -z-10"
                style={{
                  background:
                    "linear-gradient(188.62deg, rgb(6, 95, 14) 49.9%, rgb(22, 161, 74) 81.7%, rgb(110, 222, 137) 93.88%, rgb(188, 249, 198) 113.5%)"
                }}
              />

              <div
                className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)"
                }}
              />

              <div className="hidden w-full flex-row items-center justify-between px-12 py-8 lg:flex text-rose-300">
                <h3 className="max-w-[90%] text-2xl">
                  Calculator Lite: A modern scientific calculator built with
                  React
                </h3>

                <LuArrowRight className="size-6" />
              </div>

              <img
                src={assets.project1}
                alt="calculator"
                loading="lazy"
                width={1203}
                height={702}
                decoding="async"
                className="lg:group-hover:translate-y-10 w-full max-w-[85%] translate-y-5 -rotate-3 rounded-t-lg border-[1.5px] border-white/20 transition-all duration-300 will-change-transform lg:block lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3 shadow-[0_0_30px_#f198e4]"
                srcSet={assets.calc}
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </a>

        {/* Right Side - Project Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-rose-300">
            Scientific - Calculator
          </h2>

          <p className="text-gray-300">
            A modern scientific calculator built with React, featuring a sleek
            dark theme and responsive design. It supports both basic and
            advanced scientific operations, and demonstrates clean UI/UX
            practices, real-time expression evaluation, and interactive logic
            using functional components.
          </p>

          <ul className="space-y-3 text-sm text-white">
            {[
              "Built with React and Vite for fast, modular development.",
              "Styled with Tailwind CSS for a responsive and clean dark UI.",
              "Implemented advanced scientific functions: sin, cos, tan, log, ln, factorial, powers, roots, etc.",
              "Real-time expression parsing and evaluation with custom error handling.",
              "Keyboard input support and clear visual feedback for user interactions."
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fb7185"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 mt-4 justify-start">
            <span className="stack-btn">
              <FaReact className="text-cyan-400" /> React
            </span>

            <span className="stack-btn">
              <SiVite className="text-purple-400" /> Vite
            </span>

            <span className="stack-btn">
              <SiTailwindcss className="text-sky-400" /> Tailwind CSS
            </span>

            <span className="stack-btn">
              <FaJs className="text-yellow-300" /> JavaScript
            </span>

            <span className="stack-btn">
              <FaHtml5 className="text-orange-500" /> HTML
            </span>

            <span className="stack-btn">
              <FaCss3Alt className="text-blue-500" /> CSS
            </span>

            <span className="stack-btn">
              <TbBrandVercelFilled className="text-white" /> Vercel
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
