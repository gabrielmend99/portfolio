'use client'

import Link from 'next/link'
import styles from './projeto.module.css'

export default function ProjetoEsapiens() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        ← Voltar para a home
      </Link>

      <header className={styles.header}>
        <span className={styles.company}>eSapiens</span>
        <h1 className={styles.title}>Possibilitando a conexão entre creators e fãs</h1>
      </header>

      <div className={styles.imageSection}>
        <img 
          src="/assets/project-1.jpg" 
          alt="Conexão entre creators e fãs" 
          className={styles.projectImage} 
        />
      </div>

      <div className={styles.content}>
        <section>
          <h2 className={styles.sectionTitle}>Sobre o projeto</h2>
          <p className={styles.text}>
            O projeto na eSapiens foca em criar uma ponte sólida e lucrativa entre criadores de conteúdo e suas comunidades. 
            Através de uma plataforma intuitiva, permitimos que fãs apoiem seus ídolos diretamente, 
            enquanto os creators ganham ferramentas robustas para gerenciar sua audiência e monetizar seu trabalho.
          </p>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>Desafio</h2>
          <p className={styles.text}>
            O principal desafio era construir uma interface que fosse atraente para o público jovem e dinâmico dos criadores, 
            sem comprometer a clareza e a segurança necessária para transações financeiras e gestão de assinaturas.
          </p>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>Resultado</h2>
          <p className={styles.text}>
            Uma experiência de usuário fluida que resultou em um aumento significativo no engajamento dos fãs 
            e uma melhor retenção de assinantes para os criadores que adotaram a plataforma.
          </p>
        </section>
      </div>

      <div className={styles.divider}></div>

      <footer className={styles.footer}>
        <Link href="/" className={styles.backLink}>
          ← Voltar para a home
        </Link>
      </footer>
    </div>
  )
}
