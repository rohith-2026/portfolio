import type { Project } from "../../types/portfolio";
export function ProjectDetails({ project }: { project: Project }) { return <div className="project-details"><h4>{project.shortTitle}</h4><ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div>; }
