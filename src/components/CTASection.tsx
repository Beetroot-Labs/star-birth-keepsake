import { useScrollReveal } from "./useScrollReveal";

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="configure" ref={ref} className="py-24 lg:py-32 bg-primary">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <div
          className={`max-w-2xl mx-auto space-y-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold leading-[1.05] tracking-tight text-primary-foreground text-balance">
            Their stars are waiting
          </h2>
          <p className="text-primary-foreground/70 font-sans text-lg leading-relaxed max-w-lg mx-auto">
            It takes less than two minutes to configure. Choose the date, the
            place, and we'll do the rest.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-10 py-4 bg-accent text-accent-foreground font-sans font-semibold text-sm tracking-wide rounded-lg shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-shadow duration-300 active:scale-[0.97] transform"
          >
            Open the configurator
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
