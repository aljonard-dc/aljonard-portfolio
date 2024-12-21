"use client"
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadFull } from "tsparticles";

export default function Particle() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    console.log("init");
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = () => {
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          style={{
            zIndex: 1,
          }}
          options={{
         
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
             
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
               
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
           
            particles: {
              background: {
                color: {
                    value: "#8ABDBC",
                },
            },
              color: {
                value: "#121f21",
              },
              links: {
                color: "#121f21",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#121f21",
                opacity: 0.4,
                width: 1
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1.2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
               
                },
                value: 160,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
}

