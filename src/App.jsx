import React from "react";
import { Header } from "./components/Header";
import Front from "./components/Front";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education/Education";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";

const sections = [
  <Front key="home" />,
  <AboutMe key="about" />,
  <Projects key="projects" />,
  <Skills key="skills" />,
  <Education key="education" />,
  <Contact key="contact" />,
];

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* TOP NAVBAR */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="pt-24 md:pt-28">
        {sections}
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
