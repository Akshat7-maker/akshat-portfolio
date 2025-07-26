import React from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => (
  <motion.nav
    initial={{ y: -60, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="w-full py-6 px-4 flex justify-between items-center fixed top-0 left-0 z-50 bg-gradient-to-r from-black/80 via-purple-900/80 to-black/80 backdrop-blur-md shadow-lg"
  >
    <a href="#" className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
      MyPortfolio
    </a>
    <ul className="flex gap-8 text-lg font-medium">
      {navLinks.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="hover:text-pink-400 transition-colors duration-200"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </motion.nav>
);

export default Navbar; 