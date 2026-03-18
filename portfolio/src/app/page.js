'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    console.log('Portfolio carregado com sucesso! 🚀')
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.divider}></div>

      {/* Header com foto e LinkedIn */}
      <header className={styles.header}>
        <div className={styles.profileSection}>
          <div className={styles.profileImage}>
            <img src="/assets/profile.png" alt="Gabriel" id="profile-img" />
          </div>
          <a
            href="https://linkedin.com/in/gabrielhenrique"
            target="_blank"
            className={styles.linkedinBtn}
            aria-label="LinkedIn"
          >
            <img src="/assets/logo-linkedin.svg" alt="" className={styles.icon} />
          </a>
        </div>
      </header>

      <main className={styles.mainContent}>
        {/* Intro */}
        <section className={styles.intro}>
          <h1 className={styles.greeting}>Oi, eu sou o Gabriel 👋</h1>
          <p className={styles.bio}>
            Product Designer transformando design em receita. Acredito que estratégia, estética e equipe são a base para criar produtos que as pessoas escolhem usar.
          </p>
          <p className={styles.bio}>
            Atualmente na eSapiens, uma venture builder que incorpora empresas promissoras para torná-las referência de mercado.
          </p>
        </section>

        <div className={styles.divider}></div>

        {/* Projeto */}
        <section className={styles.projects}>
          <h2 className={styles.sectionTitle}>Conheça meu trabalho</h2>

          <Link href="/projeto-esapiens" className={styles.projectCard}>
            <div className={styles.projectImage}>
              <img src="/assets/project-1.jpg" alt="eSapiens" id="project-img" />
            </div>
            <div className={styles.projectInfo}>
              <span className={styles.projectCompany}>eSapiens</span>
              <h3 className={styles.projectTitle}>Possibilitando a conexão entre creators e fãs</h3>
            </div>
          </Link>
        </section>

        <div className={styles.divider}></div>

        {/* Contato */}
        <section className={styles.contact}>
          <h2 className={styles.sectionTitle}>Vamos conversar?</h2>
          <p className={styles.contactText}>
            Você pode enviar um email para{' '}
            <a href="mailto:gabrielhenrique.pessoal@gmail.com" className={styles.contactLink}>
              gabrielhenrique.pessoal@gmail.com
            </a>{' '}
            ou me chamar no WhatsApp{' '}
            <a href="https://wa.me/5519971408063" className={styles.contactLink}>
              (19) 97140-8063
            </a>
          </p>

          <div className={styles.contactButtons}>
            <a href="https://linkedin.com/in/gabrielhenrique" target="_blank" className={styles.btn}>
              Veja meu LinkedIn
            </a>
            <a href="/assets/cv.pdf" download className={styles.btn}>
              Baixe meu currículo
            </a>
          </div>
        </section>
      </main>

      <div className={styles.divider}></div>

      {/* Footer */}
      <footer className={styles.footer}>
        <p className={styles.footerText}>Feito rapidinho mas com carinho por eu mesmo 🙃</p>
      </footer>
    </div>
  )
}