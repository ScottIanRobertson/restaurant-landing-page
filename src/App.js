import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Video from "./components/Video";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="parallax">
        <Hero />
        <About />
        <Video />
        <Menu />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
