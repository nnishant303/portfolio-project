import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Front = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Animation variants for container with stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  // Animation variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Title word variants with stagger
  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const titleWordVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  // Letter animation variants
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 12
      }
    }
  };

  return (
    <motion.section
      className="min-h-[90vh] -mt-10 flex flex-col items-center justify-center text-center px-4 relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >

      {/* NEW / CHATBOT BADGE */}
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-2 
        bg-black/40 backdrop-blur-xl border border-zinc-800 
        px-4 py-2 rounded-full text-sm"
      >
        <span className="px-2 py-1 rounded-full bg-purple-600/80 text-white text-xs font-semibold font-[var(--font-inter)]">
          new
        </span>

        <span className="text-gray-300 font-rajdhani text-sm tracking-wide">
          Chatbot Available
        </span>
      </motion.div>

      {/* BIG TITLE with letter-by-letter animation */}
      <motion.h1
        variants={titleContainerVariants}
        className="mt-10 text-6xl md:text-[88px] leading-none font-rajdhani font-bold tracking-[1.5px] flex flex-wrap items-center justify-center gap-3"
      >
        <motion.span variants={titleWordVariants} className="flex">
          {"Coder".split("").map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              whileHover={{
                scale: 1.2,
                rotate: 5
              }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="inline-block cursor-pointer"
              style={{ display: 'inline-block' }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>

        <motion.span
          variants={titleWordVariants}
          className="flex"
        >
          {"X".split("").map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              whileHover={{
                scale: 1.2,
                rotate: 5
              }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="inline-block cursor-pointer font-rajdhani bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-600"
              style={{ display: 'inline-block' }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>

        <motion.span variants={titleWordVariants} className="flex">
          {"Dreamer".split("").map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              whileHover={{
                scale: 1.2,
                rotate: 5
              }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="inline-block cursor-pointer"
              style={{ display: 'inline-block' }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      </motion.h1>

      {/* SUB TEXT */}
      <motion.p
        variants={itemVariants}
        className="mt-8 text-gray-300 text-2xl max-w-xl font-rajdhani tracking-wider font-medium"
      >
        Hello, I'm Nishant Paliwal — a Software Developer
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        variants={itemVariants}
        className="mt-8 flex flex-col sm:flex-row items-center gap-6"
      >
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="flex items-center gap-3 bg-white/10 border border-white/10 text-white rounded-full 
          px-8 py-3 font-rajdhani font-bold tracking-wide hover:bg-white/20 transition"
        >
          Let&apos;s Connect

          {/* Arrow Circle */}
          <motion.span
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black"
            whileHover={{ rotate: 45 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </motion.span>
        </motion.button>

        <motion.div
          className="flex items-center gap-2 text-gray-400 font-rajdhani tracking-wide"
          whileHover={{ scale: 1.05, color: "#9ca3af" }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.5">
            <path d="M4 4h16v16H4z" />
            <path d="M4 4l8 8 8-8" />
          </svg>
          <span>paliwalnishant0@gmail.com</span>
        </motion.div>
      </motion.div>

      {/* CHAT BUTTON */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          delay: 0.8,
          type: "spring",
          stiffness: 200,
          damping: 15
        }}
        whileHover={{
          scale: 1.2,
          boxShadow: "0 0 30px rgba(168, 85, 247, 0.8)",
          transition: { duration: 0, ease: "easeOut" }
        }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed right-6 bottom-6 w-14 h-14 rounded-full 
       bg-gradient-to-r from-purple-600 to-blue-600 to-blue-800 
        flex items-center justify-center shadow-xl cursor-pointer z-50"
      >
        {isChatOpen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </motion.div>

      {/* CHAT MODAL */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 md:right-6 w-[calc(100vw-2rem)] md:w-[380px] max-w-[380px] bg-[#0f172a] rounded-2xl shadow-2xl border border-white/10 overflow-hidden z-50"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-700 to-blue-900 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <span className="text-white font-bold font-rajdhani">&lt;/&gt;</span>
                </div>
                <div className="text-left">
                  <h3 className="text-white font-bold text-sm font-rajdhani">Nishant Paliwal</h3>
                  <p className="text-blue-200 text-xs font-rajdhani">Frontend Developer</p>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white/70 hover:text-white transition"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="p-6 h-[320px] overflow-y-auto flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center animate-pulse">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>

              <div className="bg-slate-800/50 border border-white/5 rounded-2xl p-4 text-left w-full">
                <p className="text-gray-300 text-sm leading-relaxed font-rajdhani">
                  👋 Good afternoon! I'm Nishant Paliwal, a Frontend Developer. How can I help you today?
                </p>
                <p className="text-gray-400 text-xs mt-3 pt-3 border-t border-white/5 font-rajdhani">
                  Ask me about my projects, skills, or anything tech-related!
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-900 border-t border-white/5">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask me anything..."
                  className="w-full bg-slate-800 text-white text-sm rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:ring-1 focus:ring-purple-500/50 border border-white/5 placeholder:text-gray-500 font-rajdhani"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-purple-600 rounded-lg hover:bg-purple-500 transition">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
              <div className="text-right mt-2">
                <span className="text-[10px] text-gray-600 font-rajdhani">0/500</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.section>
  );
};

export default Front;
