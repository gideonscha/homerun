"use client";

import { SERVICE_CATEGORIES } from "@/lib/services";

type Props = {
  /**
   * When true, clicking a pill opens the target <details> (collapsible mode
   * on the homepage) before scrolling. When false (the /services page), the
   * pill is a plain anchor — categories there are always open.
   */
  interactive?: boolean;
};

export function CategoryPills({ interactive = false }: Props) {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (!interactive) return;
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();

    if (target.tagName === "DETAILS") {
      (target as HTMLDetailsElement).open = true;
    }
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    if (history.replaceState) {
      history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <nav
      aria-label="Service categories"
      className="mt-8 flex flex-wrap justify-center gap-2"
    >
      {SERVICE_CATEGORIES.map((c) => (
        <a
          key={c.id}
          href={`#${c.id}`}
          onClick={(e) => onClick(e, c.id)}
          className="inline-flex items-center gap-1.5 rounded-full bg-white border border-brand-border px-3.5 py-2 text-[13px] text-ink-soft hover:border-terracotta hover:text-terracotta transition-colors min-h-[36px]"
        >
          <span aria-hidden>{c.icon}</span>
          <span>{c.title}</span>
        </a>
      ))}
    </nav>
  );
}
