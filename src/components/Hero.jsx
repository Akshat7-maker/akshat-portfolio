// import React from "react";
// import { motion } from "framer-motion";

// const Hero = () => (
//   <section id="hero" className="flex flex-col items-center justify-center min-h-[90vh] pt-32 pb-12 text-center relative overflow-hidden  w-screen">
//     {/* Animated background blobs */}
//     <motion.div
//       className="absolute top-0 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -z-10"
//       initial={{ scale: 0.8, opacity: 0 }}
//       animate={{ scale: 1, opacity: 0.5 }}
//       transition={{ duration: 1.2, ease: "easeOut" }}
//       style={{ filter: "blur(80px)" }}
//     >
//       <div className="w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full opacity-70 animate-pulse" />
//     </motion.div>
//     <motion.h1
//       initial={{ y: 60, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 1, delay: 0.2 }}
//       className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent mb-6 drop-shadow-lg border-b-2 border-pink-500 pb-3"
//     >
//       Welcome to My Portfolio
//     </motion.h1>
//     <motion.p
//       initial={{ y: 40, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 1, delay: 0.5 }}
//       className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-gray-200"
//     >
//       I craft beautiful, modern web experiences with React, Tailwind CSS, and creative motion.
//     </motion.p>
//     <motion.a
//       href="#projects"
//       initial={{ scale: 0.8, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       transition={{ duration: 0.7, delay: 0.9 }}
//       className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:from-purple-500 hover:to-pink-500 transition-transform duration-300"
//     >
//       View My Work
//     </motion.a>
//   </section>
// );

// export default Hero; 

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Terminal, Cpu, Zap, Github, Coffee } from "lucide-react";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [currentCode, setCurrentCode] = useState(0);
  
  const roles = [
    "Full Stack Developer",
    "Frontend Developer", 
    // "UI/UX Enthusiast",
    "Problem Solver",
    "Code Craftsman"
  ];

  const codeSnippets = [
    "const magic = () => dreams + code;",
    "while(coding) { happiness++; }",
    "const future = await buildSomethingAmazing();",
    "function create() { return innovation; }"
  ];

  const techStack = [
    { name: "JavaScript", color: "text-blue-400" },
    { name: "React", color: "text-cyan-400" },
    { name: "Next.js", color: "text-sky-400" },
    { name: "Node.js", color: "text-green-400" },
    // { name: "Python", color: "text-yellow-400" },
    { name: "MongoDB", color: "text-emerald-400" },
    { name: "SQL", color: "text-amber-400" },
    // { name: "AWS", color: "text-orange-400" }
  ];

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);

    const codeInterval = setInterval(() => {
      setCurrentCode((prev) => (prev + 1) % codeSnippets.length);
    }, 3000);

    return () => {
      clearInterval(roleInterval);
      clearInterval(codeInterval);
    };
  }, []);

  const floatingIcons = [
    { Icon: Code, delay: 0, x: "10%", y: "20%" },
    { Icon: Terminal, delay: 0.5, x: "85%", y: "30%" },
    { Icon: Cpu, delay: 1, x: "15%", y: "70%" },
    { Icon: Zap, delay: 1.5, x: "80%", y: "75%" },
    { Icon: Github, delay: 2, x: "5%", y: "45%" },
    { Icon: Coffee, delay: 2.5, x: "90%", y: "55%" }
  ];

  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-[95vh] pt-20 pb-12 text-center relative overflow-hidden w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse opacity-30" />
        
        {/* Floating tech icons */}
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute text-purple-400/20 w-8 h-8"
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.2, 0.6, 0.2], 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 4, 
              delay,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <Icon size={32} />
          </motion.div>
        ))}

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full filter blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full filter blur-3xl"
          animate={{ 
            x: [0, -80, 0],
            y: [0, 50, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      {/* Main content */}
      <div className="z-10 max-w-6xl mx-auto px-4">
        
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="text-cyan-400 text-lg font-mono">Hello World! 👋</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-7xl font-black mb-4"
        >
          <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
            I'm a 
          </span>
          <br />
          <div className="relative h-16 md:h-24 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRole}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent font-black"
              >
                {roles[currentRole]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.h1>

        {/* Code snippet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-slate-800/50 backdrop-blur-md border border-purple-500/30 rounded-lg p-4 mb-8 max-w-md mx-auto"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-400 text-sm ml-2">code.js</span>
          </div>
          <div className="font-mono text-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCode}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-cyan-300"
              >
                {codeSnippets[currentCode]}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-purple-400"
                >
                  |
                </motion.span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300 leading-relaxed"
        >
          Passionate about creating digital experiences that matter. I transform ideas into 
          <span className="text-purple-400 font-semibold"> scalable applications </span>
          using modern technologies and clean, efficient code.
        </motion.p>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {techStack.map((tech, index) => (
            <motion.span
              key={tech.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className={`${tech.color} font-mono text-sm bg-slate-800/40 backdrop-blur-sm border border-gray-700/50 px-3 py-1 rounded-full cursor-default`}
            >
              {tech.name}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Code size={20} />
              View My Projects
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-bold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            <Terminal size={20} />
            Let's Connect
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-purple-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;