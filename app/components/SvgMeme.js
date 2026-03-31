import Image from 'next/image'

export default function SvgMeme({ type = 'drake' }) {
  if (type === 'drake') {
    return (
      <div className="svg-meme">
        <div className="svg-meme-drake">
          <div className="svg-meme-drake-panel reject">
            <span className="svg-meme-drake-emoji">🙅</span>
            <p>Being a &quot;president of peace&quot;</p>
          </div>
          <div className="svg-meme-drake-panel accept">
            <span className="svg-meme-drake-emoji">👍</span>
            <p>Starting 3 wars &amp; blaming Obama</p>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'expanding') {
    return (
      <div className="svg-meme">
        <div className="svg-meme-brain">
          <div className="svg-meme-brain-panel">
            <span className="svg-meme-brain-icon">🧠</span>
            <p>Prometer paz mundial</p>
            <span className="svg-meme-brain-label">small</span>
          </div>
          <div className="svg-meme-brain-panel">
            <span className="svg-meme-brain-icon">🧠</span>
            <p>Iniciar una guerra</p>
            <span className="svg-meme-brain-label">normal</span>
          </div>
          <div className="svg-meme-brain-panel">
            <span className="svg-meme-brain-icon">🧠</span>
            <p>Aliarse con Maduro</p>
            <span className="svg-meme-brain-label glowing">expanding</span>
          </div>
          <div className="svg-meme-brain-panel cosmic">
            <span className="svg-meme-brain-icon">✨🧠✨</span>
            <p>Tweetear a las 3am</p>
            <span className="svg-meme-brain-label cosmic-text">B R A I N &nbsp; S I Z E : &nbsp; C O S M I C</span>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'thisisfine') {
    return (
      <div className="svg-meme">
        <div className="svg-meme-thisisfine">
          <div className="thisisfine-fire">🔥</div>
          <div className="thisisfine-dog">🐶☕</div>
          <p className="thisisfine-text">This is fine.</p>
          <p className="thisisfine-subtext">*everything is on fire*</p>
        </div>
      </div>
    )
  }

  return null
}

export function SvgMemeGallery() {
  return (
    <section className="svg-meme-gallery">
      <h2>🖼️ Memes Ilustrados</h2>
      <div className="svg-meme-row">
        <SvgMeme type="drake" />
        <SvgMeme type="expanding" />
        <SvgMeme type="thisisfine" />
      </div>
    </section>
  )
}
