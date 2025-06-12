import React from "react";



import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
// import "./App.css";
import About from "./Components/About";
import Hero from "./Components/Hero";



function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
