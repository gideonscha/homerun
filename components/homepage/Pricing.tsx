import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ctaLinks } from "@/lib/whatsapp";

type Tier = {
  name: string;
  price: string;
  priceSuffix?: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  ctaVariant: "primary" | "outline";
  featured?: boolean;
  ctaExternal?: boolean;
};

const tiers: Tier[] = [
  {
    name: "By the task",
    price: "from ₪80",
    body:
      "Fixed-price named services. No commitment. Best for trying us with one thing — pharmacy run, delivery wait, Misrad Harishui.",
    ctaLabel: "See the full menu →",
    ctaHref: "#services",
    ctaVariant: "outline",
  },
  {
    name: "By the hour",
    price: "₪200",
    priceSuffix: "/hr",
    body:
      "Maximum flexibility. 2-hour minimum, same-day or scheduled. For anything not on the menu, or anyone who'd rather not pick.",
    ctaLabel: "Get started",
    ctaHref: ctaLinks.hourly,
    ctaVariant: "primary",
    featured: true,
    ctaExternal: true,
  },
  {
    name: "By the month",
    price: "from ₪1,700",
    priceSuffix: "/mo",
    body:
      "Helper (10 hrs) or Manager (30 hrs). Priority response, dedicated time, a real relationship. Best for recurring needs.",
    ctaLabel: "Ask about plans",
    ctaHref: ctaLinks.monthly,
    ctaVariant: "outline",
    ctaExternal: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-cream-darker py-[80px]">
      <Container>
        <div className="text-center max-w-[680px] mx-auto">
          <p className="text-[12px] font-bold tracking-[0.125em] text-terracotta uppercase">
            Pricing
          </p>
          <h2 className="mt-3 font-serif text-[32px] md:text-[38px] leading-[1.1] tracking-[-0.5px] text-ink">
            Three ways to work with us.
          </h2>
          <p className="mt-3 text-[16px] md:text-[17px] text-ink-soft leading-[1.5]">
            Try us with one task. Stay for the monthly.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {tiers.map((t) => (
            <li key={t.name} className="relative flex">
              {t.featured ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-terracotta px-3 py-1 text-[10.5px] font-bold tracking-[0.125em] uppercase text-white">
                  Most flexible
                </span>
              ) : null}

              <div
                className={`flex w-full flex-col bg-white rounded-[14px] p-7 text-center ${
                  t.featured
                    ? "border-2 border-terracotta shadow-[0_18px_40px_rgba(199,97,61,0.16)]"
                    : "border border-brand-border"
                }`}
              >
                <h3 className="font-serif text-[20px] text-ink">{t.name}</h3>
                <p className="mt-4 font-serif text-terracotta">
                  <span className="text-[30px] font-semibold">{t.price}</span>
                  {t.priceSuffix ? (
                    <span className="text-[16px] font-normal">
                      {t.priceSuffix}
                    </span>
                  ) : null}
                </p>
                <p className="mt-4 text-[14.5px] leading-[1.55] text-ink-soft min-h-[60px]">
                  {t.body}
                </p>

                <div className="mt-6 flex">
                  <Button
                    href={t.ctaHref}
                    variant={t.ctaVariant}
                    size="md"
                    className="w-full"
                    {...(t.ctaExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {t.ctaLabel}
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
