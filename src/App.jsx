import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

const App = () => {
  return (
    // <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white font-sans max-w-full mx-auto">
    //   <Navbar />
    //   <main className="flex-1 flex flex-col w-full px-4">
    //     <Hero />
    //     <Skills />
    //     <About />
    //     <Projects />
    //     <Contact />
    //   </main>
    //   <Footer />
    // </div>

    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white font-sans">
  <Navbar />
  <Hero />
  <Skills />
  <About />
  <Projects />
  <Contact />
  <Footer />
</div>
  );
};

export default App;
