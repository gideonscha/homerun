import { Container } from "@/components/ui/Container";
import { SERVICE_CATEGORIES } from "@/lib/services";
import { ServiceCategoryBlock } from "@/components/homepage/ServiceCategory";
import { MenuHeader } from "@/components/services/MenuHeader";

export function Services() {
  return (
    <section id="services" className="bg-cream py-[80px]">
      <Container>
        <MenuHeader as="h2" interactive />

        <div className="mt-10 md:mt-12 mx-auto max-w-[820px] space-y-3 md:space-y-4">
          {SERVICE_CATEGORIES.map((category, i) => (
            <ServiceCategoryBlock
              key={category.id}
              category={category}
              mode="collapsible"
              defaultOpen={i === 0}
              exclusiveGroup="homepage-services"
            />
          ))}
        </div>

        <p className="mt-10 text-center text-[16px] text-ink-soft">
          Don&apos;t see it?{" "}
          <strong className="text-terracotta font-semibold">Just ask.</strong>{" "}
          If it&apos;s within reason, we&apos;ll figure it out.
        </p>
      </Container>
    </section>
  );
}
