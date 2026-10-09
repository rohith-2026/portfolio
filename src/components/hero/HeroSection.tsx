import { SectionWrapper } from "../layout/SectionWrapper";
import { HeroContent } from "./HeroContent";
import { SceneCanvas } from "../three/SceneCanvas";

export function HeroSection() { return <SectionWrapper id="top" className="hero-section"><div className="hero-grid"><HeroContent /><SceneCanvas /></div><div className="scroll-cue"><span /> Scroll to explore</div></SectionWrapper>; }
