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
                A gift they'll treasure
              </p>
              <h2 className="text-4xl lg:text-5xl font-serif font-semibold leading-[1.05] tracking-tight text-foreground text-balance">
                The perfect welcome-to-the-world gift
              </h2>
            </div>
            <p
              className={`text-muted-foreground font-sans leading-relaxed max-w-md transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "0.15s", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              Every baby arrives under a unique sky. This star map captures that
              unrepeatable moment — the constellations, the planets, the exact
              celestial arrangement that witnessed their first breath. Displayed
              in the nursery, it becomes a conversation piece, a family
              heirloom, and a daily reminder of that extraordinary night.
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
                Start configuring yours
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
              alt="Star map displayed on a nursery shelf alongside baby items"
              className="rounded-2xl shadow-xl shadow-primary/5 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
