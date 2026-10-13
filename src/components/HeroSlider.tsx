
import { useState, useEffect } from "react";

const images = [
  "/mars-1.png",
  "/mars-2.png",
  "/mars-3.png",
  "/mars-4.png",
  "/mars-5.png",
  "/mars-6.png",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-slider">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Марс ${index + 1}`}
          className={`hero-slider__img ${index === current ? "active" : ""}`}
        />
      ))}
    </div>
  );
}
