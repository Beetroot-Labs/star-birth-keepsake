import starMapHero from "@/assets/star-map-hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-accent animate-twinkle"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${5 + Math.random() * 90}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text side */}
          <div className="order-2 lg:order-1 space-y-8">
            <p
              className="text-sm font-sans font-semibold tracking-[0.2em] uppercase text-accent opacity-0 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Az éjszaka, amikor megérkezett
            </p>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-serif font-semibold leading-[0.95] tracking-tight text-foreground opacity-0 animate-fade-up text-balance"
              style={{ animationDelay: "0.25s" }}
            >
              Örökítsd meg az eget
              <br />
              <span className="italic font-normal text-accent">az első éjszakájáról</span>
            </h1>
            <p
              className="text-lg font-sans text-muted-foreground max-w-md leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              Kézzel készített, hatszögletű fa tábla, lézerrel gravírozott
              csillagtérképpel — pontosan arról az éjszakáról, amikor a babád
              megszületett. Egy emlék, ami örökké megmarad.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.55s" }}
            >
              <a
                href="#configure"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-sans font-medium text-sm tracking-wide rounded-lg shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-shadow duration-300 active:scale-[0.97] transform"
              >
                Készítsd el a sajátod
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground font-sans font-medium text-sm tracking-wide rounded-lg hover:bg-secondary transition-colors duration-300 active:scale-[0.97] transform"
              >
                Hogyan működik
              </a>
            </div>
          </div>

          {/* Image side */}
          <div
            className="order-1 lg:order-2 flex justify-center opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-accent/5 rounded-full blur-3xl" />
              <img
                src={starMapHero}
                alt="Hatszögletű fa csillagtérkép csillagképekkel gravírozva"
                className="relative w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl shadow-primary/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
