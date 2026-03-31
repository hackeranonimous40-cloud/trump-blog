import Link from 'next/link'

const posts = [
  {
    id: 1,
    title: 'El "Presidente de Paz" que se regaló su propia guerra',
    excerpt: 'Trump prometió paz mundial y terminó siendo el presidente más bélico de las últimas décadas. Ironías del destino.',
    date: '2026-03-31',
    category: 'Guerra y Paz',
  },
  {
    id: 2,
    title: 'De las coronas a la corona de Maduro: el ocaso dorado',
    excerpt: 'Primero se tiró coronas en sus torres, ahora se las tiran en Caracas. La decadencia tiene sabor a arepa.',
    date: '2026-03-30',
    category: 'Decadencia',
  },
  {
    id: 3,
    title: 'Trump y Maduro: la amistad que nadie pidió pero todos temimos',
    excerpt: 'Dos líderes que se odiaban en público y ahora comparten palco. La geopolítica tiene giros de telenovela barata.',
    date: '2026-03-29',
    category: 'Geopolítica Absurda',
  },
  {
    id: 4,
    title: 'El arte de la guerra... que nadie le pidió',
    excerpt: 'Trump dijo que odiaba las guerras. Luego creó tres, medio conflicto y una crisis diplomática antes del desayuno.',
    date: '2026-03-28',
    category: 'Contradicciones',
  },
  {
    id: 5,
    title: 'Vergüenza ajena: cuando el mundo mira y tú no sabes dónde meterte',
    excerpt: 'Un presidente que se creía el salvador del mundo libre y terminó siendo la broma del hemisferio.',
    date: '2026-03-27',
    category: 'Vergüenza Global',
  },
  {
    id: 6,
    title: 'Los últimos días: entre tweets furiosos y alianzas imposibles',
    excerpt: 'El ocaso presidencial más triste de la historia moderna. Cada día un nuevo escándalo, cada noche un nuevo aliado improbable.',
    date: '2026-03-26',
    category: 'Ocaso',
  },
]

export default function Home() {
  return (
    <main className="container">
      <header className="header">
        <div className="header-icon">🍊</div>
        <h1>La Decadencia de Trump</h1>
        <p>Del "presidente de paz" al presidente de guerra. Crónica irónica del ocaso dorado.</p>
        <div className="header-tagline">"Nobody knows irony better than me, believe me."</div>
      </header>

      <section className="posts">
        <h2>📰 Últimas Crónicas</h2>
        {posts.map((post) => (
          <article key={post.id} className="post-card">
            <span className="post-category">{post.category}</span>
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
        <p>© 2026 La Decadencia de Trump — Blog satírico</p>
        <p className="footer-note">"This is fake news... or is it?" — Probablemente ambos.</p>
      </footer>
    </main>
  )
}
