import React, { useState, useEffect } from "react";

const SimpleNavbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [eventCount, setEventCount] = useState(0);

  useEffect(() => {
    console.log("🚀 SimpleNavbar mounted");
    
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      console.log("🔥 SCROLL EVENT! Y:", currentScroll, "Event #:", eventCount + 1);
      setScrollY(currentScroll);
      setEventCount(prev => prev + 1);
    };

    // Multiple event binding strategies
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('scroll', handleScroll);
    
    // Test if events work at all
    const testInterval = setInterval(() => {
      console.log("⏰ Interval check - Current scroll:", window.pageYOffset);
    }, 2000);

    // Initial values
    console.log("📊 Initial state:");
    console.log("- window.pageYOffset:", window.pageYOffset);
    console.log("- document.documentElement.scrollTop:", document.documentElement.scrollTop);
    console.log("- document.body.scrollTop:", document.body.scrollTop);
    console.log("- Page height:", document.documentElement.scrollHeight);
    console.log("- Window height:", window.innerHeight);
    console.log("- Is scrollable:", document.documentElement.scrollHeight > window.innerHeight);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
      clearInterval(testInterval);
    };
  }, [eventCount]);

  const isScrolled = scrollY > 50;

  return (
    <>
      {/* Simple navbar */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 p-4 transition-colors duration-300 ${
          isScrolled ? 'bg-red-600' : 'bg-blue-600'
        }`}
        style={{ 
          backgroundColor: isScrolled ? '#dc2626' : '#2563eb',
          transition: 'background-color 0.3s ease'
        }}
      >
        <div className="text-white font-bold">
          SCROLL TEST - Y: {scrollY}px - Events: {eventCount} - Changed: {isScrolled ? 'YES' : 'NO'}
        </div>
      </nav>

      {/* Debug overlay */}
      <div className="fixed top-20 right-4 bg-black text-white p-4 rounded z-50 text-sm">
        <div>Scroll Y: {scrollY}</div>
        <div>Events: {eventCount}</div>
        <div>Background: {isScrolled ? 'RED' : 'BLUE'}</div>
        <button 
          onClick={() => window.scrollTo(0, 200)}
          className="mt-2 px-2 py-1 bg-green-600 rounded"
        >
          Scroll to 200px
        </button>
      </div>

      {/* Tall content to make page scrollable */}
      <div className="pt-20">
        {[1,2,3,4,5].map(i => (
          <div key={i} className="h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
            <h1 className="text-6xl text-white font-bold">Section {i}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default SimpleNavbar;