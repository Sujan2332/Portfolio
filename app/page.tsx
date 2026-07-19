import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillsSimple from './components/SkillsSimple';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import EcommerceExpertise from './components/EcommerceExpertise';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RevealObserver from './components/RevealObserver';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050508] text-white">
      <RevealObserver />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <SkillsSimple />
        <Experience />
        <Education />
        <Projects />
        <EcommerceExpertise />
        <Contact />
      </main>
      <Footer />
      <LoadingScreen />
    </div>
  );
}
