import './globals.css'

export const metadata = {
  title: 'Gabriel - UI/UX & Product Designer',
  description: 'Transformando design em receita',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  )
}