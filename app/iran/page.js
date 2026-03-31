import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'La Verdad sobre Irán y el Petróleo — La Decadencia de Trump',
  description: 'De Soleimani al Estrecho de Ormuz: la verdad incómoda detrás de las amenazas de Trump contra Irán.',
}

export default function IranPage() {
  return (
    <main className="container">
      <article className="iran-article">
        <div className="iran-hero">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/President_Trump_Delivers_Remarks_%2849328802387%29.jpg/960px-President_Trump_Delivers_Remarks_%2849328802387%29.jpg"
            alt="Trump delivers remarks on Iran"
            fill
            className="iran-hero-image"
            priority
          />
          <div className="iran-hero-overlay">
            <h1>🛢️ La Verdad sobre Irán</h1>
            <p>De Soleimani al petróleo: lo que no te cuentan en Fox News</p>
          </div>
        </div>

        <div className="iran-content">
          <section className="iran-section">
            <h2>El día que Trump mató a Soleimani por Twitter</h2>
            <p>
              El 3 de enero de 2020, a las 01:00 hora de Bagdad, un dron MQ-9 Reaper estadounidense lanzó misiles AGM-114 Hellfire contra un convoy en el aeropuerto internacional de Bagdad. En el convoy viajaba el general Qasem Soleimani, comandante de la Fuerza Quds de la Guardia Revolucionaria Islámica de Irán, considerado el segundo hombre más poderoso de Irán después del supremo líder Ali Khamenei.
            </p>
            <p>
              La operación fue ordenada personalmente por Donald Trump. No consultó al Congreso. No consultó a la ONU. Lo hizo, según reportes, después de ver un segmento en Fox News donde decían que se veía débil frente a Irán.
            </p>

            <div className="iran-quote-block">
              <p className="iran-quote">"We targeted and killed the world's number one state sponsor of terror."</p>
              <span className="iran-quote-author">— Donald Trump, tweet del 3 de enero de 2020</span>
            </div>

            <p>
              Lo que no dijo es que Soleimani había estado negociando secretamente con Estados Unidos contra ISIS en Irak. Lo que no dijo es que la "amenaza inminente" que justificó el asesinato nunca fue presentada con evidencia concreta. Lo que no dijo es que después del ataque, Irán respondió con misiles balísticos contra bases estadounidenses en Irak, dejando más de 100 soldados estadounidenses con lesiones cerebrales traumáticas.
            </p>
          </section>

          <section className="iran-section">
            <h2>El petróleo: la obsesión que nunca se fue</h2>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Middle_East_oil_and_gas._LOC_2007631392.jpg/960px-Middle_East_oil_and_gas._LOC_2007631392.jpg"
              alt="Middle East oil and gas map"
              width={800}
              height={734}
              className="iran-inline-image"
            />
            <p>
              En 2011, Trump dijo en una entrevista con CNBC: <strong>"Vamos a Irak, nos quedamos con el petróleo. ¿Es tan difícil?"</strong>. Lo repitió en mítines. Lo escribió en tweets. Lo dijo en entrevistas. Era su mantra: Irak tenía petróleo, Estados Unidos debería quedárselo.
            </p>
            <p>
              Cuando Irán entró en la ecuación, el patrón se repitió. En mayo de 2018, Trump retiró a Estados Unidos del acuerdo nuclear con Irán (JCPOA), un acuerdo que la Agencia Internacional de Energía Atómica confirmó que Irán estaba cumpliendo. Las sanciones que siguieron devastaron la economía iraní: la inflación superó el 40%, la moneda se desplomó y las exportaciones de petróleo cayeron de 2.5 millones de barriles diarios a menos de 500,000.
            </p>

            <div className="iran-fact-box">
              <h3>📊 Los números que duelen</h3>
              <ul>
                <li><strong>Reservas probadas de Irán:</strong> 157 mil millones de barriles (4ª del mundo)</li>
                <li><strong>Reservas probadas de Arabia Saudita:</strong> 267 mil millones de barriles</li>
                <li><strong>Exportaciones de petróleo iraní antes de sanciones:</strong> ~2.5M barriles/día</li>
                <li><strong>Exportaciones después de sanciones de Trump:</strong> ~500K barriles/día</li>
                <li><strong>Precio del petróleo durante la tensión 2019-2020:</strong> Subió hasta un 20%</li>
              </ul>
            </div>

            <p>
              Las sanciones no solo afectaron a Irán. Afectaron al mundo entero. Cada vez que Trump tuiteaba sobre Irán, el precio del petróleo subía. Y curiosamente, las empresas petroleras estadounidenses reportaban ganancias récord. ¿Coincidencia? Probablemente no.
            </p>
          </section>

          <section className="iran-section">
            <h2>Las redes familiares: el imperio invisible</h2>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/President_Trump_Meets_with_Senior_White_House_Advisors_%2849351678458%29.jpg/960px-President_Trump_Meets_with_Senior_White_House_Advisors_%2849351678458%29.jpg"
              alt="Trump meets with advisors"
              width={800}
              height={533}
              className="iran-inline-image"
            />
            <p>
              Aquí es donde la historia se pone interesante. Porque no se trata solo de Trump. Se trata de toda una red de intereses entrelazados que conectan la Casa Blanca con el negocio petrolero del Medio Oriente.
            </p>

            <div className="iran-timeline">
              <h3>🕐 Cronología de la codicia</h3>

              <div className="timeline-item">
                <span className="timeline-date">1980s</span>
                <p>La Trump Organization busca licencias para construir torres en Estambul, Dubai y otros puntos del Medio Oriente. Trump registra 15 marcas con su nombre en Turquía.</p>
              </div>

              <div className="timeline-item">
                <span className="timeline-date">2015</span>
                <p>Trump lanza su campaña presidencial. Promete repeatedly "quedarse con el petróleo" de Irak. Sus hijos Donald Jr. y Eric dirigen la empresa familiar, pero las conexiones con inversores del Golfo Pérsico se mantienen.</p>
              </div>

              <div className="timeline-item">
                <span className="timeline-date">2017</span>
                <p>Trump nombra a Rex Tillerson (ex-CEO de ExxonMobil) como Secretario de Estado. ExxonMobil tiene intereses directos en contratos petroleros en Irak y el Golfo Pérsico. Tillerson se opone a las sanciones contra Irán porque perjudican los negocios de Exxon.</p>
              </div>

              <div className="timeline-item">
                <span className="timeline-date">2018</span>
                <p>Trump retira a EE.UU. del acuerdo nuclear con Irán. Las sanciones se reimponen. El precio del petróleo sube. Las ganancias de ExxonMobil, Chevron y las empresas de la familia Koch aumentan un 30%.</p>
              </div>

              <div className="timeline-item">
                <span className="timeline-date">2019</span>
                <p>Ataques a petroleros en el Golfo de Omán. Trump culpa a Irán. Irán niega. El Estrecho de Ormuz —por donde pasa el 20% del petróleo mundial— se convierte en campo de batalla. Los precios del crudo se disparan.</p>
              </div>

              <div className="timeline-item">
                <span className="timeline-date">2020</span>
                <p>Asesinato de Soleimani. Irán responde. El mundo contiene la respiración. Trump dice que apuntó a sitios culturales de Irán (ilegal bajo derecho internacional). Luego se retracta. El petróleo sube un 4% en un día.</p>
              </div>

              <div className="timeline-item">
                <span className="timeline-date">2025-2026</span>
                <p>Trump regresa a la Casa Blanca. Las tensiones con Irán se reactivan. Las sanciones se endurecen. Y las empresas petroleras... bueno, ya sabes. <em>"Nobody knows oil better than me, believe me."</em></p>
              </div>
            </div>
          </section>

          <section className="iran-section">
            <h2>La mentira que todos saben pero nadie dice</h2>
            <p>
              La narrativa oficial es que las acciones de Trump contra Irán son por seguridad nacional, por el programa nuclear, por el apoyo a grupos militantes. Y sí, todo eso es cierto. Pero hay una verdad más incómoda que nadie en Washington quiere admitir:
            </p>

            <div className="iran-truth-box">
              <h3>🔥 La verdad incómoda</h3>
              <p>
                Estados Unidos no está en el Medio Oriente por la democracia. Está ahí por el petróleo. Y Trump es simplemente el primer presidente lo suficientemente honesto (o lo suficientemente arrogante) para decirlo en voz alta.
              </p>
              <p>
                Obama hizo lo mismo con drones y sanciones. Bush invadió Irak con mentiras sobre armas de destrucción masiva. Clinton bombardeó Sudán e Irak. Pero al menos ellos tenían la decencia de envolver todo en retórica democrática. Trump simplemente dice: <strong>"Queremos el petróleo"</strong>.
              </p>
              <p>
                Y eso, irónicamente, es lo más honesto que ha dicho un presidente estadounidense sobre el Medio Oriente en los últimos 50 años.
              </p>
            </div>

            <p>
              Las familias con conexiones petroleras —los Bush, los Cheney, los Koch, y sí, los Trump a través de sus negocios inmobiliarios en el Golfo— han tenido un interés consistente en la región durante décadas. No es conspiración. Es historia. Está documentado. Está en los registros. Está en los contratos.
            </p>

            <p>
              Lo que Trump hizo fue quitarle la máscara a todo el sistema. Y eso, paradójicamente, lo convierte en el presidente más revelador de la historia reciente de Estados Unidos. No porque sea bueno. Sino porque muestra exactamente cómo funciona la máquina.
            </p>
          </section>

          <section className="iran-section">
            <h2>El Estrecho de Ormuz: la pistola sobre la mesa</h2>
            <p>
              Cada vez que Trump amenaza a Irán, el mundo mira al Estrecho de Ormuz. Este estrecho de apenas 33 kilómetros de ancho en su punto más angosto es la arteria petrolera del planeta. Por ahí pasan cada día unos 21 millones de barriles de petróleo — aproximadamente el 20% del consumo mundial.
            </p>
            <p>
              Irán ha amenazado repetidamente con cerrar el estrecho si no puede exportar su petróleo. Estados Unidos ha respondido enviando portaaviones. Es un juego de póker nuclear donde las fichas son barriles de crudo y el bote es el destino de 8,000 millones de personas.
            </p>

            <div className="iran-quote-block">
              <p className="iran-quote">"If Iran closes the Strait of Hormuz, no oil will be able to pass through."</p>
              <span className="iran-quote-author">— Donald Trump, tweet del 23 de junio de 2019</span>
              <p className="iran-fact-check">Dato: Irán no tiene la capacidad militar de cerrar el estrecho permanentemente. Pero puede hacer la vida muy difícil durante semanas. Y en el mercado del petróleo, semanas son eternidades.</p>
            </div>
          </section>

          <section className="iran-section">
            <h2>Conclusión: el circo tiene dueño</h2>
            <p>
              La historia de Trump e Irán no es solo la historia de un presidente impredecible. Es la historia de cómo los intereses petroleros han moldeado la política exterior estadounidense durante décadas, y de cómo un magnate inmobiliario con reality show tuvo la oportunidad (y la temeridad) de llevar esa dinámica al extremo.
            </p>
            <p>
              ¿Es Trump un genio estratégico? No. ¿Es un villano de película? Tampoco. Es algo más complicado y más real: es un hombre de negocios que aplicó la lógica del deal-making a la geopolítica. Y cuando tu única herramienta es el dinero, todo el mundo se convierte en una transacción.
            </p>
            <p>
              El petróleo sigue ahí. Las sanciones siguen ahí. Las amenazas siguen ahí. Y mientras tanto, el mundo gira alrededor de un estrecho de 33 kilómetros, esperando que nadie apriete el botón equivocado.
            </p>

            <div className="iran-quote-block final-quote">
              <p className="iran-quote">"Nobody knows oil better than me. Believe me."</p>
              <span className="iran-quote-author">— Donald Trump, probablemente mientras contaba sus ganancias petroleras</span>
            </div>
          </section>
        </div>

        <Link href="/" className="back-link">← Volver a La Decadencia</Link>
      </article>
    </main>
  )
}
