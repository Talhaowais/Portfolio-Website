import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-gray-800">
      <Container>
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <h1 className="font-bold text-lg">
            Talha.dev
          </h1>

          {/* Links */}
          <div className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button>Hire Me</Button>
          </div>

        </div>
      </Container>
    </nav>
  );
}