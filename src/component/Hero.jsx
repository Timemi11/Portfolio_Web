import React from "react";
import Typewriter from "typewriter-effect";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="Hero" className="snap-child">
      <div className="introduction">
        <h1>Hello , My Name is</h1>
        <h1>Chatchawan Aromtip</h1>
        <p>
          I'm interested to be
          <span>
            <Typewriter
              options={{
                strings: ["Software Engineer", "Full Stack Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </p>
      </div>
      <div className="profile">
        <img src="src\assets\image\Profile.jpg" alt="Profile" />
      </div>
    </section>
  );
}
