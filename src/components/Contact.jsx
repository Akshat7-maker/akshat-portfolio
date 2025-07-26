// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Contact = () => {
//   const [submitted, setSubmitted] = useState(false);

//   return (
//     <section id="contact" className="py-24 flex flex-col items-center text-center">
//       <motion.h2
//         initial={{ y: 40, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: true }}
//         className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
//       >
//         Contact
//       </motion.h2>
//       <motion.form
//         initial={{ scale: 0.9, opacity: 0 }}
//         whileInView={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.7, delay: 0.2 }}
//         viewport={{ once: true }}
//         className="w-full max-w-md bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-8 shadow-xl border border-gray-700 flex flex-col gap-6"
//         onSubmit={e => {
//           e.preventDefault();
//           setSubmitted(true);
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Your Name"
//           required
//           className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
//         />
//         <input
//           type="email"
//           placeholder="Your Email"
//           required
//           className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
//         />
//         <textarea
//           placeholder="Your Message"
//           required
//           rows={4}
//           className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
//         />
//         <motion.button
//           whileHover={{ scale: 1.05, background: "linear-gradient(90deg,#ec4899,#8b5cf6)" }}
//           whileTap={{ scale: 0.97 }}
//           type="submit"
//           className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
//         >
//           {submitted ? "Thank you!" : "Send Message"}
//         </motion.button>
//       </motion.form>
//     </section>
//   );
// };

// export default Contact; 

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle, Coffee, MessageCircle } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "hello@yourname.dev",
      link: "mailto:hello@yourname.dev",
      color: "text-blue-400"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      color: "text-green-400"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Ludhiana, Punjab, IN",
      link: "#",
      color: "text-purple-400"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      link: "https://github.com",
      color: "hover:text-gray-300"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      link: "https://linkedin.com",
      color: "hover:text-blue-400"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: "Twitter",
      link: "https://twitter.com",
      color: "hover:text-cyan-400"
    }
  ];

  const projectTypes = [
    "Web Application",
    "Mobile App",
    "E-commerce Site",
    "Portfolio Website",
    "API Development",
    "Other"
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        projectType: ""
      });
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent pb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with talented people. 
                Whether you have a project in mind or just want to chat about technology, feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.link}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className={`${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{item.label}</div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className={`p-3 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/50 text-gray-400 ${social.color} transition-all duration-300 hover:border-purple-500/50`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-500/30">
              <div className="flex items-center gap-3 mb-3">
                <Coffee className="w-5 h-5 text-purple-400" />
                <h4 className="text-lg font-semibold text-white">Quick Response</h4>
              </div>
              <p className="text-gray-300 text-sm">
                I typically respond to messages within 24 hours. For urgent inquiries, 
                feel free to call or connect via LinkedIn.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                    className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-gray-300 mb-6">
                    Thank you for reaching out! I'll get back to you within 24 hours.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 space-y-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <MessageCircle className="w-6 h-6 text-purple-400" />
                    <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-900/70 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-900/70 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-900/70 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-900/70 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                      placeholder="Let's discuss a project"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-gray-900/70 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project idea, timeline, and budget..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <p className="text-sm text-gray-400 text-center">
                    * Required fields. I respect your privacy and will never share your information.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Prefer a Quick Chat?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Sometimes a quick conversation is more effective than emails. 
            Feel free to schedule a call to discuss your project in detail.
          </p>
          <motion.a
            href="tel:+15551234567"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-purple-500 text-purple-400 font-bold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            Schedule a Call
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;