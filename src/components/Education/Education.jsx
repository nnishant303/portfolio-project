import React from "react";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2021 - 2025",
    title: "Bachelor in Computer Science and Engineering",
    institute: "Geetanjali Institute of Technical Studies",
    result: null,
  },
  {
    year: "2020-2021",
    title: "Grade 12 - Senior Secondary School Certificate (SSC)",
    institute: "SJPS School, Nathdwara",
    result: "94%",
  },
  {
    year: "2018-2019",
    title: "Grade 10 - Senior Secondary School Certificate (SSC)",
    institute: "SJPS School, Nathdwara",
    result: "87%",
  },
];

const inViewOnce = { once: true, amount: 0.25 };

const Education = () => {
  return (
    <section
      id="education"
      className="scroll-mt-28 relative w-full py-16 md:py-24 text-white font-rajdhani overflow-hidden"
    >
      {/* ------- BACKGROUND BIG TEXT ------- */}
      <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-[100px] md:text-[240px] font-bold text-white/5 tracking-wide select-none">
        EDUCATION
      </h1>

      {/* ------- HEADING ------- */}
      <div className="text-center relative z-10 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOnce}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Education
        </motion.h2>

        {/* Purple line + dot */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="h-[2px] w-8 md:w-12 bg-purple-600"></div>
          <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
          <div className="h-[2px] w-8 md:w-12 bg-purple-600"></div>
        </div>

        <p className="mt-6 text-gray-400 tracking-wide text-xs md:text-base">
          ACADEMIC JOURNEY
        </p>
      </div>

      {/* ------- TIMELINE ------- */}
      <div className="relative mt-16 md:mt-20 max-w-4xl mx-auto px-4">
        {/* Center vertical purple line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-purple-600/40 -translate-x-1/2"></div>

        {timeline.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={inViewOnce}
            className="relative flex flex-col items-center text-center mb-20 md:mb-28"
          >
            {/* Dot */}
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-purple-500 bg-black z-10"></div>

            {/* Year Label */}
            <div className="bg-purple-800/40 backdrop-blur-md mt-3 px-3 py-1 md:px-4 md:py-1 rounded-full text-xs md:text-sm text-purple-300 border border-purple-700/40">
              {item.year}
            </div>

            {/* Title */}
            <h3 className="mt-4 md:mt-6 text-lg md:text-2xl font-bold tracking-wide px-2">
              {item.title}
            </h3>

            {/* Institute */}
            <p className="mt-2 text-gray-400 text-xs md:text-base px-4">{item.institute}</p>

            {/* Divider Line */}
            <div className="w-24 md:w-40 h-[2px] bg-purple-600/30 mt-3"></div>

            {/* Result */}
            {item.result && (
              <div className="mt-3 bg-purple-900/40 border border-purple-700/40 px-3 py-1 md:px-4 md:py-1 rounded-full text-purple-300 text-xs md:text-sm">
                {item.result}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
