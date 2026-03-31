import Link from 'next/link'
import HeroBanner from './components/HeroBanner'
import PostImage from './components/PostImage'
import { MemeSection } from './components/MemeCard'
import ImageGallery from './components/ImageGallery'
import { SvgMemeGallery } from './components/SvgMeme'
import { getAllPosts } from './data/posts'

export default function Home() {
  const posts = getAllPosts()

  return (
    <main className="container">
      <header className="header">
        <div className="header-icon">🍊</div>
        <h1>La Decadencia de Trump</h1>
        <p>Del &quot;presidente de paz&quot; al presidente de guerra. Crónica irónica del ocaso dorado.</p>
        <div className="header-tagline">&quot;Nobody knows irony better than me, believe me.&quot;</div>
      </header>

      <HeroBanner />

      <section className="posts">
        <h2>📰 Últimas Crónicas</h2>
        {posts.map((post) => (
          <article key={post.id} className="post-card">
            <PostImage postId={post.id} />
            <div className="post-card-content">
              <span className="post-category">{post.category}</span>
              <h3>{post.title}</h3>
              <time>{post.date}</time>
              <p>{post.excerpt}</p>
              <Link href={`/posts/${post.id}`} className="read-more">
                Leer más →
              </Link>
            </div>
          </article>
        ))}
      </section>

      <MemeSection />

      <SvgMemeGallery />

      <ImageGallery />

      <footer className="footer">
        <p>© 2026 La Decadencia de Trump — Blog satírico</p>
        <p className="footer-note">&quot;This is fake news... or is it?&quot; — Probablemente ambos.</p>
      </footer>
    </main>
  )
}
