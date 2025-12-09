export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance">
            Olá, sou <span className="text-primary">José Fernando</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Desenvolvedor Front End apaixonado por criar experiências web
            inovadoras
          </p>
        </div>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Transformo ideias em código limpo e funcional. <br />
          Especializado em React, Next.js, Angular.js e tecnologias modernas
          para web.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Ver Meus Projetos
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
}
