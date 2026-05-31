import type { ServiceCategory as Category } from "@/lib/services";
import { serviceBookingLink } from "@/lib/services";

type Props = {
  category: Category;
  /** "collapsible" = accordion with summary (homepage), "open" = always-expanded (full /services page) */
  mode: "collapsible" | "open";
  /** Only used when mode = "collapsible" */
  defaultOpen?: boolean;
  /**
   * When set, this details element joins an exclusive group — only one
   * details with the same name can be open at a time. Browser-native; no JS.
   */
  exclusiveGroup?: string;
};

function ServiceRow({
  service,
}: {
  service: Category["services"][number];
}) {
  return (
    <li className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-3 md:gap-6 py-5 border-b border-brand-border last:border-b-0">
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h4 className="text-[16px] md:text-[16.5px] font-medium text-ink leading-snug">
            {service.name}
          </h4>
          <span className="font-serif text-[16px] md:text-[17px] text-terracotta whitespace-nowrap">
            {service.price}
          </span>
        </div>
        <p className="mt-1.5 text-[14px] leading-[1.55] text-muted-brand">
          {service.description}
        </p>
      </div>

      <div className="md:self-center">
        <a
          href={serviceBookingLink(service)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-full bg-terracotta text-white text-[14px] font-medium px-4 py-2.5 min-h-[44px] hover:bg-terracotta-dark transition-colors whitespace-nowrap"
        >
          Book on WhatsApp
        </a>
      </div>
    </li>
  );
}

export function ServiceCategoryBlock({
  category,
  mode,
  defaultOpen = false,
  exclusiveGroup,
}: Props) {
  const services = (
    <ul className="px-5 md:px-6 pb-2">
      {category.services.map((s) => (
        <ServiceRow key={s.name} service={s} />
      ))}
    </ul>
  );

  const Icon = category.icon;

  if (mode === "open") {
    return (
      <section
        id={category.id}
        className="bg-white border border-brand-border rounded-[14px] overflow-hidden scroll-mt-[80px]"
      >
        <header className="flex items-center gap-3 px-5 md:px-6 pt-6 pb-4 border-b border-brand-border">
          <Icon
            className="text-terracotta shrink-0"
            size={24}
            strokeWidth={1.75}
            aria-hidden
          />
          <h3 className="font-serif text-[20px] md:text-[22px] text-ink">
            {category.title}
          </h3>
          <span className="ml-auto text-[12.5px] text-muted-brand">
            {category.services.length} services
          </span>
        </header>
        {services}
      </section>
    );
  }

  return (
    <details
      id={category.id}
      open={defaultOpen}
      name={exclusiveGroup}
      className="group bg-white border border-brand-border rounded-[14px] overflow-hidden scroll-mt-[80px] transition-colors [@media(hover:hover)]:hover:border-terracotta/60"
    >
      <summary className="flex items-center gap-3 px-5 md:px-6 py-5 min-h-[60px] cursor-pointer list-none">
        <Icon
          className="text-terracotta shrink-0"
          size={24}
          strokeWidth={1.75}
          aria-hidden
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-[19px] md:text-[20px] text-ink leading-snug">
            {category.title}
          </h3>
          <p className="text-[12.5px] text-muted-brand mt-0.5">
            {category.services.length} services
          </p>
        </div>
        <span
          className="faq-toggle shrink-0 text-terracotta text-[24px] leading-none transition-transform duration-200"
          aria-hidden
        >
          +
        </span>
      </summary>
      <div className="border-t border-brand-border">{services}</div>
    </details>
  );
}
