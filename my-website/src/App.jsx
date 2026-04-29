import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />

      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}