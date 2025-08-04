import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechStack from "../components/Techstack";
import Projects from "../components/Projects";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="tech">
        <TechStack />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
