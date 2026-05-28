import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "white" | "white-outline";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 min-h-[44px] whitespace-nowrap text-center select-none";

const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-[15px]",
  lg: "px-6 py-4 text-[16px]",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-terracotta text-white hover:bg-terracotta-dark shadow-[0_4px_14px_rgba(199,97,61,0.25)]",
  outline:
    "border border-terracotta text-terracotta bg-transparent hover:bg-terracotta hover:text-white",
  white: "bg-white text-terracotta hover:bg-cream",
  "white-outline":
    "border border-white/80 text-white bg-transparent hover:bg-white hover:text-terracotta",
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <a
      {...rest}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
