import { Container } from "@/components/ui/Container";

const services = [
  {
    icon: "🏠",
    title: "Home & Deliveries",
    body:
      "Wait for the AC tech · Receive deliveries · Supervise contractor visits · Mid-travel home checks · Plant care while you're away.",
  },
  {
    icon: "📬",
    title: "Errands & Pickups",
    body:
      "Pharmacy · Post office · Pickup points · Returns & exchanges · Dry cleaning · Optician · Shoe repair.",
  },
  {
    icon: "🛒",
    title: "Shopping",
    body:
      "Grocery runs · Pre-Shabbat shop · Hardware store · Gift purchase & wrap · Pet supplies.",
  },
  {
    icon: "🏛️",
    title: "Government & Admin",
    body:
      "Misrad Hapnim · Misrad Harishui · Bituach Leumi · Banks · Mas Hachnasa · Notary · Embassies.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Logistics",
    body:
      "School pickup · חוגים runs · Doctor & dentist accompaniment · Birthday gifts · Babysitting bridge.",
  },
  {
    icon: "❤️",
    title: "Parents & Elder Care",
    body:
      "Pharmacy runs for parents · Hospital accompaniment · Tradespeople at their home · Bituach Leumi paperwork.",
  },
  {
    icon: "✈️",
    title: "Travel & Hosting",
    body:
      "Pre-arrival home prep · Pre-Shabbat & chag prep · Guest hosting · Pet drop-off at boarding.",
  },
];

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
            Buy by the task, by the hour, or by the month. Same-day for
            members.
          </p>
        </div>

        <ul className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((s) => (
            <li
              key={s.title}
              className="group bg-white border border-brand-border rounded-[14px] p-6 transition-all duration-200 [@media(hover:hover)]:hover:-translate-y-[3px] [@media(hover:hover)]:hover:border-terracotta [@media(hover:hover)]:hover:shadow-[0_10px_28px_rgba(42,37,32,0.08)]"
            >
              <div className="text-[28px] leading-none" aria-hidden>
                {s.icon}
              </div>
              <h3 className="mt-3 font-serif text-[19px] text-ink leading-snug">
                {s.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.55] text-muted-brand">
                {s.body}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-[16px] text-ink-soft">
          Don&apos;t see it?{" "}
          <strong className="text-terracotta font-semibold">Just ask.</strong>{" "}
          If it&apos;s within reason, we&apos;ll figure it out.
        </p>
      </Container>
    </section>
  );
}
