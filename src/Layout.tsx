// Layout.tsx
import { Outlet } from "react-router";
import ParticlesBackground from "./components/ParticlesBackground";

function Layout() {
  return (
    <>
      {/**<ParticlesBackground />*/}
      <ParticlesBackground />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
