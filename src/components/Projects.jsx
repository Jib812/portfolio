import React from "react";
import { motion } from "framer-motion";
import Intetrview from "../assets/ai_interview.png";
import Frontend from "../assets/frontend.png"


const Projects = () => {
  const projects = [
    {
      title: "AI Smart Interview",
      description:
        "AI-powered interview platform that analyzes resumes, generates personalized questions, evaluates answers, and provides scores and feedback.",
      image: Intetrview,
      technologies: [ "React" , "Tailwind CSS","JavaScript",  "Node.js", "Express"],
      liveLink: "https://ai-smart-interview-wcio.onrender.com/",
      codeLink: " https://github.com/Jib812/AI-Smart-Interview.git",
      featured: false,
    },
    
    {
      title: "Frontend animated project",
      description:
      " An animated frontend website inspired by LAZAREV., featuring modern UI, smooth animations, interactive components, and responsive design to showcase an AI & ML product design agency.",
      image:Frontend,
      technologies: [ "HTML","CSS","JavaScript"],
      liveLink: "https://lazarev-ai-and-ml-prduct-design-agency.onrender.com",
      codeLink: "https://github.com/Jib812/frontend-animated-project.git",
      featured: false,
    }

  ];

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
    <section id="projects" className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-300 to-amber-300 mx-auto"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#0c1018]/80 overflow-hidden group hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-2 border border-white/10 hover:border-teal-300/40"
            >
              <div className="h-48 bg-slate-800 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-amber-300 text-slate-950 text-xs font-bold px-2 py-1">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <p className="text-slate-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white/10 px-2 py-1 text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between">
                  <motion.a
                    href={project.liveLink}
                    className={`text-sm font-medium text-white px-4 py-2 rounded-lg transition-all ${
                      project.liveLink !== "#"
                        ? "bg-teal-400 text-slate-950 hover:bg-teal-300"
                        : "bg-slate-700 cursor-not-allowed opacity-70"
                    }`}
                    whileHover={project.liveLink !== "#" ? { scale: 1.05 } : {}}
                    whileTap={project.liveLink !== "#" ? { scale: 0.95 } : {}}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.liveLink !== "#" ? "Live Demo" : "Coming Soon"}
                  </motion.a>
                  <motion.a
                    href={project.codeLink}
                    className="text-sm font-medium text-white border border-amber-300/30 px-4 py-2 rounded-md hover:bg-amber-300/10 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
