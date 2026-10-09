import { GraduationCap } from "lucide-react";
import { education } from "../../data/education";
import { SectionWrapper } from "../layout/SectionWrapper";
import { SectionHeading } from "../ui/SectionHeading";

export function EducationSection() { return <SectionWrapper id="education" className="education-section"><div className="section-inner"><SectionHeading eyebrow="Education" title={<>A foundation for <em>lifelong learning.</em></>} /><div className="education-list">{education.map((item) => <article key={item.title} data-reveal><div className="edu-icon"><GraduationCap size={20} /></div><div><h3>{item.title}</h3><p>{item.place}</p></div><span>{item.meta}</span></article>)}</div></div></SectionWrapper>; }
