import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

export function SectionWrapper({ id, children, className = "" }: { id: string; children: ReactNode; className?: string }) { return <section id={id} className={cn("section", className)}>{children}</section>; }
