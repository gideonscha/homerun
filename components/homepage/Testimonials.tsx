import { Container } from "@/components/ui/Container";

const items = [
  {
    quote:
      "We use Home Run for the Misrad Harishui queues alone — that's two hours back every renewal. The pharmacy runs for my mom in Kfar Saba are the bonus.",
    name: "Sarah B.",
    city: "Ra'anana",
  },
  {
    quote:
      "Merle waited for our AC technician for four hours when he got delayed. We were in Tel Aviv and she just sent updates. Worth every shekel.",
    name: "David M.",
    city: "Herzliya Pituach",
  },
  {
    quote:
      "The pre-Pesach prep this year was a game changer. I came home from work to a stocked fridge, flowers on the table, the silver polished. ₪400 well spent.",
    name: "Rachel K.",
    city: "Kfar Saba",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-terracotta text-[15px]" aria-label="5 out of 5 stars">
      {"★★★★★".split("").map((s, i) => (
        <span key={i} aria-hidden>{s}</span>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-cream py-[80px]">
      <Container>
        <div className="text-center max-w-[680px] mx-auto">
          <p className="text-[12px] font-bold tracking-[0.125em] text-terracotta uppercase">
            What families are saying
          </p>
          <h2 className="mt-3 font-serif text-[32px] md:text-[38px] leading-[1.1] tracking-[-0.5px] text-ink">
            Real customers. Real weeks. Real time back.
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((t) => (
            <li
              key={t.name}
              className="bg-white border border-brand-border rounded-[14px] p-[26px] flex flex-col"
            >
              <Stars />
              <blockquote className="mt-4 font-serif italic text-[17px] leading-[1.55] text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <cite className="mt-5 not-italic text-[13.5px] text-muted-brand">
                <strong className="font-semibold text-ink-soft">
                  {t.name}
                </strong>{" "}
                · {t.city}
              </cite>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-[13px] italic text-muted-brand">
          Illustrative — being replaced with real customer reviews as we go.
        </p>
      </Container>
    </section>
  );
}
