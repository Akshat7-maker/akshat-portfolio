// import React from "react";
// import { motion } from "framer-motion";

// const navLinks = [
//   { name: "Home", href: "#" },
//   { name: "About", href: "#about" },
//   { name: "Projects", href: "#projects" },
//   { name: "Contact", href: "#contact" },
// ];

// const Navbar = () => (
//   <motion.nav
//     initial={{ y: -60, opacity: 0 }}
//     animate={{ y: 0, opacity: 1 }}
//     transition={{ duration: 0.7, ease: "easeOut" }}
//     className="w-full py-6 px-4 flex justify-between items-center fixed top-0 left-0 z-50 bg-gradient-to-r from-black/80 via-purple-900/80 to-black/80 backdrop-blur-md shadow-lg"
//   >
//     <a href="#" className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
//       MyPortfolio
//     </a>
//     <ul className="flex gap-8 text-lg font-medium">
//       {navLinks.map((link) => (
//         <li key={link.name}>
//           <a
//             href={link.href}
//             className="hover:text-pink-400 transition-colors duration-200"
//           >
//             {link.name}
//           </a>
//         </li>
//       ))}
//     </ul>
//   </motion.nav>
// );

// export default Navbar; 

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#", icon: "🏠" },
  { name: "About", href: "#about", icon: "👨‍💻" },
  { name: "Skills", href: "#skills", icon: "🎨" },
  { name: "Projects", href: "#projects", icon: "🚀" },
  { name: "Contact", href: "#contact", icon: "📧" },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  const linkVariants = {
    initial: { y: 0 },
    hover: { 
      y: -2,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  const underlineVariants = {
    initial: { scaleX: 0, opacity: 0 },
    animate: { scaleX: 1, opacity: 1 },
    exit: { scaleX: 0, opacity: 0 }
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.2 }
    },
    open: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.1 }
    }
  };

  const mobileItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`w-full py-4 px-6 flex justify-between items-center fixed top-0 left-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-cyan-400/20" 
            : "bg-gradient-to-r from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-md"
        }`}
      >
        {/* Enhanced Logo with Akshat branding */}
        <motion.div
          variants={logoVariants}
          initial="initial"
          whileHover="hover"
          className="flex items-center gap-3 group"
        >
          {/* Animated tech icons */}
          <div className="flex items-center relative">
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="text-2xl relative z-10"
            >
              ⚡
            </motion.div>
            <motion.div
              animate={{ 
                rotate: -360,
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{ 
                rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                opacity: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute text-lg text-cyan-400/50"
            >
              ⭐
            </motion.div>
          </div>

          {/* Akshat's Logo */}
          <a 
            href="#" 
            className="relative group/logo"
          >
            {/* Main text */}
            <div className="flex items-center gap-1">
              <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
                Akshat
              </span>
              <motion.span 
                className="text-lg font-mono text-cyan-300/70"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                .dev
              </motion.span>
            </div>

            {/* Coding brackets animation */}
            <div className="absolute -left-3 -right-3 -top-1 -bottom-1 flex justify-between items-center opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300">
              <motion.span 
                className="text-cyan-400 font-mono text-xl"
                initial={{ x: 5, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                &lt;
              </motion.span>
              <motion.span 
                className="text-emerald-400 font-mono text-xl"
                initial={{ x: -5, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                /&gt;
              </motion.span>
            </div>

            {/* Glowing background effect */}
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-emerald-400/20 rounded-xl blur-md opacity-0"
              whileHover={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Typing cursor effect */}
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-5 top-1/2 transform -translate-y-1/2 w-0.5 h-6 bg-cyan-400"
            />

            {/* Particle effect on hover */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                  initial={{ 
                    x: 0, 
                    y: 0, 
                    opacity: 0,
                    scale: 0
                  }}
                  whileHover={{
                    x: (Math.random() - 0.5) * 60,
                    y: (Math.random() - 0.5) * 40,
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.1,
                    ease: "easeOut"
                  }}
                  style={{
                    left: "50%",
                    top: "50%",
                  }}
                />
              ))}
            </div>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <ul className="flex gap-8 text-lg font-medium relative">
            {navLinks.map((link) => (
              <motion.li 
                key={link.name}
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
                className="relative"
              >
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 relative overflow-hidden group ${
                    activeLink === link.name 
                      ? "text-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/20" 
                      : "text-slate-300 hover:text-cyan-300 hover:bg-slate-700/50"
                  }`}
                >
                  <span className="text-sm group-hover:scale-110 transition-transform duration-200">
                    {link.icon}
                  </span>
                  <span className="relative z-10">{link.name}</span>
                  
                  {/* Animated background on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Active indicator */}
                  <AnimatePresence>
                    {activeLink === link.name && (
                      <motion.div
                        variants={underlineVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400"
                        layoutId="activeIndicator"
                      />
                    )}
                  </AnimatePresence>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="md:hidden flex flex-col gap-1 p-2 relative z-50"
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={showMobileMenu ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded"
          />
          <motion.div
            animate={showMobileMenu ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded"
          />
          <motion.div
            animate={showMobileMenu ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded"
          />
        </motion.button>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.8,
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${50 + (i % 2) * 20}%`,
              }}
            />
          ))}
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-20 left-4 right-4 bg-slate-900/95 backdrop-blur-xl rounded-2xl p-6 z-40 md:hidden border border-cyan-400/20 shadow-2xl shadow-cyan-500/10"
          >
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  variants={mobileItemVariants}
                >
                  <a
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.name);
                      setShowMobileMenu(false);
                    }}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                      activeLink === link.name
                        ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/30 shadow-lg shadow-cyan-500/20"
                        : "text-slate-300 hover:text-cyan-300 hover:bg-slate-700/50 hover:shadow-md"
                    }`}
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span className="font-medium">{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;