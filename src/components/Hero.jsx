import React from "react";
import { motion } from "framer-motion";
import resume from "../assets/jibesh-resume.pdf";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(20,184,166,0.16),transparent_32%),linear-gradient(300deg,rgba(245,158,11,0.12),transparent_28%)]"></div>
      <div className="absolute inset-x-0 top-28 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-teal-300/40 to-transparent"></div>
      <div className="absolute bottom-16 left-1/2 h-40 w-[min(72rem,90vw)] -translate-x-1/2 border border-white/10 bg-white/[0.02]"></div>

      <div className="absolute right-6 top-32 hidden w-32 border border-teal-300/25 p-4 text-left text-xs uppercase tracking-[0.25em] text-teal-200/80 md:block">
        MERN
        <span className="mt-2 block h-px bg-teal-300/40"></span>
        AI
      </div>

      <motion.div
        className="container mx-auto px-4 md:px-6 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          variants={itemVariants}
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-amber-300 bg-clip-text text-transparent">
            Jibesh Sinha
          </span>
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl lg:text-3xl text-slate-200 mb-8"
          variants={itemVariants}
        >
          MERN Stack Developer
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
          variants={itemVariants}
        >
          I build exceptional digital experiences that are fast, accessible, and
          visually appealing.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <motion.a
            href="#contact"
            className="px-8 py-3 bg-teal-400 text-slate-950 rounded-md font-semibold shadow-lg shadow-teal-950/40 hover:bg-teal-300 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>

          <motion.a
            href={resume}
            download
            className="px-8 py-3 border border-amber-300/30 rounded-md font-medium text-white bg-white/5 hover:bg-amber-300/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-teal-300 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
