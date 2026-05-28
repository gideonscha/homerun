import { Container } from "@/components/ui/Container";

export function About() {
  return (
    <section id="about" className="bg-cream-darker py-[80px]">
      <Container>
        <div className="mx-auto max-w-[960px] grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 md:gap-12 items-center">
          <div
            className="aspect-square w-full max-w-[320px] mx-auto rounded-2xl shadow-[0_18px_40px_rgba(42,37,32,0.12)] flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #d9c5a8, #c7a888)",
            }}
            aria-label="Photo of Merle (placeholder)"
            role="img"
          >
            <span
              className="font-serif text-white text-[72px] leading-none select-none"
              aria-hidden
            >
              M
            </span>
          </div>

          <div className="text-center md:text-left">
            <p className="text-[12px] font-bold tracking-[0.125em] text-terracotta uppercase">
              Meet Merle
            </p>
            <h2 className="mt-3 font-serif text-[28px] md:text-[34px] leading-[1.15] tracking-[-0.5px] text-ink">
              Local. Lives this herself.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.65] text-ink-soft">
              Merle started Home Run because she knows what it&apos;s like to
              be the one waiting for the AC guy at 8am while trying to make a
              9am meeting. To miss the post office because work ran late. To
              dread Misrad Harishui weeks in advance.
            </p>
            <p className="mt-4 text-[16px] leading-[1.65] text-ink-soft">
              She&apos;s based in the Sharon, fully insured, and every job
              runs through her personally.
            </p>

            <blockquote className="mt-6 border-l-[3px] border-terracotta pl-4 italic font-serif text-[18px] md:text-[20px] leading-[1.5] text-terracotta">
              &ldquo;I started Home Run because I needed it myself. Now I run
              it for everyone else who does too.&rdquo;
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
}
