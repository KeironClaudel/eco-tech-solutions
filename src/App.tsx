import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ServicesSection from "./components/sections/ServicesSection";
import AboutSection from "./components/sections/AboutSection";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
      </main>
    </>
  );
}

export default App;