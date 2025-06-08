import { HashRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
import Home from "./Home.tsx";
//import About from "./About.tsx";
import Contact from "./Contact.tsx";
import Blog from "./Blog.tsx";
import Resources from "./blog/Resources.tsx";
import Processing from "./blog/Processing.tsx";
import Acquisition from "./blog/Acquisition.tsx";
import Header from "./components/Header.tsx";
import Layout from "./Layout.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <Header />
    <Layout />
    <Routes>
      <Route index element={<Home />} />
      {/*<Route path="/about" element={<About />} />*/}
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />}>
        <Route path="resources" element={<Resources />} />
        <Route path="processing" element={<Processing />} />
        <Route path="acquisition" element={<Acquisition />} />
      </Route>
    </Routes>
  </HashRouter>
);
