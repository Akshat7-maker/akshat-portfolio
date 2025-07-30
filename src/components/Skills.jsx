import React from "react";

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

// Simple skill card component matching hero colors
const SkillCard = ({ skill, delay = 0, cardType = 'frontend' }) => {
  const isBackend = cardType === 'backend';
  
  return (
    <div 
      className={`group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-md border border-purple-500/30 p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 hover:border-purple-400/50`}
      style={{
        animationDelay: `${delay}ms`,
        animation: 'slideUp 0.6s ease-out forwards'
      }}
    >
      {/* Animated background gradient matching hero */}
      <div className={`absolute inset-0 bg-gradient-to-br ${isBackend ? 'from-purple-600/10 to-blue-600/10' : 'from-purple-600/10 to-pink-600/10'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-4 p-3 rounded-full bg-slate-700/30 group-hover:bg-slate-600/40 transition-all duration-300 group-hover:scale-110">
          {skill.icon}
        </div>
        <h3 className={`text-white font-bold text-lg ${isBackend ? 'group-hover:text-cyan-300' : 'group-hover:text-purple-300'} transition-colors duration-300 drop-shadow-lg`}>
          {skill.name}
        </h3>
      </div>

      {/* Subtle shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      </div>
    </div>
  );
};

// Skills grid section
const SkillsGrid = ({ skills, title, colorClass, cardType }) => {
  return (
    <div className="mb-16">
      <h3 className={`text-2xl font-bold mb-8 ${colorClass} flex items-center`}>
        <span className={`w-12 h-0.5 mr-4 ${cardType === 'backend' ? 'bg-gradient-to-r from-purple-400 to-cyan-400' : 'bg-gradient-to-r from-purple-400 to-pink-500'}`}></span>
        {title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <SkillCard 
            key={skill.name} 
            skill={skill} 
            delay={index * 100}
            cardType={cardType}
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
      <section id="skills" className="py-24 relative -mt-1 w-screen">
        {/* Seamless continuation of hero background */}
        <div className="absolute inset-0">
          {/* Animated grid continuing from hero */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse opacity-30" />
          
          {/* Gradient orbs positioned to flow from hero */}
          <div className="absolute -top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent pb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-300 leading-relaxed">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>
          
          <SkillsGrid 
            skills={frontendSkills} 
            title="Frontend" 
            colorClass="text-purple-400" 
            cardType="frontend"
          />
          
          <SkillsGrid 
            skills={backendSkills} 
            title="Backend" 
            colorClass="text-cyan-400" 
            cardType="backend"
          />
        </div>
      </section>
    </>
  );
};

export default Skills;