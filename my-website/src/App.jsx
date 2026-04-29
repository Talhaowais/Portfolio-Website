import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />

      <main className="pt-16">
        <Hero />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}