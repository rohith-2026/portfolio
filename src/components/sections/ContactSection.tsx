import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { profile } from "../../data/profile";
import { SectionWrapper } from "../layout/SectionWrapper";
import { SocialLinks } from "../ui/SocialLinks";

export function ContactSection() { return <SectionWrapper id="contact" className="contact-section"><div className="section-inner contact-inner"><div data-reveal><p className="eyebrow">Have a good question?</p><h2>Let’s make something <em>useful.</em></h2><p className="contact-copy">Whether you are building an AI product, exploring a data problem, or just want to say hello — I would love to hear from you.</p><a className="button button-solid" href={`mailto:${profile.email}`}>Send me an email <ArrowUpRight size={17} /></a></div><div className="contact-aside" data-reveal><div><Mail size={17} /><a href={`mailto:${profile.email}`}>{profile.email}</a></div><div><MapPin size={17} /><span>{profile.location}</span></div><SocialLinks /></div></div></SectionWrapper>; }
