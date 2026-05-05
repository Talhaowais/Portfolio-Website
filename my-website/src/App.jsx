import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect, useState } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Loader from "./components/ui/Loader";

import Home from "./pages/Home";
import Games from "./pages/Games";

import TicTacToe from "./pages/games/TicTacToe";
import TypingSpeedTest from "./pages/games/TypingSpeedTest";
import MemoryGame from "./pages/games/MemoryGame";
import MiniChatApp from "./pages/games/MiniChatApp";

export default function App() {
  const location = useLocation();

  const [loading, setLoading] = useState(true);

  // ✅ Full page load detection
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 800); // smooth fade-out delay
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // ✅ Handle hash scrolling (/about, /skills etc.)
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  // ⛔ SHOW LOADER UNTIL FULL LOAD
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-black text-white">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />

        {/* Games routes */}
        <Route path="/games/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/games/typing" element={<TypingSpeedTest />} />
        <Route path="/games/memory" element={<MemoryGame />} />
        <Route path="/games/chatapp" element={<MiniChatApp />} />
      </Routes>

      <Footer />
    </div>
  );
}