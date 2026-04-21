import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, HeroSection, AboutSection, ExperienceSection, ProjectsSection, ContactSection, Footer } from "./components";
import { EcompJourney } from "./components/EcompJourney";

const Home = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ecomp" element={<EcompJourney />} />
        </Routes>
      </div>
    </Router>
  );
}