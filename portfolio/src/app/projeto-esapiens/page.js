'use client'

import Link from 'next/link'
import AnimatedElement from '../AnimatedElement'
import styles from './projeto.module.css'

export default function ProjetoEsapiens() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <AnimatedElement delay={0.05}>
          <Link href="/" className={styles.backLink}>
            <img src="/assets/icon-arrow-left.svg" alt="" className={styles.backIcon} />
            Voltar para a home
          </Link>
        </AnimatedElement>
      </header>

      <AnimatedElement delay={0.1}>
        <div className={styles.divider}></div>
      </AnimatedElement>

      <main className={styles.mainContent}>
        <AnimatedElement delay={0.15}>
          <div className={styles.featuredImageContainer}>
            <img
              src="/assets/project-1.jpg"
              alt="Conexão entre creators e fãs"
              className={styles.projectImage}
            />
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.2}>
          <h1 className={styles.title}>Possibilitando a conexão entre creators e fãs</h1>
        </AnimatedElement>

        <section className={styles.summarySection}>
          <AnimatedElement delay={0.05}>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Empresa:</span>
              <span className={styles.summaryValue}>eSapiens</span>
            </div>
          </AnimatedElement>
          <AnimatedElement delay={0.1}>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Meu papel:</span>
              <span className={styles.summaryValue}>Product Designer</span>
            </div>
          </AnimatedElement>
          <AnimatedElement delay={0.15}>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Linha do tempo:</span>
              <span className={styles.summaryValue}>2022 - Hoje</span>
            </div>
          </AnimatedElement>
          <AnimatedElement delay={0.2}>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Responsabilidades:</span>
              <div className={styles.summaryValue}>
                <ul className={styles.summaryList}>
                  <li>Estratégia de produto</li>
                  <li>Discovery contínuo</li>
                  <li>Pesquisa com usuários</li>
                  <li>Modelagem de experimentos</li>
                  <li>Prototipação</li>
                  <li>Handoff com desenvolvedores</li>
                  <li>Testes A/B</li>
                  <li>Acompanhamento de métricas</li>
                </ul>
              </div>
            </div>
          </AnimatedElement>
        </section>

        <section>
          <AnimatedElement delay={0.1}>
            <h2 className={styles.sectionTitle}>Contexto</h2>
            <div className={styles.textContent}>
              <p>O Buupe é um produto que promove a conexão entre creators e fãs, com foco em criadores de conteúdo do mercado adulto, transformando o prazer em liberdade financeira.</p>
              <br />
              <p>Como único Product Designer em um time enxuto, minha responsabilidade é encontrar e priorizar oportunidades, desenhar soluções, alinhar o desenvolvimento e acompanhar métricas de resultado pós-lançamento.</p>
            </div>
          </AnimatedElement>
        </section>

        <section>
          <AnimatedElement delay={0.1}>
            <h2 className={styles.sectionTitle}>Desafios</h2>
            <ul className={styles.challengesList}>
              <li>Atuação em um time enxuto, dentro de um mercado com grandes players</li>
              <li>Descobrir e priorizar demandas de dois lados: fãs e creators</li>
              <li>Trabalhar com foco em crescimento, levando um produto da fase de product-market fit para a maturidade</li>
              <li>Concretizar um rebranding sem impactar negativamente a percepção dos usuários</li>
              <li>Trabalhar em um produto estigmatizado, com diversas restrições</li>
            </ul>
          </AnimatedElement>
        </section>

        {/* Impacto desde minha chegada */}
        <section>
          <AnimatedElement delay={0.1}>
            <h2 className={styles.sectionTitle}>Impactos desde minha chegada</h2>
          </AnimatedElement>

          <div className={styles.metricsGrid}>
            <AnimatedElement delay={0.15}>
              <div className={styles.metricCard}>
                <p className={styles.metricLabel}>Aumento de receita média mensal</p>
                <p className={styles.metricValue}>+104%</p>
              </div>
            </AnimatedElement>
            <AnimatedElement delay={0.2}>
              <div className={styles.metricCard}>
                <p className={styles.metricLabel}>Aumento na média de ativação de creators</p>
                <p className={styles.metricValue}>+52,6%</p>
              </div>
            </AnimatedElement>
          </div>

          <div className={styles.metricsGrid}>
            <AnimatedElement delay={0.25}>
              <div className={styles.metricCard}>
                <p className={styles.metricLabel}>Redução de churn de receita</p>
                <p className={styles.metricValue}>-34,9%</p>
              </div>
            </AnimatedElement>
            <AnimatedElement delay={0.3}>
              <div className={styles.metricCard}>
                <p className={styles.metricLabel}>Aumento no tempo de engajamento por usuário ativo</p>
                <p className={styles.metricValue}>+128%</p>
              </div>
            </AnimatedElement>
          </div>

          <AnimatedElement delay={0.35}>
            <p className={styles.impactText}>
              O bom desempenho do produto desde minha chegada não se deve ao meu trabalho isoladamente, mas a um entendimento profundo das dores e necessidades dos usuários, que se traduziram em oportunidades alinhadas com a estratégia do negócio e foram ao ar graças à ampla colaboração do time.
              <br /><br />
              A seguir, listo algumas oportunidades que nos ajudaram a evoluir:
            </p>
          </AnimatedElement>
        </section>

        {/* Ajudando fãs a descobrir creators relevantes */}
        <section>
          <AnimatedElement delay={0.1}>
            <h2 className={styles.sectionTitle}>Ajudando fãs a descobrir creators relevantes</h2>
          </AnimatedElement>
          <AnimatedElement delay={0.15}>
            <div className={styles.textContent}>
              <p>A descoberta de novos perfis é um recurso estratégico que multiplica a receita por usuário. Fãs que chegam à plataforma por meio de um perfil específico encontram outros produtores de conteúdo relevantes e, ao longo da jornada de navegação, tornam-se assinantes de novas contas.</p>
              <br />
              <p>Para que isso aconteça, investimos continuamente no aprimoramento de algoritmos de recomendação, garantindo que os fãs encontrem conteúdos que ressoem com seus interesses.</p>
            </div>
          </AnimatedElement>
          <AnimatedElement delay={0.2}>
            <div className={styles.imagesRowSingle}>
              <div className={styles.imageCardLarge}>
                <img src="/assets/project-mockup-1.png" alt="Descoberta de creators 1" className={styles.cardImage} />
              </div>
            </div>
          </AnimatedElement>
        </section>

        {/* Aumentando a confiança dos fãs na assinatura de perfis */}
        <section>
          <AnimatedElement delay={0.1}>
            <h2 className={styles.sectionTitle}>Aumentando a confiança dos fãs na assinatura de perfis</h2>
          </AnimatedElement>
          <AnimatedElement delay={0.15}>
            <div className={styles.textContent}>
              <p>Por meio de pesquisas com usuários e análise de comportamento, percebemos uma insegurança no público em fase de descoberta antes de realizar a primeira assinatura.</p>
              <br />
              <p>Com a implementação dos Depoimentos, usuários ativos passaram a expressar carinho pelos creators publicamente, aumentando a sensação de proximidade. Ao mesmo tempo, novos interessados utilizam essa prova social como validação para garantir que estão fazendo uma boa escolha.</p>
            </div>
          </AnimatedElement>
          <AnimatedElement delay={0.2}>
            <div className={styles.imagesRowSingle}>
              <div className={styles.imageCardLarge}>
              <img src="/assets/project-mockup-2.png" alt="Depoimentos" className={styles.cardImage} />
              </div>
            </div>
          </AnimatedElement>
        </section>

        {/* Possibilitando a interação entre creators e fãs em tempo real */}
        <section>
          <AnimatedElement delay={0.1}>
            <h2 className={styles.sectionTitle}>Possibilitando a interação entre creators e fãs em tempo real</h2>
          </AnimatedElement>
          <AnimatedElement delay={0.15}>
            <div className={styles.textContent}>
              <p>Os creators que mais retêm assinantes na plataforma são aqueles que cultivam uma relação próxima com sua comunidade. Com a ferramenta de Livestream, essa interação acontece em tempo real, elevando o sentimento de exclusividade e o engajamento a um novo patamar.</p>
            </div>
          </AnimatedElement>
          <AnimatedElement delay={0.2}>
            <div className={styles.imagesRowSingle}>
              <div className={styles.imageCardLarge}>
                <img src="/assets/project-mockup-3.png" alt="Livestream Creator" className={styles.cardImage} />
              </div>
            </div>
          </AnimatedElement>
        </section>

        {/* Em resumo */}
        <section>
          <AnimatedElement delay={0.1}>
            <h2 className={styles.sectionTitle}>Em resumo</h2>
          </AnimatedElement>
          <AnimatedElement delay={0.15}>
            <p className={styles.textContent}>
              Trabalhar no Buupe tem sido uma jornada de constantes aprendizados e desafios únicos. Cada feature desenvolvida — seja a descoberta de creators, os depoimentos ou as lives — nasceu de uma pergunta simples: "como podemos facilitar a conexão humana nesse ecosistema?".
              <br /><br />
              O sucesso medido em números (como os +104% de receita e +128% de engajamento) é resultado de uma cultura de experimentação e colaboração, ondedesign, produto e engenharia caminhando juntos para transformar a visão em realidade.
              <br /><br />
              O mais gratificante é ver que, por trás de cada métrica, existem histórias reais de creators que conquistaram independência financeira e fãs que encontraram uma forma autêntica de se conectar com quem admiram. É isso que me motiva a continuar desenhando soluções que fazem sentido tanto para o negócio quanto para as pessoas.
            </p>
          </AnimatedElement>
        </section>
      </main>

      <AnimatedElement delay={0.05}>
        <div className={styles.divider}></div>
      </AnimatedElement>

      <footer className={styles.footer}>
        <AnimatedElement delay={0.1}>
          <p className={styles.footerText}>Feito rapidinho mas com carinho por eu mesmo 🙃</p>
        </AnimatedElement>
      </footer>
    </div>
  )
}