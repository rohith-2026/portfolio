import { useEffect, useState } from "react";
import { ErrorBoundary } from "./ErrorBoundary";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { PageLoader } from "../components/layout/PageLoader";
import { HeroSection } from "../components/hero/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { EducationSection } from "../components/sections/EducationSection";
import { CertificationsSection } from "../components/sections/CertificationsSection";
import { AchievementsSection } from "../components/sections/AchievementsSection";
import { LanguagesSection } from "../components/sections/LanguagesSection";
import { ContactSection } from "../components/sections/ContactSection";
import { setupLenis } from "../animations/lenis";
import { setupScrollAnimations } from "../animations/scrollAnimations";
import { useReducedMotion } from "../hooks/useReducedMotion";

function Portfolio() {
  const [loading, setLoading] = useState(true);
  const reducedMotion = useReducedMotion();
  useEffect(() => { const timer = window.setTimeout(() => setLoading(false), reducedMotion ? 0 : 650); if (reducedMotion) return () => window.clearTimeout(timer); const cleanLenis = setupLenis(); const cleanScroll = setupScrollAnimations(); return () => { window.clearTimeout(timer); cleanLenis(); cleanScroll(); }; }, [reducedMotion]);
  return <><PageLoader visible={loading} /><Navbar /><main><HeroSection /><AboutSection /><SkillsSection /><ProjectsSection /><ExperienceSection /><EducationSection /><CertificationsSection /><AchievementsSection /><LanguagesSection /><ContactSection /></main><Footer /></>;
}

export default function App() { return <ErrorBoundary><Portfolio /></ErrorBoundary>; }
