import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { socials } from "../../data/socials";
const icons = { GitHub: Github, LinkedIn: Linkedin, Instagram, Email: Mail };
export function SocialLinks() { return <div className="social-links">{socials.map((social) => { const Icon = icons[social.label as keyof typeof icons]; return <a key={social.label} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={social.label}><Icon size={17} /></a>; })}</div>; }
