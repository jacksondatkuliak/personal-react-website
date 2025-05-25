import Particles from "@tsparticles/react";
import { tsParticles } from "@tsparticles/engine";
import { loadStarsPreset } from "@tsparticles/preset-stars";
import { useEffect } from "react";

// TODO: eventually figure out how to get this to not reload
// on page reload
function ParticlesBackground() {
  // tsParticles setup
  useEffect(() => {
    const initParticles = async () => {
      await loadStarsPreset(tsParticles);

      await tsParticles.load({
        id: "tsparticles",
        options: {
          preset: "stars",
          fullScreen: {
            enable: true,
            zIndex: -100,
          },
        },
      });
    };

    initParticles();
  }, []);
  return <Particles />;
}

export default ParticlesBackground;
