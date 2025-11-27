import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="py-10 md:py-20 w-full text-white relative overflow-hidden" id="contact">

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 md:w-96 md:h-96 bg-purple-900/20 rounded-full blur-[80px] md:blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-64 h-64 md:w-80 md:h-80 bg-blue-900/20 rounded-full blur-[80px] md:blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* TITLE */}
        <div className="text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-rajdhani font-bold tracking-wide mb-4 md:mb-6"
          >
            Contact
          </motion.h2>

          {/* PURPLE DIVIDER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-3"
          >
            <span className="w-12 md:w-16 h-[1px] bg-gradient-to-r from-transparent to-purple-500" />
            <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
            <span className="w-12 md:w-16 h-[1px] bg-gradient-to-l from-transparent to-purple-500" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-4 md:mt-6 text-gray-400 tracking-[0.2em] font-rajdhani text-xs md:text-sm uppercase"
          >
            Get in touch
          </motion.p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start">

          {/* LEFT SIDE - INFO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8 md:space-y-10 text-center lg:text-left"
          >
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-2xl md:text-3xl font-rajdhani font-bold leading-tight tracking-wide">
                Let’s work together
              </h3>

              <p className="text-gray-400 text-base md:text-lg font-rajdhani leading-relaxed max-w-md mx-auto lg:mx-0">
                I'm available for full-time roles & freelance projects.
                <br /> My inbox is always open — whether you have a question or just want to say hi.
                <br /> I’ll try my best to get back to you!
              </p>
            </div>

            {/* Email Button */}
            <a
              href="mailto:paliwalnishant0@gmail.com"
              className="inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-full bg-white/5 border border-white/10 hover:bg-purple-600/20 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500 group-hover:scale-110 transition-all duration-300">
                <FiMail className="text-purple-300 group-hover:text-white text-sm md:text-base" />
              </div>
              <span className="text-base md:text-xl font-rajdhani text-gray-200 group-hover:text-white transition-colors">
                paliwalnishant0@gmail.com
              </span>
            </a>
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Form Card */}
            <div className="relative z-10 bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">
              <form className="space-y-4 md:space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-xs md:text-sm font-rajdhani text-white uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:border-purple-500/50 focus:bg-purple-900/10 transition-all duration-300 placeholder:text-gray-600 text-sm md:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs md:text-sm font-rajdhani text-white uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:border-purple-500/50 focus:bg-purple-900/10 transition-all duration-300 placeholder:text-gray-600 text-sm md:text-base"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-rajdhani text-white uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    placeholder="Project Inquiry"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:border-purple-500/50 focus:bg-purple-900/10 transition-all duration-300 placeholder:text-gray-600 text-sm md:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-rajdhani text-white uppercase tracking-wider">Message</label>
                  <textarea
                    rows="5"
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:border-purple-500/50 focus:bg-purple-900/10 transition-all duration-300 placeholder:text-gray-600 resize-none text-sm md:text-base"
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="w-full group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold py-3 md:py-4 text-base md:text-lg font-rajdhani transition-all duration-300 hover:opacity-90 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                >
                  <span className="relative flex items-center justify-center gap-2">
                    Send Message <FiSend className="text-lg group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

              </form>
            </div>

            {/* Decorative Gradient Behind Form */}
            <div className="absolute -top-10 -right-10 w-full h-full bg-gradient-to-b from-purple-500/10 to-transparent rounded-3xl -z-10 blur-2xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
