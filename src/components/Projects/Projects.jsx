import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import diteckImg from "../../assets/photo/diteck.webp";
import tastyImg from "../../assets/photo/tasty.webp";
import retrievexImg from "../../assets/photo/retrievex.webp";
import vanishVoteImg from "../../assets/photo/vanishNote.webp";

import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/* TECH ICONS */
const techIcons = {
  "Node.js": <FaNodeJs className="text-green-500" />,
  Next: <SiNextdotjs className="text-white" />,
  React: <FaReact className="text-cyan-400" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  Auth: <FaDatabase className="text-blue-400" />,
  Express: <SiExpress className="text-gray-300" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  Tailwind: <SiTailwindcss className="text-cyan-400" />,
  Prisma: <SiPrisma className="text-teal-400" />,
  PostgreSQL: <SiPostgresql className="text-blue-400" />,
  Supabase: <RiSupabaseFill className="text-green-500" />,
};

/* PROJECT LIST */
const projects = [
  {
    id: "d1",
    title: "Diteck Technology",
    type: "Team project",
    summary:
      "Agency platform with job posting, AI chatbot, and secure application system.",
    highlight:
      "Agency platform with job posting, AI chatbot, and secure application system.",
    description:
      "A full-stack agency platform with AI-powered features and role-based dashboards.",
    bullets: [
      "Role-based dashboards",
      "Secure job application system",
      "AI chatbot for answering queries",
      "Team tools & blog management",
      "AWS S3 image uploads",
    ],
    tech: ["Node.js", "Next", "React", "MongoDB", "Supabase"],
    image: diteckImg,
    shadow: "shadow-[0_0_35px_rgba(59,130,246,0.45)]",
    colorTheme: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/30" },
  },
  {
    id: "t2",
    title: "Tasty Drop",
    type: "Team project",
    summary:
      "Food delivery platform with multiple payment methods and dashboards.",
    highlight:
      "Food delivery platform with multiple payment methods and dashboards.",
    description:
      "A full-stack delivery system with payments, real-time tracking & roles.",
    bullets: [
      "Multiple payment methods",
      "Role-based dashboards",
      "Subscription system",
      "Order tracking",
    ],
    tech: ["Express", "React", "Node.js", "MongoDB", "Next.js"],
    image: tastyImg,
    shadow: "shadow-[0_0_35px_rgba(236,72,153,0.45)]",
    colorTheme: { bg: "bg-pink-500/10", text: "text-pink-400", border: "border-pink-500/30" },
  },
  {
    id: "r3",
    title: "RetrieveX",
    type: "Personal project",
    summary: "Platform for reporting & reclaiming lost items with verification.",
    highlight:
      "Platform for reporting & reclaiming lost items with verification.",
    description:
      "A modern community platform for lost items with admin tools & dark/light mode.",
    bullets: [
      "Lost item searching",
      "Ownership verification",
      "User dashboard",
      "Dark/light mode",
    ],
    tech: ["React", "Next", "Node.js", "MongoDB", "TypeScript"],
    image: retrievexImg,
    shadow: "shadow-[0_0_35px_rgba(139,92,246,0.45)]",
    colorTheme: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/30" },
  },
  {
    id: "v4",
    title: "VanishVote",
    type: "Personal project",
    summary: "Anonymous poll creation system with timed expiration — no login required.",
    highlight:
      "Anonymous poll creation system with timed expiration — no login required.",
    description:
      "Lightweight poll system with timed expiry & clean UI for fast decisions.",
    bullets: ["Anonymous polls", "Timed expiry", "Shareable links"],
    tech: ["React", "MongoDB", "Node.js", "Next.js"],
    image: vanishVoteImg,
    shadow: "shadow-[0_0_35px_rgba(20,184,166,0.45)]",
    colorTheme: { bg: "bg-teal-500/10", text: "text-teal-400", border: "border-teal-500/30" },
  },
];

/* CARD COMPONENT */
const ScrollCard = ({ project }) => (
  <div className="w-full lg:h-[95vh] h-auto py-6 lg:py-0 flex items-center justify-center">
    <div className="bg-[#111827] p-6 rounded-2xl border border-gray-700 shadow-xl max-w-[900px] w-full">
      <h3 className="text-lg mb-4 text-gray-300">{project.summary}</h3>

      <div className="w-full flex justify-center">
        <img
          src={project.image}
          alt=""
          className={`
            w-full max-w-[85%] translate-y-5 -rotate-3 rounded-xl border border-white/20
            transition-all duration-700 will-change-transform
            hover:scale-105 hover:-rotate-2
            ${project.shadow}
          `}
        />
      </div>
    </div>
  </div>
);

