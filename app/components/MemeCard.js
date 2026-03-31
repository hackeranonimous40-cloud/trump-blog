'use client'

import Image from 'next/image'
import { useState } from 'react'

const memes = [
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Trump_protest_%2831082221546%29.jpg/960px-Trump_protest_%2831082221546%29.jpg',
    caption: 'WHEN YOU PROMISE PEACE BUT START 3 WARS INSTEAD',
    alt: 'Trump protest',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/January_2025_Official_Presidential_Portrait_of_Donald_J._Trump.jpg/960px-January_2025_Official_Presidential_Portrait_of_Donald_J._Trump.jpg',
    caption: 'NOBODY KNOWS IRONIES BETTER THAN ME',
    alt: 'Trump official portrait',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Trump_signing_Executive_Order_13780.jpg/960px-Trump_signing_Executive_Order_13780.jpg',
    caption: 'ART OF THE DEAL — DEAL NOT FOUND',
    alt: 'Trump signing executive order',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/White_House_Press_Briefing_%2849866894871%29.jpg/960px-White_House_Press_Briefing_%2849866894871%29.jpg',
    caption: 'TWEET AT 3AM — DIPLOMACY.exe HAS CRASHED',
    alt: 'White House press briefing',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Trump_and_May_at_the_White_House_press_conference.jpg',
    caption: 'MY FALL FROM GRACE — IS THE BEST FALL. TREMENDOUS.',
    alt: 'Trump press conference',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Trump_rally_crowd_%2834229655760%29.jpg/960px-Trump_rally_crowd_%2834229655760%29.jpg',
    caption: 'MADURO & TRUMP — LOVE STORY NOBODY ASKED FOR',
    alt: 'Trump rally crowd',
  },
]

export default function MemeCard({ index = 0 }) {
  const meme = memes[index % memes.length]
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <div className="meme-card" onClick={() => setExpanded(true)}>
        <Image
          src={meme.url}
          alt={meme.alt}
          fill
          className="meme-card-image"
        />
        <div className="meme-card-overlay" />
        <div className="meme-inner">
          <div className="meme-top">{meme.caption}</div>
        </div>
        <div className="meme-watermark">r/LaDecadenciaDeTrump</div>
        <div className="meme-expand-hint">🔍 Click para ampliar</div>
      </div>

      {expanded && (
        <div className="meme-modal" onClick={() => setExpanded(false)}>
          <div className="meme-modal-backdrop" />
          <div className="meme-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="meme-modal-close" onClick={() => setExpanded(false)}>✕</button>
            <div className="meme-modal-image-wrapper">
              <Image
                src={meme.url}
                alt={meme.alt}
                fill
                className="meme-modal-image"
              />
            </div>
            <div className="meme-modal-caption">{meme.caption}</div>
            <div className="meme-modal-surprise">
              <span className="surprise-text">🤡 "TREMENDOUS MEME. THE BEST MEME. BELIEVE ME." 🤡</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export function MemeSection() {
  return (
    <section className="meme-section">
      <h2>🎭 Memes de la Decadencia</h2>
      <p className="meme-section-subtitle">Haz click en cualquier meme para ampliarlo</p>
      <div className="meme-grid">
        {memes.map((_, i) => (
          <MemeCard key={i} index={i} />
        ))}
      </div>
    </section>
  )
}
