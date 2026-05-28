import { Container } from "@/components/ui/Container";

export function ProofBar() {
  return (
    <section className="bg-ink text-cream py-[22px]">
      <Container>
        <p className="text-center text-[14.5px] md:text-[15.5px] leading-[1.5]">
          Serving busy families across{" "}
          <strong className="font-semibold text-terracotta">
            Ra&apos;anana · Herzliya · Kfar Saba · Hod HaSharon
          </strong>
        </p>
      </Container>
    </section>
  );
}
