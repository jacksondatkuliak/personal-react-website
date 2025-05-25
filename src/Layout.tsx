// Layout.tsx
import { Outlet } from "react-router";
import ParticlesBackground from "./components/ParticlesBackground";

function Layout() {
  return (
    <>
      <ParticlesBackground />
      <Outlet />
    </>
  );
}

export default Layout;
