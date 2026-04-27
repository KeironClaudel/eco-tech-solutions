import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <ServicesSection />
      </main>
    </>
  );
}

export default App;