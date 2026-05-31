type Props = {
  className?: string;
  /** Pixel size. Defaults to 32. */
  size?: number;
  /** Accessible label; renders title element. Leave undefined for decorative use. */
  title?: string;
};

/**
 * Bullseye mark — three concentric terracotta rings with a filled centre dot.
 * Uses currentColor so the wrapper sets the color. Crisp from 16px (favicon)
 * up to large hero sizes.
 */
export function BullseyeMark({ className, size = 32, title }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      className={className}
    >
      {title ? <title>{title}</title> : null}
      <circle cx="16" cy="16" r="13.25" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="16" cy="16" r="9" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="16" cy="16" r="5" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="16" cy="16" r="2" fill="currentColor" />
    </svg>
  );
}
