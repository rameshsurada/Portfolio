import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechStack from "../components/Techstack";

const Home = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <Hero />
      <TechStack />
    </div>
  );
};

export default Home;
