import Image from 'next/image'

const galleryImages = [
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/January_2025_Official_Presidential_Portrait_of_Donald_J._Trump.jpg/960px-January_2025_Official_Presidential_Portrait_of_Donald_J._Trump.jpg',
    caption: 'El retrato oficial: la cara de la decadencia dorada',
    alt: 'Trump official portrait 2025',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Trump_Day_1_Executive_Order_Signing.jpg/960px-Trump_Day_1_Executive_Order_Signing.jpg',
    caption: 'Firmando órdenes ejecutivas como quien firma autógrafos',
    alt: 'Trump signing executive orders',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Trump_protest_%2831082221546%29.jpg/960px-Trump_protest_%2831082221546%29.jpg',
    caption: 'Las protestas: el aplauso que nunca pidió',
    alt: 'Trump protest',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/White_House_Press_Briefing_%2849866894871%29.jpg/960px-White_House_Press_Briefing_%2849866894871%29.jpg',
    caption: 'Las ruedas de prensa: donde la democracia se convierte en reality',
    alt: 'White House press briefing',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Trump_rally_crowd_%2834229655760%29.jpg/960px-Trump_rally_crowd_%2834229655760%29.jpg',
    caption: 'El rally: donde el circo monta su carpa',
    alt: 'Trump rally crowd',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Trump_and_May_at_the_White_House_press_conference.jpg',
    caption: 'Diplomacia: cuando dos mundos chocan en la Casa Blanca',
    alt: 'Trump press conference',
  },
]

export default function ImageGallery() {
  return (
    <section className="image-gallery">
      <h2>📸 La Realidad en Imágenes</h2>
      <div className="gallery-grid">
        {galleryImages.map((img, i) => (
          <div key={i} className="gallery-item">
            <div className="gallery-img-wrapper">
              <Image
                src={img.url}
                alt={img.alt}
                fill
                loading="lazy"
                className="gallery-img"
              />
              <div className="gallery-overlay">
                <span className="gallery-caption">{img.caption}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
