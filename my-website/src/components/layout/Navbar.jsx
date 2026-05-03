import { useState } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { useLocation, useNavigate, Link } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const baseLinkStyle =
    "cursor-pointer transition-all duration-200 hover:text-purple-400";

  const goToSection = (sectionId) => {
    setMenuOpen(false);

    if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-gray-800">
      <Container>
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link
            to="/"
            className={`${baseLinkStyle} font-bold text-lg`}
          >
            Talha.dev
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex gap-6 text-sm text-gray-300 items-center">

            <button onClick={() => goToSection("about")} className={baseLinkStyle}>
              About
            </button>

            <button onClick={() => goToSection("projects")} className={baseLinkStyle}>
              Projects
            </button>

            <button onClick={() => goToSection("skills")} className={baseLinkStyle}>
              Skills
            </button>

            <button onClick={() => goToSection("contact")} className={baseLinkStyle}>
              Contact
            </button>

            {/* ✅ Games (now consistent button behavior) */}
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/games");
              }}
              className={baseLinkStyle}
            >
              Games
            </button>

          </div>

          {/* CTA (desktop) */}
          <div className="hidden md:block">
            <button onClick={() => goToSection("contact")}>
              <Button>Hire Me</Button>
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 py-4 text-gray-300 border-t border-gray-800">

            <button onClick={() => goToSection("about")} className={baseLinkStyle}>
              About
            </button>

            <button onClick={() => goToSection("projects")} className={baseLinkStyle}>
              Projects
            </button>

            <button onClick={() => goToSection("skills")} className={baseLinkStyle}>
              Skills
            </button>

            <button onClick={() => goToSection("contact")} className={baseLinkStyle}>
              Contact
            </button>

            {/* ✅ Games (fixed mobile too) */}
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/games");
              }}
              className={baseLinkStyle}
            >
              Games
            </button>

            {/* CTA */}
            <button
              onClick={() => goToSection("contact")}
              className="mt-2"
            >
              <Button>Hire Me</Button>
            </button>

          </div>
        )}

      </Container>
    </nav>
  );
}