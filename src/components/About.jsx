import React from "react";
import ImageStack from "./ImageStack"; // Adjust path if needed

export default function About() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20 font-sans min-h-[450px]">
      <div className="max-w-6xl mx-auto flex flex-col">
        {/* Title Section */}
        <div className="mb-8 max-w-xl">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-2">
            More about me
          </h2>
          <h1 className="text-4xl sm:text-5xl font-bold">
            I'm Ramesh, a creative{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400">
              engineer
            </span>
          </h1>
        </div>

        {/* Content and Image Stack side by side */}
        <div className="flex flex-col md:flex-row items-start gap-40">
          {/* Content Text */}
          <div className="flex-1 max-w-xl">
            <p className="text-gray-300 mb-4">
              I'm Ramesh Surada, a proactive full-stack developer passionate
              about creating dynamic web experiences. From frontend to backend,
              I thrive on solving complex problems with clean, efficient code.
              I'm a problem solver who specializes in React and Node.js, and I'm
              always eager to learn more.{" "}
            </p>
            <p className="text-gray-300 mb-4">
              When I'm not immersed in work, I'm exploring new ideas and staying
              curious. Life's about balance, and I love embracing every part of
              it.
            </p>
            <p className="text-gray-300 font-medium">
              I believe in waking up each day eager to make a difference!
            </p>
          </div>

          {/* Image Stack Container with fixed width */}
          <div className="flex-shrink-0 w-[100px] md:w-[220px]">
            <ImageStack />
          </div>
        </div>
      </div>
    </section>
  );
}
