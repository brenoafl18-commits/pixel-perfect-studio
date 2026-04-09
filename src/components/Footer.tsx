const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground px-4 md:px-8 py-8">
      {/* Top section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold">©2026</h2>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase leading-tight">
            LET'S BUILD SOMETHING<br />
            THAT MAKES A DIFFERENCE.
          </h2>
        </div>
      </div>

      {/* Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div />
        <div className="text-lg">
          <p>São Paulo, SP</p>
          <p>Brazil</p>
        </div>
      </div>

      {/* Bottom section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-lg hover:opacity-70 transition-opacity"
          >
            Linkedin
          </a>
          <a
            href="https://www.instagram.com/localcreativebr/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-lg hover:opacity-70 transition-opacity"
          >
            Instagram
          </a>
          <a
            href="mailto:hello@localcreative.com"
            className="block text-lg hover:opacity-70 transition-opacity"
          >
            hello@localcreative.com
          </a>
        </div>
        <div className="space-y-4">
          <p className="text-lg font-medium">LocalCreative©</p>
          <p className="text-lg uppercase tracking-wide">WORLDWIDE BRAND DESIGN STUDIO</p>
          <div className="text-xs text-primary-foreground/60">
            <p>TUDO É DESIGN, NÓS PROJETAMOS TUDO</p>
            <p>2026 © TODOS OS DIREITOS RESERVADOS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
