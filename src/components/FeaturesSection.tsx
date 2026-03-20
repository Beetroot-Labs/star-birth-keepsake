import { useScrollReveal } from "./useScrollReveal";
import starMapDetail from "@/assets/star-map-detail.png";
import { Star, MapPin, Hexagon } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "Csillagászatilag pontos",
    description:
      "Kiszámítjuk minden látható csillag pontos helyzetét a születés pillanatában és helyszínén.",
  },
  {
    icon: Hexagon,
    title: "Tömör tölgyfa hatszög",
    description:
      "Minden tábla fenntartható európai tölgyből készül, kézzel csiszolva és természetes olajjal kezelve.",
  },
  {
    icon: MapPin,
    title: "Teljesen személyre szabható",
    description:
      "Add meg a baba nevét, születési dátumát, időpontját és koordinátáit. Minden részlet lézerrel gravírozva.",
  },
];

const FeaturesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <img
              src={starMapDetail}
              alt="Tölgyfa csillagtérkép lézerrel gravírozott részlete"
              className="rounded-2xl shadow-xl shadow-primary/5 w-full max-w-lg"
            />
          </div>

          {/* Features list */}
          <div className="space-y-12">
            <div
              className={`space-y-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "0.1s", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              <p className="text-sm font-sans font-semibold tracking-[0.2em] uppercase text-accent">
                Gondosan készítve
              </p>
              <h2 className="text-4xl lg:text-5xl font-serif font-semibold leading-[1.05] tracking-tight text-foreground text-balance">
                Több mint ajándék — egy darab a világegyetemből
              </h2>
            </div>

            <div className="space-y-8">
              {features.map((feature, i) => (
                <div
                  key={feature.title}
                  className={`flex gap-5 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{
                    transitionDelay: `${0.2 + i * 0.1}s`,
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
