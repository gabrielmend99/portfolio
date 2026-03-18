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
