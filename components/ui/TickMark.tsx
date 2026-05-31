type Props = {
  className?: string;
  /** Pixel size. Defaults to 32. */
  size?: number;
  /** Accessible label; renders <title>. Leave undefined for decorative use. */
  title?: string;
};

/**
 * Brand mark — filled terracotta disc with a cream tick. The tick path
 * (M14 24.5 L21.5 32 L34 16 in viewBox 0 0 48 48) is the same shape reused
 * for the "handled" markers on the hero diary, so logo and hero match.
 */
export function TickMark({ className, size = 32, title }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      className={className}
    >
      {title ? <title>{title}</title> : null}
      <circle cx="24" cy="24" r="22" fill="var(--color-terracotta)" />
      <path
        d="M14 24.5 L21.5 32 L34 16"
        fill="none"
        stroke="var(--color-cream)"
        strokeWidth="4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
