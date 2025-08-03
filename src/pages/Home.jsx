import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechStack from "../components/Techstack";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
    </div>
  );
};

export default Home;
