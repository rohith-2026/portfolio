import { skillGroups } from "../../data/skills";
import { SectionWrapper } from "../layout/SectionWrapper";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";

export function SkillsSection() { return <SectionWrapper id="skills" className="soft-section"><div className="section-inner"><SectionHeading eyebrow="The toolkit" title={<>Tools for turning <em>questions into systems.</em></>} /><div className="skills-grid">{skillGroups.map((group, index) => <div className={`skill-card skill-${group.tone}`} key={group.label} data-reveal><span className="skill-number">0{index + 1}</span><h3>{group.label}</h3><div className="tag-row">{group.items.map((item) => <Badge key={item} tone={group.tone}>{item}</Badge>)}</div></div>)}</div></div></SectionWrapper>; }
