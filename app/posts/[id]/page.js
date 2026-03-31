const posts = {
  1: {
    title: 'Mi primer post',
    content: `Bienvenido a mi blog personal. Este es mi primer post donde quiero compartir mis ideas y experiencias.

Aquí escribiré sobre diversos temas que me interesan y espero que sea de tu agrado.

¡Gracias por visitar!`,
    date: '2026-03-31',
  },
  2: {
    title: 'Aprendiendo Next.js',
    content: `Next.js es un framework de React que facilita la creación de aplicaciones web de producción.

Entre sus características principales están:

- Server-side rendering (SSR)
- Static site generation (SSG)
- API routes
- File-based routing

Es una excelente opción para proyectos que necesitan buen SEO y rendimiento.`,
    date: '2026-03-30',
  },
  3: {
    title: 'Desplegando en Vercel',
    content: `Vercel es la plataforma ideal para desplegar aplicaciones Next.js.

Pasos básicos:

1. Crea tu cuenta en Vercel
2. Conecta tu repositorio de GitHub
3. Configura tu proyecto
4. ¡Despliega!

La integración con Next.js es perfecta y el despliegue es automático con cada push.`,
    date: '2026-03-29',
  },
}

export function generateStaticParams() {
  return Object.keys(posts).map((id) => ({
    id,
  }))
}

export default function PostPage({ params }) {
  const post = posts[params.id]

  if (!post) {
    return <div>Post no encontrado</div>
  }

  return (
    <main className="container">
      <article className="post-full">
        <h1>{post.title}</h1>
        <time>{post.date}</time>
        <div className="post-content">
          {post.content.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>
      <a href="/" className="back-link">← Volver al inicio</a>
    </main>
  )
}
