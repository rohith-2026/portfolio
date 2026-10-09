import { ArrowUpRight } from "lucide-react";
import { experience } from "../../data/experience";
import { SectionWrapper } from "../layout/SectionWrapper";
import { SectionHeading } from "../ui/SectionHeading";

export function ExperienceSection() { return <SectionWrapper id="experience" className="soft-section"><div className="section-inner split-section"><SectionHeading eyebrow="Experience" title={<>Learning by <em>doing the work.</em></>} copy="Early-career roles and simulations that shaped how I approach a problem." /><div className="timeline">{experience.map((item) => <article className="timeline-item" key={item.role}><div className="timeline-dot" /><div className="timeline-head"><div><h3>{item.role}</h3><p>{item.organization} <span>·</span> {item.mode}</p></div><span className="timeline-period">{item.period}</span></div><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><a href="#contact" className="text-link">Say hello <ArrowUpRight size={14} /></a></article>)}</div></div></SectionWrapper>; }
