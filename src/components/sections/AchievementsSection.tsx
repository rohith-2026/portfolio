import { Trophy } from "lucide-react";
import { SectionWrapper } from "../layout/SectionWrapper";
import { SectionHeading } from "../ui/SectionHeading";

export function AchievementsSection() { return <SectionWrapper id="achievements" className="achievements-section"><div className="section-inner achievement-layout"><SectionHeading eyebrow="Beyond the resume" title={<>Always looking for the <em>next interesting problem.</em></>} copy="I have participated in Smart India Hackathon, competitive hackathons, and ideathons at HITAM, CMR, and Vignan." /><div className="achievement-card" data-reveal><Trophy size={24} /><h3>Build. Test. Learn.</h3><p>My favorite kind of progress is the kind that leaves behind a working prototype and a better question.</p><a className="text-link" href="#contact">Start a conversation ↗</a></div></div></SectionWrapper>; }
