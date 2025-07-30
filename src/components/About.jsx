

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Coffee, Lightbulb, Users, Award, MapPin, Calendar, Heart } from "lucide-react";
import MyImage from "../assets/profile.jpg";

const About = () => {
  const [activeTab, setActiveTab] = useState("story");
  const [currentFact, setCurrentFact] = useState(0);

  const tabs = [
    { id: "story", label: "My Story", icon: <Lightbulb className="w-5 h-5" /> },
    // { id: "journey", label: "Journey", icon: <Code className="w-5 h-5" /> },
    { id: "personal", label: "Personal", icon: <Heart className="w-5 h-5" /> }
  ];

  const funFacts = [
    "☕ Powered by coffee and curiosity",
    "🚀 Built 25+ web applications",
    "📚 Always learning something new",
    "🌍 Open source contributor",
    "🎯 Problem solver at heart"
  ];

  const journey = [
    {
      year: "2020",
      title: "Started Coding Journey",
      description: "Discovered programming through online tutorials",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      year: "2021",
      title: "First React Project",
      description: "Built my first React application and fell in love with component-based architecture",
      tech: ["React", "Node.js"]
    },
    {
      year: "2022",
      title: "Full Stack Development",
      description: "Expanded into backend development and database design",
      tech: ["MongoDB", "Express", "APIs"]
    },
    {
      year: "2023",
      title: "Professional Development",
      description: "Started working on client projects and freelance work",
      tech: ["TypeScript", "Next.js", "AWS"]
    },
    {
      year: "2024",
      title: "Advanced Specialization",
      description: "Focusing on performance optimization and modern development practices",
      tech: ["GraphQL", "Docker", "Microservices"]
    }
  ];

  const values = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, readable, and efficient code"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Working together to create amazing digital experiences"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Constantly exploring new technologies and methodologies"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "Delivering high-quality solutions that exceed expectations"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % funFacts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const renderTabContent = () => {
    switch (activeTab) {
      case "story":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Hi there! I'm a passionate full-stack developer who believes that great code can change the world. 
              My journey started with a simple "Hello World" and has evolved into creating complex, scalable applications 
              that solve real-world problems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in modern web technologies like React, Next.js, and Node.js. But beyond the tech stack, 
              I'm driven by the challenge of turning ideas into reality and creating digital experiences that users love.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-gray-800/50 rounded-lg border border-purple-500/30 text-center"
                >
                  <div className="text-purple-400 mb-2 flex justify-center">{value.icon}</div>
                  <h4 className="font-semibold text-white mb-1">{value.title}</h4>
                  <p className="text-xs text-gray-200">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case "journey":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
              {journey.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-start gap-6 pb-8"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm relative z-10">
                    {item.year}
                  </div>
                  <div className="flex-1 pt-2">
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-300 mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case "personal":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  Quick Facts
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300">4+ years of coding experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Coffee className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300">Coffee enthusiast & night owl</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300">25+ projects completed</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-white mb-4">When I'm Not Coding</h4>
                <div className="space-y-3 text-gray-300">
                  <p>🎮 Gaming and exploring virtual worlds</p>
                  <p>📚 Reading tech blogs and documentation</p>
                  <p>🎵 Listening to music while coding</p>
                  <p>🌱 Contributing to open source projects</p>
                  <p>💡 Experimenting with new technologies</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-500/30">
              <h4 className="text-lg font-bold text-white mb-3">Fun Fact Generator</h4>
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentFact}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-purple-300 text-lg"
                >
                  {funFacts[currentFact]}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-24 relative w-screen">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink-500/30 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-8 relative"
          >
            <div className="relative inline-block">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-50 blur-lg"
              />
              <img
                src={MyImage}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-pink-500 shadow-2xl mx-auto relative z-10 object-cover"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900 flex items-center justify-center"
              >
                <div className="w-3 h-3 bg-white rounded-full" />
              </motion.div>
            </div>
          </motion.div>

          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Passionate developer crafting digital experiences that matter
          </motion.p>
        </div>

        {/* Tab Navigation */}
        {/* <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex bg-gray-800/50 backdrop-blur-lg rounded-full p-1 border border-gray-700/50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.icon}
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div> */}

        {/* Tab Content */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
            <AnimatePresence mode="wait">
              {renderTabContent()}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Amazing Together</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with talented people. 
            Let's turn your ideas into reality!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:shadow-purple-500/25 hover:shadow-lg transition-all duration-300"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-bold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              View My Work
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;