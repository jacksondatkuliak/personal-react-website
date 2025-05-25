// ParticlesBackground.tsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "@tsparticles-engine";
import { loadFull } from "tsparticles";

const ParticlesBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine): Promise<void> => {
    // this adds all the tsParticles features to the engine
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: { value: "#000" }, // optional background color
        },
        fullScreen: {
          enable: true, // cover entire screen
          zIndex: -1, // stay behind content
        },
        particles: {
          number: {
            value: 50,
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
          },
          move: {
            enable: true,
            speed: 2,
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
