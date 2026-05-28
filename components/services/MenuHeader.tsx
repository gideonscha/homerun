import { SERVICE_CATEGORIES } from "@/lib/services";
import { CategoryPills } from "./CategoryPills";

const totalServices = SERVICE_CATEGORIES.reduce(
  (n, c) => n + c.services.length,
  0,
);

type Props = {
  /** "h1" on the /services page, "h2" on the homepage. */
  as?: "h1" | "h2";
  /** Whether pill clicks should open the target <details> (homepage only). */
  interactive?: boolean;
};

export function MenuHeader({ as = "h2", interactive = false }: Props) {
  const Heading = as;
  const headingSizes =
    as === "h1"
      ? "text-[34px] md:text-[48px]"
      : "text-[32px] md:text-[42px]";

  return (
    <div className="text-center max-w-[720px] mx-auto">
      <p className="text-[12px] font-bold tracking-[0.125em] text-terracotta uppercase">
        The full menu
      </p>
      <Heading
        className={`mt-3 font-serif font-semibold ${headingSizes} leading-[1.05] tracking-[-0.5px] text-ink`}
      >
        Everything we do. Every price.
      </Heading>
      <p className="mt-5 text-[16px] md:text-[18px] leading-[1.55] text-ink-soft">
        {totalServices} services across {SERVICE_CATEGORIES.length}{" "}
        categories. Tap{" "}
        <strong className="text-terracotta">Book on WhatsApp</strong> next to
        anything to message Merle with that exact request pre-filled — she
        replies within the hour.
      </p>
      <CategoryPills interactive={interactive} />
    </div>
  );
}
