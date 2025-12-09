export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">Sobre Mim</h2>

            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Sou um desenvolvedor apaixonado por criar soluções web de alta qualidade. Com experiência em front-end e
                back-end, gosto de entender os problemas do usuário e implementar soluções elegantes e eficientes.
              </p>

              <p>
                Minha jornada como desenvolvedor começou com curiosidade sobre como as coisas funcionam. Hoje, trabalho
                constantemente para melhorar minhas habilidades e acompanhar as tendências da indústria.
              </p>

              <p>
                Tenho experiência com React, Next.js, TypeScript, Tailwind CSS, e várias ferramentas modernas de
                desenvolvimento. Sou entusiasta de código limpo, testes e boas práticas de engenharia de software.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Front-End", description: "React, Next.js, TypeScript" },
              { title: "Back-End", description: "Node.js, APIs, Bancos de dados" },
              { title: "Design", description: "UI/UX, Tailwind CSS, Figma" },
            ].map((skill) => (
              <div key={skill.title} className="p-6 bg-background rounded-lg border border-border">
                <h3 className="font-semibold text-lg mb-2 text-foreground">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
