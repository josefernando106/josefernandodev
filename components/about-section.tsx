import { skill } from "./helper";

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
              Sobre Mim
            </h2>

            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Desenvolvedor Front-End especialista em React.js e Next.js,
                focado na criação de aplicações performáticas e escaláveis.
                Minha expertise principal é garantir a navegação fluida e o
                design responsivo em sistemas de alto tráfego.
              </p>

              <p>
                Iniciei minha jornada na área de tecnologia em 2019, atuando
                como Programador Web na Maiscode Tecnologia. Nesse período,
                desenvolvi minhas primeiras experiências práticas com HTML, CSS,
                JavaScript, WordPress, PHP e MySQL. Foi um momento de
                aprendizado intenso, em que o contato direto com projetos reais
                permitiu transformar o conhecimento acadêmico em soluções
                aplicadas. Com a passagem para a FAPEC (2020–2023), ampliei meu
                escopo, assumindo responsabilidades como Analista de TI. Aqui,
                além de aprofundar-me em PHP/Laravel e administração de
                servidores, comecei a desenvolver uma visão mais abrangente
                sobre infraestrutura e sistemas. Essa etapa marcou um salto
                importante em minha maturidade profissional, pois exigiu
                autonomia, disciplina e constante atualização. O crescimento se
                intensificou na FIEMS/CIS (2023–2024), onde me destaquei como
                Analista de Sistemas. Foi nesse período que consolidei minha
                especialização em React.js, Next.js e Tailwind CSS, além de
                adquirir experiência com testes automatizados (Cypress) e
                metodologias ágeis como SCRUM. A vivência em equipes
                multidisciplinares e o contato com ferramentas modernas de
                versionamento e integração (Git e Azure DevOps) reforçaram minha
                capacidade de colaborar em projetos de alto impacto e de se
                adaptar a diferentes cenários tecnológicos. Mais recentemente,
                em Globoo Input Output (2025), assumi o papel de Desenvolvedor
                Front-End, aplicando meus conhecimentos em Angular e explorando
                novas fronteiras com blockchain. Minha evolução reflete uma
                transição sólida: de aprendiz curioso para especialista em
                front-end moderno, com domínio em frameworks de ponta e foco em
                criar aplicações escaláveis e performáticas.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {skill.map((skill) => (
              <div
                key={skill.title}
                className="p-6 bg-background rounded-lg border border-border"
              >
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
