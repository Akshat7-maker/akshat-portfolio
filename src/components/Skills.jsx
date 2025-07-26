import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const frontendSkills = [
  { name: "React.js", icon: <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2.5" fill="currentColor"/><g stroke="currentColor" strokeWidth="1.5"><ellipse rx="10" ry="4.5" cx="12" cy="12"/><ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(60 12 12)"/><ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(120 12 12)"/></g></svg> },
  { name: "Tailwind CSS", icon: <svg className="w-8 h-8 text-sky-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 6.5c-2.667 0-4.333 1.333-5 4 1-1.333 2.167-1.833 3.5-1.5.76.177 1.31.73 2.01 1.43C13.49 11.91 14.24 12.66 15.5 12.5c1.333-.167 2.167-1 2.5-2.5-.667-2.667-2.333-4-5-4zm-7 7c-2.667 0-4.333 1.333-5 4 1-1.333 2.167-1.833 3.5-1.5.76.177 1.31.73 2.01 1.43C6.49 18.91 7.24 19.66 8.5 19.5c1.333-.167 2.167-1 2.5-2.5-.667-2.667-2.333-4-5-4z"/></svg> },
  { name: "JavaScript (ES6+)", icon: <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M2 2h20v20H2z"/><path d="M7.5 17.5l1.5-1c.5.8 1.2 1.3 2.1 1.3.9 0 1.4-.4 1.4-1 0-.7-.6-.9-1.6-1.3l-.5-.2c-1.4-.5-2.3-1.1-2.3-2.5 0-1.2.9-2.1 2.3-2.1 1 0 1.7.3 2.2 1l-1.3 1c-.3-.5-.7-.7-1-.7-.5 0-.8.3-.8.7 0 .5.3.7 1.1 1l.5.2c1.6.6 2.5 1.2 2.5 2.6 0 1.5-1.2 2.2-2.7 2.2-1.5 0-2.4-.7-2.9-1.6zm7.2-1.1l1.5-.9c.3.5.7.9 1.4.9.6 0 1-.2 1-.7 0-.5-.4-.7-1.1-1l-.4-.2c-1.2-.4-2-1-2-2.2 0-1.1.8-1.9 2.1-1.9.9 0 1.6.3 2.1 1l-1.3 1c-.2-.3-.5-.5-.8-.5-.4 0-.7.2-.7.6 0 .4.3.6 1 .9l.4.2c1.3.5 2.1 1.1 2.1 2.3 0 1.3-1 2-2.3 2-1.2 0-2-.6-2.4-1.4z"/></svg> },
  { name: "HTML5", icon: <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M3.5 2l1.7 19.1L12 22l6.8-1.9L20.5 2zm13.1 5.7l-.2 2.1-.1 1.2H8.7l.1 1.5h7.1l-.2 2.1-4.7 1.3v.1h-.1l-4.7-1.3-.3-3.6h1.7l.2 2.1 3.1.9 3.1-.9.2-2.1H8.7l-.1-1.2h7.1l.2-2.1z"/></svg> },
  { name: "CSS3", icon: <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M3.5 2l1.7 19.1L12 22l6.8-1.9L20.5 2zm13.1 5.7l-.2 2.1-.1 1.2H8.7l.1 1.5h7.1l-.2 2.1-4.7 1.3v.1h-.1l-4.7-1.3-.3-3.6h1.7l.2 2.1 3.1.9 3.1-.9.2-2.1H8.7l-.1-1.2h7.1l.2-2.1z"/></svg> }
];
const backendSkills = [
  { name: "Node.js", icon: <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm1.93 17.36c-.13.03-.18-.06-.18-.13v-1.3c0-.44-.15-.73-.32-.88 1.08-.12 2.22-.27 2.22-2.06 0-.51-.18-.93-.48-1.26.05-.12.21-.6-.05-1.25 0 0-.4-.13-1.3.48-.38-.11-.79-.17-1.2-.17-.41 0-.82.06-1.2.17-.9-.61-1.3-.48-1.3-.48-.26.65-.1 1.13-.05 1.25-.3.33-.48.75-.48 1.26 0 1.78 1.13 1.94 2.22 2.06-.13.11-.25.31-.29.6-.26.12-.92.32-1.33-.38-.09-.15-.26-.21-.41-.16-.15.06-.21.23-.13.38.13.22.32.41.57.56.23.13.5.2.77.2.16 0 .32-.02.47-.06.13.03.27.05.41.05.14 0 .28-.02.41-.05.15.04.31.06.47.06.27 0 .54-.07.77-.2.25-.15.44-.34.57-.56.08-.15.02-.32-.13-.38-.15-.05-.32.01-.41.16-.41.7-1.07.5-1.33.38-.04-.29-.16-.49-.29-.6z"/></svg> },
  { name: "Express.js", icon: <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="10" ry="6" stroke="currentColor" strokeWidth="2"/><path d="M2 12c0 3.314 4.477 6 10 6s10-2.686 10-6" stroke="currentColor" strokeWidth="2"/><path d="M2 12V8c0-3.314 4.477-6 10-6s10 2.686 10 6v4" stroke="currentColor" strokeWidth="2"/></svg> },
  { name: "MongoDB", icon: <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm.5 17.5c-.28 0-.5-.22-.5-.5v-1.5c0-.28.22-.5.5-.5s.5.22.5.5v1.5c0 .28-.22.5-.5.5zm2.5-2.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-1.5c0-.28.22-.5.5-.5s.5.22.5.5v1.5zm-5 0c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-1.5c0-.28.22-.5.5-.5s.5.22.5.5v1.5zm7-2.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-1.5c0-.28.22-.5.5-.5s.5.22.5.5v1.5zm-9 0c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-1.5c0-.28.22-.5.5-.5s.5.22.5.5v1.5z"/></svg> },
  { name: "REST APIs", icon: <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 12h10" stroke="#fff" strokeWidth="2"/></svg> }
];

function CoverflowCarousel({ skills, colorClass }) {
  const [active, setActive] = useState(2); // center card
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const [isHover, setIsHover] = useState(false);

  // Parallax effect
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
  };

  // Animate active card on hover
  const scale = useTransform(mouseX, [0, 400], [1, 1.05]);

  // Carousel navigation
  const next = () => setActive((prev) => (prev + 1) % skills.length);
  const prev = () => setActive((prev) => (prev - 1 + skills.length) % skills.length);

  // Auto-rotate
  React.useEffect(() => {
    if (!isHover) {
      const interval = setInterval(next, 2000);
      return () => clearInterval(interval);
    }
  }, [isHover]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full h-48 select-none mb-12"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <button
        onClick={prev}
        className="absolute left-0 z-10 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 shadow-lg backdrop-blur-md"
        aria-label="Previous"
      >
        &#8592;
      </button>
      <div className="flex items-center justify-center w-full h-full gap-0">
        {skills.map((skill, idx) => {
          // Calculate position
          const offset = idx - active;
          const isActive = idx === active;
          const z = 10 - Math.abs(offset);
          const scaleVal = isActive ? 1.1 : 0.85;
          const rotateY = offset * 30;
          const blur = Math.abs(offset) > 1 ? "blur-sm" : "";
          const opacity = Math.abs(offset) > 2 ? 0 : 1;
          return (
            <motion.div
              key={skill.name}
              style={{
                zIndex: z,
                scale: scaleVal,
                rotateY,
                opacity,
                boxShadow: isActive
                  ? "0 8px 32px 0 rgba(236,72,153,0.25), 0 1.5px 8px 0 rgba(139,92,246,0.15)"
                  : undefined,
              }}
              className={`relative mx-[-32px] transition-all duration-500 ${blur} ${isActive ? "" : "grayscale"}`}
              animate={{
                scale: isActive ? 1.1 : 0.85,
                opacity,
                rotateY,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
            >
              <div
                className={`flex flex-col items-center justify-center w-48 h-40 rounded-2xl ${colorClass} bg-opacity-80 shadow-2xl border border-white/10 backdrop-blur-lg p-4 glassmorphism`}
                style={{
                  background:
                    "linear-gradient(135deg, rgba(236,72,153,0.15) 0%, rgba(139,92,246,0.12) 100%)",
                  boxShadow: isActive
                    ? "0 8px 32px 0 rgba(236,72,153,0.25), 0 1.5px 8px 0 rgba(139,92,246,0.15)"
                    : undefined,
                }}
              >
                {skill.icon}
                <span className="mt-4 text-lg font-bold text-white drop-shadow-lg text-center">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
      <button
        onClick={next}
        className="absolute right-0 z-10 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 shadow-lg backdrop-blur-md"
        aria-label="Next"
      >
        &#8594;
      </button>
    </div>
  );
}

const Skills = () => (
  <section id="skills" className="py-24">
    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
      Skills
    </h2>
    <div className="max-w-6xl mx-auto ">
      <h3 className="text-xl font-bold mb-2 text-pink-400">Frontend</h3>
      <CoverflowCarousel skills={frontendSkills} colorClass="bg-pink-500/80" />
      <h3 className="text-xl font-bold mb-2 text-purple-400 mt-8">Backend</h3>
      <CoverflowCarousel skills={backendSkills} colorClass="bg-purple-500/80" />
    </div>
  </section>
);

export default Skills; 