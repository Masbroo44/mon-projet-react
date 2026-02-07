import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const navStyle = {
  display: "flex",
  gap: 12,
  padding: 12,
  borderBottom: "1px solid #ddd",
}; 

const containerStyle = {
  padding: 12,
}; 

export default function App() {
  return (
    <div>
      <nav style={navStyle}>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <main style={containerStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}