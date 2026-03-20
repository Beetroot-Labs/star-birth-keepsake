import { useScrollReveal } from "./useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Add meg a születési adatokat",
    description: "Dátum, időpont és helyszín — mi kiszámítjuk a pontos égboltot.",
  },
  {
    number: "02",
    title: "Tervezd meg a táblát",
    description: "Válaszd ki a gravírozás szövegét, betűtípusát és elrendezését.",
  },
  {
    number: "03",
    title: "Elkészítjük és kiszállítjuk",
    description: "Kézzel készítve a műhelyünkben, prémium ajándékdobozban szállítva.",
  },
];

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="how-it-works" ref={ref} className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div
          className={`text-center max-w-xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <p className="text-sm font-sans font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            Egyszerű és varázslatos
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold leading-[1.05] tracking-tight text-foreground text-balance">
            Három lépés a csillagokig
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`text-center space-y-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{
                transitionDelay: `${0.15 + i * 0.12}s`,
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <span className="inline-block text-5xl font-serif font-bold text-accent/30">
                {step.number}
              </span>
              <h3 className="text-xl font-serif font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
