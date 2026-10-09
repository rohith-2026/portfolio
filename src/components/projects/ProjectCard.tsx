import { ArrowUpRight, Github, Plus } from "lucide-react";
import { useState } from "react";
import type { Project } from "../../types/portfolio";
import { Badge } from "../ui/Badge";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const meta =
    project.period && project.metric
      ? `${project.period} · ${project.metric}`
      : (project.period ?? project.metric);

  return (
    <article className={`project-card project-${project.accent}`} data-reveal>
      <div className="project-topline">
        <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
        <span className="project-metric">{meta}</span>
      </div>
      <div className="project-visual">
        {project.image ? (
          <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
        ) : (
          <>
            <span className="visual-grid" />
            <span className="visual-symbol">✦</span>
          </>
        )}
      </div>
      <div className="project-body">
        <div className="tag-row">
          {project.stack.slice(0, 3).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {expanded && (
          <ul className="project-details">
            {project.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        )}
        <div className="project-actions">
          <button
            className="project-link"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
          >
            {expanded ? "Hide details" : "View details"}
            <span>
              <Plus size={15} className={expanded ? "rotated" : ""} />
            </span>
          </button>
          {project.github && (
            <a
              className="project-link project-github"
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title} on GitHub`}
            >
              <Github size={14} /> GitHub <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
