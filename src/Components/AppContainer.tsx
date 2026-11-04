import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  const { hash } = useLocation();

  // Initialize state based on whether the preloader has already completed this session
  const [mainLoading, setMainLoading] = useState(() => {
    return !sessionStorage.getItem("portfolio_preloader_shown");
  });

  useEffect(() => {
    // If it was already shown in this session, skip the timer entirely
    if (!mainLoading) return;

    const timer = setTimeout(() => {
      setMainLoading(false);
      sessionStorage.setItem("portfolio_preloader_shown", "true");
    }, 5000);

    return () => clearTimeout(timer);
  }, [mainLoading]);

  // Smooth scroll to the target section (e.g., #projects) once ready
  useEffect(() => {
    if (!mainLoading && hash) {
      // Small timeout ensures the DOM has painted before calculating element offsets
      const scrollTimer = setTimeout(() => {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);

      return () => clearTimeout(scrollTimer);
    }
  }, [mainLoading, hash]);
  

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
