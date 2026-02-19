import React from "react";
import { motion } from "framer-motion";
import profileImg from "../../assets/photo/memoji-smile.webp";

const AboutMe = () => {
    return (
        <section
            id="about"
            className="scroll-mt-28 w-full py-16 md:py-24 text-white px-6 relative overflow-hidden"
        >
            {/* Top Header */}
            <div className="flex flex-col items-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold font-rajdhani mb-20">About Me</h2>
                <div className="w-16 h-1 bg-purple-600 rounded-full mb-4"></div>
                <span className="text-sm tracking-[0.2em] text-gray-400 font-rajdhani uppercase">
                    More About Me
                </span>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

                {/* Left: Image Section */}
                <div className="relative flex justify-center md:justify-start mb-10 md:mb-0">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-orange-500/20 blur-[60px] md:blur-[80px] rounded-full transform scale-110" />

                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        {/* Main Glow Gradient INSIDE circle */}
                        <div className="
                        w-full h-full rounded-full p-2 border-2 border-white/10
                         bg-gradient-to-br from-[#3B1E77]/40 via-[#8A2BE2]/20 to-[#FF6A3D]/30
                         backdrop-blur-xl
                         shadow-[0_0_80px_rgba(138,43,226,0.3)]
                         ">
                            <img
                                src={profileImg}
                                alt="Profile"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>

                        {/* Floating Badge 1: Developer (Purple) */}
                        <motion.div
                            initial={{ y: 0 }}
                            animate={{ y: [-5, 5, -5] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute top-0 right-0 md:-right-2 bg-purple-600 text-white px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-rajdhani font-bold shadow-lg border border-purple-400/50"
                        >
                            Developer
                        </motion.div>

                        {/* Floating Badge 2: CS Student (Orange) */}
                        <motion.div
                            initial={{ y: 0 }}
                            animate={{ y: [5, -5, 5] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-4 left-0 md:-left-4 bg-orange-500 text-white px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-rajdhani font-bold shadow-lg border border-orange-400/50"
                        >
                            CS Student
                        </motion.div>
                    </div>
                </div>

                {/* Right: Content Section */}
                <motion.div
                    className="flex flex-col items-start text-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                >

                    {/* Name Heading */}
                    <motion.h3
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                        }}
                        className="text-3xl md:text-3xl font-bold font-rajdhani mb-6"
                    >
                        Hey! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">Nishant</span>
                    </motion.h3>

                    {/* Bio Paragraphs */}
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                        }}
                        className="text-gray-100 font-rajdhani text-base md:text-lg leading-relaxed mb-6 font-medium"
                    >
                        I'm Nishant Paliwal, a Web developer and Computer Science student with 3+
                        years of experience. I specialize in building clean, responsive, and dynamic
                        websites using HTML, CSS, JavaScript, React, NextJs, PostgreSQL, Prisma and
                        MongoDB.
                    </motion.p>
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                        }}
                        className="text-gray-100 font-rajdhani text-base md:text-lg leading-relaxed mb-10 font-medium"
                    >
                        I'm always leveling up my skills and currently diving deeper into backend and
                        DevOps. Whether it's full-time or freelance, I'm open to exciting opportunities
                        where I can grow and build dope stuff with amazing people.
                    </motion.p>

                    {/* What I Do */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                        className="mb-10 w-full"
                    >
                        <h4 className="text-xl font-bold font-rajdhani mb-5 text-white">What I Do</h4>
                        <div className="flex flex-wrap gap-3 md:gap-4">

                            {/* Frontend Tag */}
                            <div className="flex items-center gap-3 px-4 py-2 md:px-5 md:py-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl hover:border-purple-500/50 transition duration-300">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                    <line x1="8" y1="21" x2="16" y2="21"></line>
                                    <line x1="12" y1="17" x2="12" y2="21"></line>
                                </svg>
                                <span className="text-gray-300 font-rajdhani font-medium text-sm md:text-base">Frontend Development</span>
                            </div>

                            {/* Backend Tag */}
                            <div className="flex items-center gap-3 px-4 py-2 md:px-5 md:py-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl hover:border-orange-500/50 transition duration-300">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="16 18 22 12 16 6"></polyline>
                                    <polyline points="8 6 2 12 8 18"></polyline>
                                </svg>
                                <span className="text-gray-300 font-rajdhani font-medium text-sm md:text-base">Backend Development</span>
                            </div>

                            {/* CS Tag */}
                            <div className="flex items-center gap-3 px-4 py-2 md:px-5 md:py-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl hover:border-green-500/50 transition duration-300">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                </svg>
                                <span className="text-gray-300 font-rajdhani font-medium text-sm md:text-base">Computer Science</span>
                            </div>

                        </div>
                    </motion.div>

                    {/* Connect With Me */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                        className="mb-10 w-full"
                    >
                        <h4 className="text-xl font-bold font-rajdhani mb-5 text-white">Connect With Me</h4>
                        <div className="flex gap-4">
                            {[
                                { icon: <GithubIcon />, href: "#", style: "hover:text-white" },
                                { icon: <LinkedinIcon />, href: "#", style: "hover:text-blue-400 hover:bg-blue-900 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]" },
                                { icon: <FacebookIcon />, href: "#", style: "hover:text-blue-400 hover:bg-blue-900 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]" },
                                { icon: <MailIcon />, href: "#", style: "hover:text-red-400 hover:bg-red-900 hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]" },
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    whileHover={{ y: -5 }}
                                    className={`w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 ${social.style}`}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Resume Button */}
                    <motion.button
                        variants={{
                            hidden: { opacity: 0, scale: 0.9 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white font-rajdhani font-bold tracking-wide shadow-lg hover:opacity-90 transition duration-300"
                    >
                        Download Resume
                    </motion.button>

                </motion.div>
            </div>
        </section>
    );
};

// Simple Icons Components
const GithubIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const LinkedinIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const FacebookIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const MailIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

export default AboutMe;
