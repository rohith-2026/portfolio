import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "../../data/navigation";
import { profile } from "../../data/profile";
import { assetUrl } from "../../lib/assets";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-nav">
      <a className="brand" href="#top" aria-label="Anumandla Rohith home">
        <span className="brand-mark">R</span>
        <span>{profile.displayName}</span>
      </a>
      <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="nav-cta" href={assetUrl("documents/rohith-resume.pdf")} download>
          Updated resume <span>↗</span>
        </a>
        <a className="nav-secondary" href={assetUrl("documents/rohith-old-resume.pdf")} download>
          Previous resume
        </a>
      </nav>
      <button
        className="menu-button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  );
}
