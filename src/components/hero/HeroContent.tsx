import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "../../data/profile";
import { assetUrl } from "../../lib/assets";
import { SocialLinks } from "../ui/SocialLinks";

export function HeroContent() {
  return (
    <div className="hero-content" data-reveal>
      <div className="hero-portrait">
        <img src={profile.image} alt="Profile photo of Anumandla Rohith" />
      </div>
      <p className="eyebrow">
        <span className="status-dot" /> AI/ML Developer · Python Backend Developer
      </p>
      <h1>
        Building useful intelligence <em>with a human touch.</em>
      </h1>
      <p className="hero-copy">{profile.intro}</p>
      <div className="hero-actions">
        <a className="button button-solid" href="#work">
          Explore my work <ArrowUpRight size={16} />
        </a>
        <a className="text-link" href={assetUrl("documents/rohith-resume.pdf")} download>
          Updated resume <ArrowDown size={15} />
        </a>
        <a className="text-link" href={assetUrl("documents/rohith-old-resume.pdf")} download>
          Previous resume <ArrowDown size={15} />
        </a>
      </div>
      <div className="hero-meta">
        <span>
          <MapPin size={14} /> {profile.location}
        </span>
        <SocialLinks />
      </div>
    </div>
  );
}
