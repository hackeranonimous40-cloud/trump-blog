import Link from 'next/link'

const posts = [
  {
    id: 1,
    title: 'Mi primer post',
    excerpt: 'Bienvenido a mi blog personal. Aquí compartiré mis ideas y experiencias.',
    date: '2026-03-31',
  },
  {
    id: 2,
    title: 'Aprendiendo Next.js',
    excerpt: 'Mi experiencia aprendiendo el framework de React para producción.',
    date: '2026-03-30',
  },
  {
    id: 3,
    title: 'Desplegando en Vercel',
    excerpt: 'Guía rápida para desplegar tu aplicación Next.js en Vercel.',
    date: '2026-03-29',
  },
]

export default function Home() {
  return (
    <main className="container">
      <header className="header">
        <h1>Mi Blog Personal</h1>
        <p>Compartiendo ideas y experiencias</p>
      </header>

      <section className="posts">
        <h2>Últimos Posts</h2>
        {posts.map((post) => (
          <article key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <time>{post.date}</time>
            <p>{post.excerpt}</p>
            <Link href={`/posts/${post.id}`} className="read-more">
              Leer más →
            </Link>
          </article>
        ))}
      </section>

      <footer className="footer">
        <p>© 2026 Mi Blog Personal. Todos los derechos reservados.</p>
      </footer>
    </main>
  )
}
