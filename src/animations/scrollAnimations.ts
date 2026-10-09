import { gsap, ScrollTrigger } from "./gsapConfig";

export function setupScrollAnimations() {
  const context = gsap.context(() => {
    const items = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    items.forEach((item) => { const animation = gsap.fromTo(item, { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, ease: "power3.out", paused: true }); ScrollTrigger.create({ trigger: item, start: "top 88%", animation, toggleActions: "play none none reverse" }); });
  });
  return () => context.revert();
}
