import React from "react";
import StarfieldCanvas from "./StarfieldCanvas";
import assets from "../assets/assets";

const Hero = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden"
      }}
    >
      {/* section start */}
      <section className="relative flex min-h-screen flex-col items-start bg-black px-6 pt-32 text-white sm:px-10 sm:pt-40 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a0a0a] to-black" />

        {/* Subtitle */}
        <div className="flex flex-col items-start  sm:mx-30 w-full px-4 md:px-0 ">
          <h1 className="text-xl z-3 sm:text-2xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-yellow-400  text-center">
            Turning Complex Ideas Into Functional Code
          </h1>
          <p className="relative z-10 mt-5 max-w-5xl text-sm text-gray-300 sm:text-base md:text-lg  ">
            I'm <span className="text-yellow-400">Ramesh Surada</span> a
            full-stack developer passionate about transforming ideas into
            functional, user-friendly applications. Using modern technologies
            like React, Node.js, and MongoDB, I craft seamless digital
            experiences. Backed by a strong foundation in&nbsp;
            <span className="relative inline-block">
              <em className="not-italic font-semibold">
                Data Structures and Algorithms.&nbsp;
              </em>
              <img
                src={assets.longUnderline}
                alt=""
                className="absolute left-0 bottom-0 w-full h-auto pointer-events-none"
              />
            </span>
            I build scalable applications and solve complex problems with
            efficiency and clarity. From backend architecture to frontend
            design, I create solutions that perform and deliver real value.
          </p>
          <div className="relative z-10 mt-5 flex justify-center">
            <a
              href="mailto:rameshsurada5@gmail.com"
              className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm text-white backdrop-blur-md transition hover:bg-white/20"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5A2.25 2.25 0 0119.5 19.5H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5A2.25 2.25 0 002.25 6.75m19.5 0L12 13.5 2.25 6.75"
                />
              </svg>
              Let’s Connect
            </a>
          </div>
        </div>

        {/* Radial background effects */}
        <div
          className="absolute bottom-0 left-1/2 z-0 h-[400px] w-[1200px] -translate-x-1/2 transform overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 30%, black 70%, transparent)"
          }}
        >
          <div className="absolute right-[-432px] bottom-[-753px] left-[-454px] h-[955px] rounded-[100%] bg-gradient-to-b from-black to-transparent dark:from-white" />

          <div
            className="bg-white-1 absolute right-[-510px] bottom-[-759px] left-[-532px] aspect-[2.35/1] h-[956px] rounded-[100%] shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff7d] dark:bg-black"
            style={{
              boxShadow:
                "rgb(255, 255, 255) 0px 2px 28.78px inset, rgba(255, 255, 255, 0.616) 0px -10px 58.78px 1px"
            }}
          />

          <div
            className="absolute bottom-[167px] left-1/2 h-[111px] w-[787px] overflow-hidden bg-[radial-gradient(50%_50%_at_50%_50%,#5506ba_0%,rgba(10,10,10,0)_100%)] blur-[57px]"
            style={{ transform: "translateX(-75.5px)" }}
          />
        </div>
      </section>

      {/* Starfield Canvas */}
      <StarfieldCanvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 20
        }}
      />
    </div>
  );
};

export default Hero;
