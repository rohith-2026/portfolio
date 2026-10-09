import { Award } from "lucide-react";
import { certifications } from "../../data/certifications";
import { assetUrl } from "../../lib/assets";
import { SectionWrapper } from "../layout/SectionWrapper";
import { SectionHeading } from "../ui/SectionHeading";

export function CertificationsSection() {
  return (
    <SectionWrapper id="certifications" className="soft-section">
      <div className="section-inner narrow-section">
        <SectionHeading
          eyebrow="Certificates & learning"
          title={
            <>
              Proof of a <em>curious mind.</em>
            </>
          }
        />
        <div className="cert-list">
          {certifications.map((item, index) => (
            <div key={item} data-reveal>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <Award size={17} />
              <p>{item}</p>
            </div>
          ))}
        </div>
        <a
          className="button button-ghost inline-button"
          href={assetUrl("documents/rohith-certificates.pdf")}
          target="_blank"
          rel="noreferrer"
        >
          View certificate bundle
        </a>
      </div>
    </SectionWrapper>
  );
}
