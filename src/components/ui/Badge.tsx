export function Badge({ children, tone = "lavender" }: { children: string; tone?: string }) { return <span className={`badge badge-${tone}`}>{children}</span>; }
