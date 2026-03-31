import Link from 'next/link'
import PostImage from '../../components/PostImage'
import SvgMeme from '../../components/SvgMeme'
import { getAllPosts, getPostById } from '../../data/posts'

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    id: String(post.id),
  }))
}

export default async function PostPage({ params }) {
  const { id } = await params
  const post = getPostById(id)

  if (!post) {
    return (
      <main className="container">
        <h1 style={{ color: '#c9a227' }}>Post no encontrado</h1>
        <Link href="/" className="back-link">← Volver al inicio</Link>
      </main>
    )
  }

  return (
    <main className="container">
      <article className="post-full">
        <PostImage postId={post.id} />
        <div className="post-full-content">
          <span className="post-category">{post.category}</span>
          <h1>{post.title}</h1>
          <time>{post.date}</time>
          <div className="post-content">
            {post.content.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          {post.memeType && (
            <div className="post-inline-meme">
              <SvgMeme type={post.memeType} />
            </div>
          )}
        </div>
      </article>
      <Link href="/" className="back-link">← Volver a La Decadencia</Link>
    </main>
  )
}
