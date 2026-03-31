import './globals.css'

export const metadata = {
  title: 'La Decadencia de Trump — Crónica Irónica',
  description: 'Del presidente de "paz" al presidente de guerra. Crónica satírica de la caída de Donald Trump.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
