import React from "react";
import { motion } from "framer-motion";
import Profile from "../assets/Profile.jpg";

const About = () => {
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
    <section>
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-72 md:w-80 md:h-96">
            <div className="absolute -inset-4 border border-teal-300/25"></div>

            <div className="absolute inset-0 bg-gradient-to-br from-teal-300 to-amber-300 p-1">
              <div className="w-full h-full bg-slate-950 flex items-center justify-center overflow-hidden">
                <img
                  src={Profile}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-5 -right-5 border border-amber-300/40 bg-[#07090f] px-4 py-3 text-sm text-amber-200">
              Full-Stack Developer
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-slate-100">
           Building practical web applications with modern technologies.
          </h3>

          <p className="text-slate-300 mb-6 leading-relaxed">
            I'm a passionate Software Developer interested in building modern
web applications and solving real-world problems through technology.
I have hands-on experience with the MERN stack and enjoy developing
responsive frontend interfaces, REST APIs, and database-driven
applications.
          </p>

          <p className="text-slate-300 mb-8 leading-relaxed">
           I enjoy learning new technologies, building personal projects,
and continuously improving my programming and problem-solving
skills. I am particularly interested in web development,
software engineering, and exploring AI technologies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-white/10 bg-white/[0.03] p-5">
              <h4 className="font-bold text-teal-300 mb-2">Frontend</h4>
              <p className="text-slate-400 text-lg">
                React, Redux, Bootstrap, Tailwind CSS, Framer Motion
              </p>
            </div>

            <div className="border border-white/10 bg-white/[0.03] p-5">
              <h4 className="font-bold text-amber-300 mb-2">Backend</h4>
              <p className="text-slate-400 text-lg">
                Node.js, Express, MongoDB, REST APIs, Express.js, JWT
                Authentication
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;