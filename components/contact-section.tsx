export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12 text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Vamos Conversar</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Estou sempre aberto a novas oportunidades e projetos interessantes. Sinta-se à vontade para entrar em
              contato comigo!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:seu.email@exemplo.com"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Enviar Email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-border">
            {[
              { label: "Email", value: "seu.email@exemplo.com" },
              { label: "GitHub", value: "github.com/josefernando" },
              { label: "LinkedIn", value: "linkedin.com/in/josefernando" },
            ].map((contact) => (
              <div key={contact.label} className="space-y-2">
                <p className="text-sm font-semibold text-muted-foreground uppercase">{contact.label}</p>
                <p className="text-foreground">{contact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
