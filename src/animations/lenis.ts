import Lenis from "lenis";
import { ScrollTrigger } from "./gsapConfig";

export function setupLenis() { const lenis = new Lenis({ duration: 1.15, smoothWheel: true }); let rafId = 0; const raf = (time: number) => { lenis.raf(time); ScrollTrigger.update(); rafId = requestAnimationFrame(raf); }; rafId = requestAnimationFrame(raf); return () => { cancelAnimationFrame(rafId); lenis.destroy(); }; }
