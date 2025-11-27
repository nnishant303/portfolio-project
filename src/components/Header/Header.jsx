import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const tabs = ["Home", "About", "Work", "Skills", "Contact"];

const Header = () => {
  const [active, setActive] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const tabRefs = useRef({});
  const [mounted, setMounted] = useState(false);

  // Makes purple bar visible on first render
  useEffect(() => {
    setTimeout(() => setMounted(true), 50);
  }, []);

  const scrollToSection = (tab) => {
    setActive(tab);
    setMobileMenuOpen(false);
    const map = {
      Home: "home",
      About: "about",
      Work: "projects",
      Skills: "skills",
      Contact: "contact",
    };
    const id = map[tab];
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      {/* DESKTOP NAV */}
      <nav
        className="hidden md:flex items-center gap-2 
        bg-black/40 backdrop-blur-xl border border-zinc-800 
        rounded-full px-4 py-2 relative w-fit justify-center"
      >
        {/* PURPLE GLOW BEHIND TABS */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="absolute top-0 bottom-0 rounded-full 
          bg-purple-600/20 blur-xl pointer-events-none"
          style={{
            left: mounted ? tabRefs.current[active]?.offsetLeft : 0,
            width: mounted ? tabRefs.current[active]?.offsetWidth : 0,
          }}
        />

        {/* PURPLE TOP BAR */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute -top-3 h-2 rounded-full bg-purple-500 shadow-xl"
          style={{
            left: mounted ? tabRefs.current[active]?.offsetLeft + 18 : 0,
            width: mounted ? tabRefs.current[active]?.offsetWidth - 36 : 0,
          }}
        />

        {/* TABS */}
        {tabs.map((tab) => (
          <button
            key={tab}
            ref={(el) => (tabRefs.current[tab] = el)}
            onClick={() => scrollToSection(tab)}
            className={`
              relative z-10 px-6 py-2 rounded-full text-sm 
              font-[var(--font-inter)] transition
              ${active === tab
                ? "text-white"
                : "text-gray-400 hover:text-white hover:bg-white/5"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* MOBILE NAV */}
      <div className="md:hidden w-full flex justify-end">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-black/40 backdrop-blur-xl border border-zinc-800 rounded-full p-3 hover:bg-white/5 transition"
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-16 right-4 w-48 bg-[#0f172a] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col p-2 z-40"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => scrollToSection(tab)}
                className={`
                  px-4 py-3 text-left rounded-xl text-sm font-rajdhani font-medium transition
                  ${active === tab
                    ? "bg-purple-600/20 text-purple-300"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
