import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import FloatingWhatsAppButton from "./components/ui/FloatingWhatsAppButton";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ServicesSection from "./components/sections/ServicesSection";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}

export default App;