import React from "react";
import Header from "./component/Header.jsx";
import Hero from "./component/Hero.jsx";
import Portfolio from "./component/Portfolio.jsx";
import Contact from "./component/Contact.jsx";
import Footer from "./component/Footer.jsx";
import Skill from "./component/Skill.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
