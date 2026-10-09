import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { ArrowUpRight } from "lucide-react";

type Props = (AnchorHTMLAttributes<HTMLAnchorElement> | ButtonHTMLAttributes<HTMLButtonElement>) & { variant?: "solid" | "ghost" };
export function Button({ variant = "solid", children, ...props }: Props) { const className = `button button-${variant} ${props.className ?? ""}`; if ("href" in props) return <a {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} className={className}>{children}<ArrowUpRight size={16} /></a>; return <button {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} className={className}>{children}</button>; }
