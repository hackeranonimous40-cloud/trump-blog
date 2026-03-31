import './globals.css'

export const metadata = {
  title: 'Mi Blog Personal',
  description: 'Bienvenido a mi blog personal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
