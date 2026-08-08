import React from "react";
import { motion } from "framer-motion";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const emailUrl = "mailto:gusainanuj26@gmail.com";

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Jib812",
      icon: github,
      iconClass: "invert",
      isImage: true,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jibesh-sinha/",
      icon: linkedin,
      isImage: true,
    },
    {
      name: "Email",
      url: emailUrl,
      icon: gmail,
      isImage: true,
    },
    {
      name: "Twitter",
      url: "https://x.com/JibeshSinh48324",
      icon: twitter,
      iconClass: "invert",
      isImage: true,
    },
  ];

  return (
    <footer className="bg-[#07090f] border-t border-white/10 py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-300 to-amber-300 bg-clip-text text-transparent mb-4">
              Jibesh Sinha
            </h3>
            <p className="text-slate-400 mb-6">
              Creating beautiful, functional, and user-focused digital
              experiences.
            </p>
            <p className="text-slate-500 text-sm">
              © {currentYear} Jibesh Sinha. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:ml-8"
          >
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-teal-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target={
                    social.url.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    social.url.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="w-10 h-10 border border-white/10 bg-white/[0.04] flex items-center justify-center hover:border-teal-300/50 hover:bg-teal-300/10 transition-all"
                  whileHover={{ y: -3 }}
                >
                  {social.isImage ? (
                    <img
                      src={social.icon}
                      alt={social.name}
                      className={`w-5 h-5 object-contain ${
                        social.iconClass || ""
                      }`}
                    />
                  ) : (
                    <span className="text-slate-300 hover:text-white">
                      {social.name[0]}
                    </span>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-white/10 mt-8 pt-8 text-center text-slate-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>Designed and built with ❤️ using React and Tailwind CSS</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
