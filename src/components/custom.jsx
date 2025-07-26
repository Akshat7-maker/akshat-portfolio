import React, { useState } from 'react';

const images = [
  "https://via.placeholder.com/600x300?text=1",
  "https://via.placeholder.com/600x300?text=2",
  "https://via.placeholder.com/600x300?text=3",
];

const CustomCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div style={{ position: "relative", width: "600px", height: "300px", overflow: "hidden" }}>
      <img src={images[current]} alt={`Slide ${current + 1}`} style={{ width: "100%", height: "100%" }} />
      <button onClick={prevSlide} style={{ position: "absolute", left: 0, top: "50%" }}>⟵</button>
      <button onClick={nextSlide} style={{ position: "absolute", right: 0, top: "50%" }}>⟶</button>
    </div>
  );
};

export default CustomCarousel;
