import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h2>Welcome to Our Restaurant</h2>
        <p>Experience the best dining in town.</p>
        <a href="#menu" className="btn">
          Explore Menu
        </a>
      </div>
    </section>
  );
};

export default Hero;
