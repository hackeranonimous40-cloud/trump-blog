'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function HeroBanner() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${3 + Math.random() * 4}s`,
      }))
    )
  }, [])

  return (
    <Link href="/iran" className="hero-banner-link">
      <div className="hero-banner">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/January_2025_Official_Presidential_Portrait_of_Donald_J._Trump.jpg/960px-January_2025_Official_Presidential_Portrait_of_Donald_J._Trump.jpg"
          alt="Donald Trump official portrait 2025"
          fill
          className="hero-bg-image"
          priority
        />
        <div className="hero-overlay">
          <div className="hero-meme-top">&quot;Nobody knows irony better than me&quot;</div>
          <div className="hero-clown-icon">🤡</div>
          <div className="hero-meme-bottom">Believe me.</div>
          <span className="hero-cta">👆 La verdad sobre Irán y el petróleo</span>
        </div>
        <div className="hero-particles">
          {particles.map((p) => (
            <span key={p.id} className="particle" style={{
              left: p.left,
              animationDelay: p.animationDelay,
              animationDuration: p.animationDuration,
            }}>🤡</span>
          ))}
        </div>
      </div>
    </Link>
  )
}
