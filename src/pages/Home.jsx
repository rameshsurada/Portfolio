import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechStack from "../components/Techstack";
import Projects from "../components/Projects";
import About from "../components/About";

const Home = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <About />
    </div>
  );
};

export default Home;
