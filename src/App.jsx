import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import SimpleNavbar from "./components/snav";

const App = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black w-screen">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />
      {/* <SimpleNavbar /> */}
    </div>
  );
};

export default App;
