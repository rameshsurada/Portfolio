import StarfieldCanvas from "./StarfieldCanvas";

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
      <section className="relative flex min-h-screen flex-col items-center   sm:px-30 bg-black text-white overflow-hidden px-4 text-center pt-32 sm:pt-40">
        {/* Background gradient layer */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a0a0a] to-black" />

        {/* Notification pill */}
        <div className="relative z-10 mb-4 flex flex-wrap items-center justify-center gap-2 rounded-full bg-[#1E1E1E] px-4 py-1 text-sm font-medium text-white/80 ring-1 ring-white/10">
          <span className="bg-blue-600 text-white rounded-full px-2 py-0.5 text-xs">
            Full Stack Developer
          </span>
          <span>Open to opportunities</span>
          <span className="text-white/40">→</span>
        </div>

        {/* Heading */}
        <h1 className="relative z-10 text-xl sm:text-2xl md:text-4xl font-semibold leading-snug sm:leading-normal md:leading-tight max-w-4xl text-white">
          I build scalable web applications
          <br />
          using <span className="italic text-white/90">MERN Stack</span>
        </h1>

        {/* Subtitle */}
        <p className="relative z-10 mt-5 text-sm sm:text-base md:text-lg text-white/70 max-w-xl">
          Hello, I'm <strong className="text-white">Ramesh Surada</strong> — a
          passionate full-stack developer skilled in React, Node.js, and
          MongoDB.
        </p>

        {/* CTA and Email */}
        <div className="relative z-10 mt-5 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <button className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm text-white backdrop-blur-md hover:bg-white/20 transition">
            Let’s Connect
            <span className="text-md">→</span>
          </button>

          <a
            href="mailto:rameshsurada5@gmail.com"
            className="flex items-center gap-2 text-white/70 hover:text-white transition"
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
            rameshsurada5@gmail.com
          </a>
        </div>

        {/* Original radial glowing background effects */}
        <div
          className="absolute bottom-0 left-1/2 z-0 h-[400px] w-[1200px] -translate-x-1/2 transform overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 30%, black 70%, transparent)"
          }}
        >
          <div className="absolute right-[-432px] bottom-[-753px] left-[-454px] h-[955px] rounded-[100%] bg-gradient-to-b from-black to-transparent dark:from-white"></div>

          <div
            className="bg-white-1 absolute right-[-510px] bottom-[-759px] left-[-532px] aspect-[2.346820809248555/1] h-[956px] rounded-[100%] shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff7d] dark:bg-black"
            style={{
              boxShadow:
                "rgb(255, 255, 255) 0px 2px 28.78px inset, rgba(255, 255, 255, 0.616) 0px -10px 58.78px 1px"
            }}
          ></div>

          <div
            className="absolute bottom-[167px] left-1/2 h-[111px] w-[787px] overflow-hidden bg-[radial-gradient(50%_50%_at_50%_50%,#5506ba_0%,rgba(10,10,10,0)_100%)] blur-[57px]"
            style={{ transform: "translateX(-75.5px)" }}
          ></div>
        </div>
      </section>

      {/* Starfield Canvas Overlay */}
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