/* MAIN */
const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const total = projects.length;
    const steps = Math.max(total - 1, 0);
    const container = containerRef.current;
    const track = trackRef.current;

    if (!container || !track) return;

    ScrollTrigger.killAll();
    gsap.killTweensOf(track);

    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${steps * window.innerHeight}`,
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            let idx = Math.round(self.progress * steps);
            if (idx < 0) idx = 0;
            if (idx > total - 1) idx = total - 1;
            setActiveIndex(idx);
          },
        },
      });

      timeline.to(track, {
        y: -steps * window.innerHeight,
        ease: "none",
      });
    });

    return () => {
      mm.revert();
      ScrollTrigger.killAll();
    };
  }, []);

  const P = projects[activeIndex];

  return (
    <section
      id="projects"
      className="scroll-mt-28 relative w-full py-16 md:py-24 bg-black text-white font-rajdhani overflow-hidden"
    >
      {/* HEADER - Outside pinned area so it scrolls up */}
      <div className="text-center pb-6 md:pb-8 px-4">
        <h2 className="text-5xl md:text-7xl font-bold">Projects</h2>
        <p className="text-gray-400 tracking-[0.2em] mt-4 text-sm">
          FEATURED CASE STUDIES
        </p>
      </div>

      {/* PINNED CONTAINER - Only this part gets pinned on Desktop */}
      <div ref={containerRef} className="relative">
        <div className="flex flex-col lg:flex-row gap-10 px-6 max-w-7xl mx-auto">

          {/* LEFT SCROLL TRACK (Desktop) / VERTICAL STACK (Mobile) */}
          <div className="w-full lg:w-[55%] relative h-auto lg:h-screen lg:overflow-hidden">
            <div
              ref={trackRef}
              className="lg:absolute top-0 left-0 right-0 flex flex-col gap-10 lg:gap-0"
            >
              {projects.map((p) => (
                <div key={p.id} className="lg:h-screen flex flex-col gap-2 lg:block mb-12 lg:mb-0">

                  <ScrollCard project={p} />

                  {/* Mobile Details (Visible only on mobile) */}
                  <div className="lg:hidden block space-y-4 px-2">
                    <h2 className="text-3xl font-bold">{p.title}</h2>
                    <p className="text-gray-400">{p.type}</p>
                    <p className="text-gray-300 leading-relaxed">{p.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t, i) => (
                        <span key={i} className={`text-sm ${p.colorTheme.bg} ${p.colorTheme.text} px-3 py-1.5 rounded-lg border ${p.colorTheme.border} font-medium`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* RIGHT DETAILS (Desktop Only) */}
          <motion.div
            className="hidden lg:flex w-[45%] items-center h-screen"
            initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div key={activeIndex} className="space-y-6 w-full">
              {/* Title - animates first */}
              <div className="animate-slideUp" style={{ animationDelay: '0s' }}>
                <h2 className="text-3xl font-bold">{P.title}</h2>
                <p className="text-gray-400 mt-1">{P.type}</p>
              </div>

              {/* Description - animates second */}
              <p
                className="text-gray-300 leading-relaxed animate-slideUp"
                style={{ animationDelay: '0.1s' }}
              >
                {P.description}
              </p>

              {/* Bullets - animate third with stagger */}
              <ul className="space-y-3 text-gray-300">
                {P.bullets.map((d, i) => (
                  <li
                    key={i}
                    className="flex gap-2 animate-slideUp"
                    style={{ animationDelay: `${0.2 + i * 0.05}s` }}
                  >
                    <span className="text-purple-400 text-xl">+</span>
                    {d}
                  </li>
                ))}
              </ul>

              {/* Tech icons - animate last */}
              <div
                className="flex gap-4 animate-slideUp"
                style={{ animationDelay: `${0.2 + P.bullets.length * 0.05}s` }}
              >
                {P.tech.map((t, i) => (
                  <div key={i} className="text-2xl">
                    {techIcons[t]}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      



      <style>{`
        @keyframes projectFade {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          0% { 
            opacity: 0; 
            transform: translateY(50px) scale(0.95);
            filter: blur(5px);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1);
            filter: blur(0px);
          }
        }
        .animate-projectFade {
          animation: projectFade .7s ease both;
        }
        .animate-slideUp {
          opacity: 0;
          animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform, opacity, filter;
        }
      `}</style>
    </section>
  );
};

export default Projects;
