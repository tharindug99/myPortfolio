import React, { useState, useEffect } from 'react';
import Banner from '../components/header/Banner';
import MyAchievements from '../components/header/MyAchievements';
import NewSkills from '../components/header/NewSkills';
import Contact from './Contact';
import heroimg from '../components/images/Tharindu.jpg';
import About from './About';
import Footer from '../components/footer';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Home() {
  const [init, setInit] = useState(false); // Define the init state

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true); // Set the init state to true after initializing particles
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div id="home" className="lg:w-full bg-fixed relative align-center">
      <div
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent), url(${heroimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {init && ( // Render Particles component only if init is true
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
              background: {
                
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 10,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 6,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "nested",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
        )}
        <Banner />
        <NewSkills />
        <About />
        <MyAchievements />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
