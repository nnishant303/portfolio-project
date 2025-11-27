import React from "react";
import { Header } from "./components/Header";
import Front from "./components/Front";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education/Education";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* TOP NAVBAR */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="pt-28 flex flex-col gap-40">

        {/* HERO SECTION */}
        <section id="home">
          <Front />
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about">
          <AboutMe />
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects">
          <Projects />
        </section>

        {/* SKILLS SECTION */}
        <section id="skills">
          <Skills />
        </section>

        {/* EDUCATION SECTION */}
        <section id="education">
          <Education />
        </section>

        {/* CONTACT SECTION */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default App;
