// src/App.jsx
import { Routes, Route } from "react-router-dom";

import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import About from "./components/About";

import Home from "./pages/Home";

export default function App() {
  return (
    <div className=" bg-black text-gray-800">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/experience" element={<Experience />} />
      </Routes>
    </div>
  );
}
