import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import "@/App.css";
import Preloader from "./PreLoader";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Experience } from "./Experience";
import { Contact } from "./Contact";
import { About } from "./About";

export default function AppContainer() {
  const [mainLoading, setMainLoading] = useState(true);

  useEffect(() => {
    // 2. You only need the timer to turn it OFF
    const timer = setTimeout(() => {
      setMainLoading(false);
    }, 5000);
    // 3. Senior Move: Always clear your timeouts!
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {mainLoading ? (
        <div className="preloaderDiv">
          <Preloader />
        </div>
      ) : (
        <div>
          <Navbar />
          <main>
            <Hero />
            <section id="about">
           <About />
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="experience">
              <Experience />
            </section>
            <section id="contact">
              <Contact />
              </section>  
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}
