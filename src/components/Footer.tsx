const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-sans">
      <span>© {new Date().getFullYear()} Star Map — Szeretettel készítve.</span>
      <div className="flex gap-6">
        <a href="#" className="hover:text-foreground transition-colors duration-200">GYIK</a>
        <a href="#" className="hover:text-foreground transition-colors duration-200">Szállítás</a>
        <a href="#" className="hover:text-foreground transition-colors duration-200">Kapcsolat</a>
      </div>
    </div>
  </footer>
);

export default Footer;
