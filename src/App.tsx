import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import AboutSection from "./components/sections/AboutSection";
import BrandsSection from "./components/sections/BrandsSection";
import ContactSection from "./components/sections/ContactSection";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ServicesSection from "./components/sections/ServicesSection";
import FloatingWhatsAppButton from "./components/ui/FloatingWhatsAppButton";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <div className="section-divider" />
        <ServicesSection />
        <div className="section-divider" />
        <AboutSection />
        <div className="section-divider" />
        <BrandsSection />
        <div className="section-divider" />
        <ProjectsSection />
        <div className="section-divider" />
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsAppButton />
      <Analytics />
    </>
  );
}

export default App;
