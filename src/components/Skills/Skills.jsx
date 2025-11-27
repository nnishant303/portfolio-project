import React from "react";
import { motion } from "framer-motion";
import gptImg from "../../assets/photo/gpt.webp"; // your image

// Import skill icons
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker, FaAws, FaDatabase } from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiFramer, SiShadcnui,
  SiExpress, SiMongodb, SiMysql, SiPostgresql, SiPrisma,
  SiRedux, SiVercel, SiPostman, SiKubernetes
} from "react-icons/si";

// Skills data with icons
const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "ReactJS", icon: <FaReact className="text-cyan-400" /> },
  { name: "NextJS", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
  { name: "Shadcn", icon: <SiShadcnui className="text-white" /> },
  { name: "NodeJS", icon: <FaNodeJs className="text-green-500" /> },
  { name: "ExpressJS", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
  { name: "Prisma", icon: <SiPrisma className="text-teal-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Zustand", icon: <FaDatabase className="text-orange-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
  { name: "AWS", icon: <FaAws className="text-orange-400" /> },
  { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
];

const Skills = () => {
  return (
    <section className="w-full pt-2 pb-6 md:pt-4 md:pb-20 lg:-mt-40 flex flex-col items-center overflow-hidden relative">

      {/* IMAGE */}
      <motion.img
        src={gptImg}
        alt="skills flower"
        className="w-[280px] md:w-[450px] opacity-90 mb-10 md:mb-15"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* BIG BLURRED BACK TEXT */}
      <h1
        className="absolute top-20 md:top-auto text-[100px] md:text-[220px] font-rajdhani
        font-bold text-white/5 tracking-widest pointer-events-none select-none"
      >
        SKILLS
      </h1>

      {/* MAIN TITLE */}
      <h2 className="mt-[-40px] md:mt-[-70px] text-4xl md:text-6xl font-rajdhani font-bold text-white relative z-10">
        skills
      </h2>

      {/* UNDERLINE DOT ANIMATION */}
      <div className="flex items-center gap-3 mt-4">
        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
        <span className="w-16 h-[2px] bg-purple-500 rounded-full"></span>
      </div>

      {/* SUBTEXT */}
      <p className="mt-6 text-gray-400 tracking-wide font-rajdhani text-sm md:text-lg text-center px-4">
        I CONSTANTLY TRY TO IMPROVE
      </p>

      {/* SKILLS GRID */}
      <div className="mt-10 md:mt-14 flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl px-4">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="px-4 py-2 md:px-5 md:py-2 rounded-xl bg-white/5 border border-white/10
              text-white font-rajdhani tracking-wide text-xs md:text-sm flex items-center gap-2
              hover:bg-white/10 transition-colors duration-300"
          >
            <span className="text-base md:text-lg">{skill.icon}</span>
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
