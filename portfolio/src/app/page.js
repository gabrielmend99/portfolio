'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import AnimatedElement from './AnimatedElement'
import styles from './page.module.css'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    console.log('Portfolio carregado com sucesso! 🚀')
  }, [])

  return (
    <div className={styles.container}>
      <AnimatedElement delay={0.05}>
        <div className={styles.divider}></div>
      </AnimatedElement>

      {/* Header com foto e LinkedIn */}
      <header className={styles.header}>
        <AnimatedElement delay={0.1}>
          <div className={styles.profileSection}>
            <div className={styles.profileImage}>
              <img src="/assets/profile.png" alt="Gabriel" id="profile-img" />
            </div>
            <a
              href="https://www.linkedin.com/in/gabrielghm99/"
              target="_blank"
              className={styles.linkedinBtn}
              aria-label="LinkedIn"
            >
              <img src="/assets/logo-linkedin.svg" alt="" className={styles.icon} />
            </a>
          </div>
        </AnimatedElement>
      </header>

      <main className={styles.mainContent}>
        {/* Intro */}
        <section className={styles.intro}>
          <AnimatedElement delay={0.15}>
            <h1 className={styles.greeting}>Oi, eu sou o Gabriel 👋</h1>
          </AnimatedElement>
          <AnimatedElement delay={0.2}>
            <p className={styles.bio}>
              Product Designer transformando design em receita. Acredito que estratégia, estética e equipe são a base para criar produtos que as pessoas escolhem usar.
            </p>
          </AnimatedElement>
          <AnimatedElement delay={0.25}>
            <p className={styles.bio}>
              Atualmente na eSapiens, uma venture builder que incorpora empresas promissoras para torná-las referência de mercado.
            </p>
          </AnimatedElement>
        </section>

        <AnimatedElement delay={0.05}>
          <div className={styles.divider}></div>
        </AnimatedElement>

        {/* Projeto */}
        <section className={styles.projects}>
          <AnimatedElement delay={0.1}>
            <h2 className={styles.sectionTitle}>Conheça meu trabalho</h2>
          </AnimatedElement>

          <AnimatedElement delay={0.15}>
            <Link href="/projeto-esapiens" className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src="/assets/project-1.jpg" alt="eSapiens" id="project-img" />
              </div>
              <div className={styles.projectInfo}>
                <span className={styles.projectCompany}>eSapiens</span>
                <h3 className={styles.projectTitle}>Possibilitando a conexão entre creators e fãs</h3>
              </div>
            </Link>
          </AnimatedElement>
        </section>

        <AnimatedElement delay={0.05}>
          <div className={styles.divider}></div>
        </AnimatedElement>

        {/* Contato */}
        <section className={styles.contact}>
          <AnimatedElement delay={0.1}>
            <h2 className={styles.sectionTitle}>Vamos conversar?</h2>
          </AnimatedElement>
          <AnimatedElement delay={0.15}>
            <p className={styles.contactText}>
              Você pode enviar um email para{' '}
              <a href="mailto:gabrielhenrique.pessoal@gmail.com" className={styles.contactLink}>
                gabrielhenrique.pessoal@gmail.com
              </a>{' '}
              ou me chamar no WhatsApp{' '}
              <a href="https://wa.me/5519971408063" target="_blank" className={styles.contactLink}>
                (19) 97140-8063
              </a>
            </p>
          </AnimatedElement>

          <div className={styles.contactButtons}>
            <AnimatedElement delay={0.2}>
              <a href="https://www.linkedin.com/in/gabrielghm99/" target="_blank" className={styles.btn}>
                Veja meu LinkedIn
              </a>
            </AnimatedElement>
            <AnimatedElement delay={0.25}>
              <a href="/assets/CV_Gabriel_Mendonca-Product_Designer.pdf" target="_blank" download className={styles.btn}>
                Baixe meu currículo
              </a>
            </AnimatedElement>
          </div>
        </section>
      </main>

      <AnimatedElement delay={0.05}>
        <div className={styles.divider}></div>
      </AnimatedElement>

      {/* Footer */}
      <footer className={styles.footer}>
        <AnimatedElement delay={0.1}>
          <p className={styles.footerText}>Feito com carinho por eu mesmo 🙃</p>
        </AnimatedElement>
      </footer>
    </div>
  )
}