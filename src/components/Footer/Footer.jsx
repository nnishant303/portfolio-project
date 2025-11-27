import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiMail } from "react-icons/fi";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: <FiGithub />, href: "https://github.com" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
    { icon: <FiMail />, href: "mailto:paliwalnishant0@gmail.com" },
    { icon: <FaFacebookF />, href: "https://facebook.com" },
  ];

  return (
    <footer className="w-full mt-32 pb-10 flex flex-col items-center justify-center text-center">

      {/* SOCIAL ICONS */}
      <div className="flex items-center gap-8 mb-6">

        {socialLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            className="
              w-12 h-12 md:w-16 md:h-16 
              rounded-full 
              bg-[#1c1c1c] 
              flex items-center justify-center 
              text-white text-lg md:text-2xl 
              shadow-lg shadow-black/40 
              border border-white/5
            "
          >
            {item.icon}
          </motion.a>
        ))}

      </div>

      {/* CENTER DOT + LINE */}
      <div className="flex items-center justify-center gap-2 my-4">
        <div className="w-40 h-[1px] bg-white/10"></div>
        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
        <div className="w-40 h-[1px] bg-white/10"></div>
      </div>

      {/* COPYRIGHT */}
      <p className="text-white/60 text-sm font-rajdhani tracking-wider">
        © 2025 Nishant Paliwal. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
