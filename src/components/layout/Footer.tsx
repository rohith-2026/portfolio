import { ArrowUpRight } from "lucide-react";
import { socials } from "../../data/socials";
import { profile } from "../../data/profile";
import { navigation } from "../../data/navigation";

export function Footer() { return <footer className="site-footer"><span>© {new Date().getFullYear()} {profile.displayName}</span><span className="footer-note">Built with curiosity & clean systems</span><div className="footer-links">{navigation.slice(0, 3).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}{socials.map((social) => <a key={social.label} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{social.label}<ArrowUpRight size={13} /></a>)}</div></footer>; }
