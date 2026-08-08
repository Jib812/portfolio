import React, { useState } from "react";
import { motion } from "framer-motion";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";

const Contact = () => {

const emailAddress = "jibeshsinha06@gmail.com";
const emailUrl = `mailto:${emailAddress}`;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href = `${emailUrl}?subject=${subject}&body=${body}`;
  };

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
      url: "https://x.com/AnujGus76627273?t=_H_4tHEkL-ar5xhMhtYzeg&s=09",
      icon: twitter,
      iconClass: "invert",
      isImage: true,
    },
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
    <section id="contact" className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-300 to-amber-300 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Let's work together</h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              I'm currently available for freelance work and open to full-time
              opportunities. If you have a project that you want to get started
              or think you need my help with something, then get in touch.
            </p>

            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4 text-teal-300">
                Contact Information
              </h4>
              <p className="text-slate-300 mb-2">
                Email:{" "}
                <a
                  href={emailUrl}
                  className="hover:text-teal-300 transition-colors"
                >
                  {emailAddress}
                </a>
              </p>
              {/* <p className="text-slate-300">Phone: +919475143611</p> */}
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-amber-300">
                Follow Me
              </h4>
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
                    className="w-12 h-12 border border-white/10 bg-white/[0.04] flex items-center justify-center hover:border-teal-300/50 hover:bg-teal-300/10 transition-all"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.name}
                  >
                    {social.isImage ? (
                      <img
                        src={social.icon}
                        alt={social.name}
                        className={`w-6 h-6 object-contain ${
                          social.iconClass || ""
                        }`}
                      />
                    ) : (
                      <i className={`${social.icon} text-white text-xl`}></i>
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#0c1018]/90 backdrop-blur-sm p-8 border border-white/10"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#07090f] border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300 text-white"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#07090f] border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300 text-white"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-[#07090f] border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300 text-white"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 bg-teal-400 rounded-md font-semibold text-slate-950 shadow-lg shadow-teal-950/40 hover:bg-teal-300 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
