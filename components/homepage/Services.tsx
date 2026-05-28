import { Container } from "@/components/ui/Container";
import { SERVICE_CATEGORIES } from "@/lib/services";
import { ServiceCategoryBlock } from "@/components/homepage/ServiceCategory";

export function Services() {
  return (
    <section id="services" className="bg-cream py-[80px]">
      <Container>
        <div className="text-center max-w-[680px] mx-auto">
          <p className="text-[12px] font-bold tracking-[0.125em] text-terracotta uppercase">
            What we handle
          </p>
          <h2 className="mt-3 font-serif text-[32px] md:text-[38px] leading-[1.1] tracking-[-0.5px] text-ink">
            Seven categories. One number to call.
          </h2>
          <p className="mt-3 text-[16px] md:text-[17px] text-ink-soft leading-[1.5]">
            Tap a category to see the services and prices. Buy by the task, by
            the hour, or by the month. Same-day for members.
          </p>
        </div>

        <div className="mt-10 md:mt-12 mx-auto max-w-[820px] space-y-3 md:space-y-4">
          {SERVICE_CATEGORIES.map((category, i) => (
            <ServiceCategoryBlock
              key={category.id}
              category={category}
              mode="collapsible"
              defaultOpen={i === 0}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="/services"
            className="inline-flex items-center gap-1 text-terracotta font-medium hover:text-terracotta-dark min-h-[44px] px-2"
          >
            See the full menu →
          </a>
        </div>

        <p className="mt-6 text-center text-[16px] text-ink-soft">
          Don&apos;t see it?{" "}
          <strong className="text-terracotta font-semibold">Just ask.</strong>{" "}
          If it&apos;s within reason, we&apos;ll figure it out.
        </p>
      </Container>
    </section>
  );
}
