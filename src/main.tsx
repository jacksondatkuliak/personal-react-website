import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import About from "./About.tsx";
import Contact from "./Contact.tsx";
import Blog from "./Blog.tsx";
import Resources from "./blog/Resources.tsx";
import Processing from "./blog/Processing.tsx";
import Acquisition from "./blog/Acquisition.tsx";
import Header from "./components/Header.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route index element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/resources" element={<Resources />} />
      <Route path="/blog/processing" element={<Processing />} />
      <Route path="/blog/acquisition" element={<Acquisition />} />
    </Routes>
  </BrowserRouter>
);
