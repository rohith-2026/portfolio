import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";
import { SectionWrapper } from "../layout/SectionWrapper";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "../projects/ProjectCard";

export function ProjectsSection() { return <SectionWrapper id="work" className="projects-section"><div className="section-inner"><div className="section-heading-row"><SectionHeading eyebrow="Selected work" title={<>Small experiments, <em>real intent.</em></>} copy="A few projects where data, interfaces, and a little persistence came together." /><a className="text-link" href="https://github.com/rohith-2026" target="_blank" rel="noreferrer">GitHub profile <ArrowUpRight size={15} /></a></div><div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div></div></SectionWrapper>; }
