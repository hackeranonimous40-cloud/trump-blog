'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import HeroBanner from './components/HeroBanner'
import PostImage from './components/PostImage'
import { MemeSection } from './components/MemeCard'
import ImageGallery from './components/ImageGallery'
import { SvgMemeGallery } from './components/SvgMeme'
import { getAllPosts } from './data/posts'

function TypewriterText({ text, speed = 50 }) {
  const [displayText, setDisplayText] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    setDisplayText('')
    setDone(false)
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1))
        i++
      } else {
        setDone(true)
        clearInterval(interval)
      }
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])

  return (
    <span>
      {displayText}
      {!done && <span className="typewriter-cursor">|</span>}
    </span>
  )
}

function CounterCard({ number, label, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true)
          let current = 0
          const step = Math.max(1, Math.floor(number / 60))
          const interval = setInterval(() => {
            current += step
            if (current >= number) {
              setCount(number)
              clearInterval(interval)
            } else {
              setCount(current)
            }
          }, 25)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [number, animated])

  return (
    <div className="counter-card" ref={ref}>
      <div className="counter-number">{count.toLocaleString()}{suffix}</div>
      <div className="counter-label">{label}</div>
    </div>
  )
}

function EvidenceCard({ title, description, evidence, severity }) {
  const [expanded, setExpanded] = useState(false)
  const colors = { critical: '#e74c3c', high: '#e67e22', medium: '#f39c12' }
  const color = colors[severity] || '#c9a227'

  return (
    <div className="evidence-card" style={{ borderColor: color }}>
      <div className="evidence-header" onClick={() => setExpanded(!expanded)}>
        <span className="evidence-severity" style={{ background: color }}>
          {severity.toUpperCase()}
        </span>
        <h3>{title}</h3>
        <span className="evidence-toggle">{expanded ? '−' : '+'}</span>
      </div>
      {expanded && (
        <div className="evidence-body">
          <p>{description}</p>
          <div className="evidence-detail">
            <h4>📋 Evidencia:</h4>
            {evidence.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function TimelineItem({ year, event, impact, reversed }) {
  return (
    <div className={`timeline-item ${reversed ? 'reversed' : ''}`}>
      <div className="timeline-dot" />
      <div className="timeline-content">
        <span className="timeline-year">{year}</span>
        <h3>{event}</h3>
        <p className="timeline-impact">💥 {impact}</p>
      </div>
    </div>
  )
}

function useDaysSince(dateStr) {
  const [days, setDays] = useState(0)
  useEffect(() => {
    const calc = () => setDays(Math.floor((Date.now() - new Date(dateStr)) / 86400000))
    calc()
    const id = setInterval(calc, 3600000)
    return () => clearInterval(id)
  }, [dateStr])
  return days
}

export default function Home() {
  const posts = getAllPosts()
  const daysInPower = useDaysSince('2025-01-20')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="container">
      {/* CINEMATIC INTRO */}
      <section className="cinematic-intro" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
        <div className="cinematic-overlay" />
        <div className="cinematic-content">
          <div className="cinematic-subtitle">CRÓNICA DE UNA DECADENCIA ANUNCIADA</div>
          <h1 className="cinematic-title">
            <TypewriterText text="La Decadencia de Trump" speed={80} />
          </h1>
          <div className="cinematic-tagline">
            Del &quot;presidente de paz&quot; al presidente de guerra
          </div>
          <div className="cinematic-days">
            <span className="days-number">{daysInPower}</span>
            <span className="days-label">días de decadencia</span>
          </div>
          <div className="cinematic-scroll-hint">↓ Desliza para ver el expediente ↓</div>
        </div>
      </section>

      <HeroBanner />

      {/* MARCADOR: PROMESAS VS REALIDAD */}
      <section className="scoreboard-section">
        <h2>📊 El Marcador: Promesas vs Realidad</h2>
        <div className="scoreboard-grid">
          <div className="scoreboard-item">
            <div className="scoreboard-promise">Prometió paz</div>
            <div className="scoreboard-arrow">→</div>
            <div className="scoreboard-reality">3 conflictos activos</div>
          </div>
          <div className="scoreboard-item">
            <div className="scoreboard-promise">Prometió unidad</div>
            <div className="scoreboard-arrow">→</div>
            <div className="scoreboard-reality">El país más dividido en 150 años</div>
          </div>
          <div className="scoreboard-item">
            <div className="scoreboard-promise">Prometió &quot;America First&quot;</div>
            <div className="scoreboard-arrow">→</div>
            <div className="scoreboard-reality">Alianza con dictadores</div>
          </div>
          <div className="scoreboard-item">
            <div className="scoreboard-promise">Prometió el mejor acuerdo</div>
            <div className="scoreboard-arrow">→</div>
            <div className="scoreboard-reality">Deuda nacional récord</div>
          </div>
        </div>
      </section>

      {/* CONTADORES ÉPICOS */}
      <section className="counters-section">
        <h2>🔢 Los Números de la Vergüenza</h2>
        <div className="counters-grid">
          <CounterCard number={22006} label="Mentiras documentadas" suffix="+" />
          <CounterCard number={47} label="Indictamientos pendientes" />
          <CounterCard number={3} label="Guerras iniciadas" />
          <CounterCard number={195} label="Países que lo rechazan" />
          <CounterCard number={34} label="Billones en deuda" suffix="T" />
          <CounterCard number={1} label="Payaso en la Casa Blanca" />
        </div>
      </section>

      {/* EL EXPEDIENTE */}
      <section className="evidence-section">
        <h2>📁 El Expediente: Casos en su Contra</h2>
        <p className="section-subtitle">Haz click en cada caso para ver la evidencia completa</p>
        <div className="evidence-grid">
          <EvidenceCard
            title="Caso #1: El Asesinato de Soleimani"
            description="Ordenó el asesinato de un general iraní sin consultar al Congreso, violando la Constitución."
            severity="critical"
            evidence={[
              '3 de enero 2020: Dron MQ-9 Reaper mata a Qasem Soleimani en Bagdad',
              'No se presentó evidencia de &quot;amenaza inminente&quot; al Congreso',
              'Irán respondió con misiles balísticos: 100+ soldados estadounidenses con lesiones cerebrales',
              'El precio del petróleo subió 4% en un día',
              'Según el NYT, la justificación fue &quot;fabricada&quot;',
            ]}
          />
          <EvidenceCard
            title="Caso #2: El Robo del Petróleo"
            description="Retiró a EE.UU. del acuerdo nuclear con Irán para beneficiar a las petroleras."
            severity="critical"
            evidence={[
              'Mayo 2018: Retiro del JCPOA (acuerdo que Irán estaba cumpliendo)',
              'Sanciones redujeron exportaciones iraníes de 2.5M a 500K barriles/día',
              'ExxonMobil, Chevron y Koch Industries reportaron ganancias récord',
              'Rex Tillerson (ex-CEO ExxonMobil) nombrado Secretario de Estado',
              '15 marcas Trump registradas en Turquía y Medio Oriente',
            ]}
          />
          <EvidenceCard
            title="Caso #3: La Alianza con Maduro"
            description="De enemigo jurado a aliado estratégico. La geopolítica como reality show."
            severity="high"
            evidence={[
              'Trump llamó a Maduro &quot;dictador&quot; y &quot;socialista fracasado&quot; durante años',
              'Impuso sanciones que devastaron la economía venezolana',
              'En 2025: reuniones secretas y alianzas públicas',
              'Maduro llamó a Trump &quot;payaso&quot; e &quot;imperialista&quot;',
              'Ahora: &quot;Los mejores amigos. People are saying it.&quot;',
            ]}
          />
          <EvidenceCard
            title="Caso #4: La Destrucción Institucional"
            description="Desmanteló sistemáticamente las instituciones democráticas estadounidenses."
            severity="critical"
            evidence={[
              'Intentó anular las elecciones de 2020',
              '6 de enero 2021: Asalto al Capitolio',
              'Segundo impeachment de la historia',
              'Despidió inspectores generales que lo investigaban',
              'Politizó el Departamento de Justicia',
            ]}
          />
          <EvidenceCard
            title="Caso #5: El Cambio Climático"
            description="Retiró a EE.UU. del Acuerdo de París mientras los incendios arrasaban California."
            severity="high"
            evidence={[
              'Junio 2017: Anuncia retiro del Acuerdo de París',
              'Dijo que el cambio climático era &quot;un invento chino&quot;',
              'Mientras tanto, California ardía en incendios históricos',
              'Desmanteló 100+ regulaciones ambientales',
              '2023: El año más caliente registrado en la historia',
            ]}
          />
          <EvidenceCard
            title="Caso #6: La Familia Trump y los Negocios"
            description="Usó la presidencia para enriquecer a su familia y sus empresas."
            severity="high"
            evidence={[
              'La Trump Organization ganó $200M+ durante su presidencia',
              'Hoteles Trump recibieron $40M+ de gobiernos extranjeros',
              'Ivanka Trump registró 3 marcas en India durante visita oficial',
              'Eric y Donald Jr. dirigieron la empresa mientras su padre hacía política',
              'Conflicto de intereses nunca resuelto',
            ]}
          />
        </div>
      </section>

      {/* TIMELINE DE DESTRUCCIÓN */}
      <section className="timeline-section">
        <h2>⏳ La Cronología de la Decadencia</h2>
        <div className="timeline-track">
          <TimelineItem
            year="2015"
            event="Lanza su campaña: 'México no nos está enviando a los mejores'"
            impact="El inicio del fin de la decencia política"
          />
          <TimelineItem
            year="2016"
            event="Gana las elecciones contra todo pronóstico"
            impact="El mundo contiene la respiración"
            reversed
          />
          <TimelineItem
            year="2017"
            event="Retira a EE.UU. del Acuerdo de París"
            impact="El planeta empieza a arder literalmente"
          />
          <TimelineItem
            year="2018"
            event="Retira el acuerdo nuclear con Irán"
            impact="El petróleo sube, las petroleras celebran"
            reversed
          />
          <TimelineItem
            year="2019"
            event="Primer impeachment por Ucrania"
            impact="'Perfect phone call' dijo. El Congreso no estuvo de acuerdo"
          />
          <TimelineItem
            year="2020"
            event="Asesinato de Soleimani + Pandemia + 6 de enero"
            impact="El año que el mundo se preguntó '¿cómo llegamos aquí?'"
            reversed
          />
          <TimelineItem
            year="2021"
            event="Segundo impeachment. Biden asume."
            impact="El circo se muda temporalmente a Mar-a-Lago"
          />
          <TimelineItem
            year="2024"
            event="Regresa a la Casa Blanca"
            impact="La historia repite su peor capítulo"
            reversed
          />
          <TimelineItem
            year="2025-26"
            event="Alianza con Maduro + guerras + caos total"
            impact="El mundo ya no sabe si reír o llorar"
          />
        </div>
      </section>

      {/* POSTS */}
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

      {/* VEREDICTO FINAL */}
      <section className="verdict-section">
        <div className="verdict-stamp">SELLO DE VERGÜENZA</div>
        <h2>⚖️ El Veredicto Final</h2>
        <div className="verdict-text">
          <TypewriterText text="VEREDICTO: CULPABLE DE DESTRUIR LA DEMOCRACIA MÁS PODEROSA DEL MUNDO. SENTENCIA: LA HISTORIA NO SERÁ CLEMENTE." speed={25} />
        </div>
        <div className="verdict-seal">
          <div className="seal-circle">
            <span className="seal-text-top">LA DECADENCIA DE TRUMP</span>
            <span className="seal-icon">🤡</span>
            <span className="seal-text-bottom">VEREDICTO FINAL</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 La Decadencia de Trump — Blog satírico</p>
        <p className="footer-note">&quot;This is fake news... or is it?&quot; — Probablemente ambos.</p>
        <Link href="/iran" className="footer-iran-link">🛢️ La verdad sobre Irán →</Link>
      </footer>
    </main>
  )
}
