import './globals.css'

export const metadata = {
  title: 'Gabriel - UI/UX & Product Designer',
  description: 'Portfolio de Gabriel, UI/UX & Product Designer na eSapiens',
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