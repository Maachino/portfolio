import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { SkillProvider } from "./contexts/SkillContext";
import { ProjectProvider } from "./contexts/ProjectContext";
import "./index.css";

function App() {
  return (
    <ProjectProvider>
      <SkillProvider>
        <BrowserRouter>
          <Navbar />
          <Home />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </SkillProvider>
    </ProjectProvider>
  );
}

export default App;
