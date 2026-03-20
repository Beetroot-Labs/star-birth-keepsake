import { useScrollReveal } from "./useScrollReveal";
import starMapLifestyle from "@/assets/star-map-lifestyle.png";

const LifestyleSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <div
              className={`space-y-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              <p className="text-sm font-sans font-semibold tracking-[0.2em] uppercase text-accent">
                Ajándék, amit megőriznek
              </p>
              <h2 className="text-4xl lg:text-5xl font-serif font-semibold leading-[1.05] tracking-tight text-foreground text-balance">
                A tökéletes „Isten hozott a világon" ajándék
              </h2>
            </div>
            <p
              className={`text-muted-foreground font-sans leading-relaxed max-w-md transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "0.15s", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              Minden baba egyedi égbolt alatt érkezik. Ez a csillagtérkép azt a
              megismételhetetlen pillanatot örökíti meg — a csillagképeket, a
              bolygókat, a pontos égi elrendezést, amely az első lélegzetvételét
              kísérte. A babaszobában kiállítva beszélgetések kiindulópontja,
              családi ereklye és mindennapi emlékeztető arról a különleges
              éjszakáról.
            </p>
            <div
              className={`pt-2 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "0.25s", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              <a
                href="#configure"
                className="inline-flex items-center gap-2 text-accent font-sans font-medium text-sm tracking-wide hover:gap-3 transition-all duration-300"
              >
                Kezdd el a tervezést
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
            }`}
            style={{ transitionDelay: "0.1s", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <img
              src={starMapLifestyle}
              alt="Csillagtérkép egy babaszoba polcán babakellékek között"
              className="rounded-2xl shadow-xl shadow-primary/5 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
