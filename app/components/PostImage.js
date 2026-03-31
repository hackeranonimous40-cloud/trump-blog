import Image from 'next/image'

const postImages = {
  1: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Trump_Day_1_Executive_Order_Signing.jpg/960px-Trump_Day_1_Executive_Order_Signing.jpg',
    quote: '"I love peace. Nobody loves peace more than me."',
    subtext: '*proceeds to start 3 wars*',
  },
  2: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/January_2025_Official_Presidential_Portrait_of_Donald_J._Trump.jpg/960px-January_2025_Official_Presidential_Portrait_of_Donald_J._Trump.jpg',
    quote: '"My towers are the tallest"',
    subtext: '*falls from grace in slow motion*',
  },
  3: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Trump_and_May_at_the_White_House_press_conference.jpg',
    quote: '"We were always friends"',
    subtext: '*everyone remembers the insults*',
  },
  4: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Trump_signing_Executive_Order_13780.jpg/960px-Trump_signing_Executive_Order_13780.jpg',
    quote: '"The Art of the Deal"',
    subtext: '*actually: The Art of the Contradiction*',
  },
  5: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Trump_protest_%2831082221546%29.jpg/960px-Trump_protest_%2831082221546%29.jpg',
    quote: '"The world respects me"',
    subtext: '*world cringes collectively*',
  },
  6: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/White_House_Press_Briefing_%2849866894871%29.jpg/960px-White_House_Press_Briefing_%2849866894871%29.jpg',
    quote: '"3 AM tweets are the best tweets"',
    subtext: '*diplomacy has left the chat*',
  },
}

export default function PostImage({ postId }) {
  const image = postImages[postId]

  if (!image) return null

  return (
    <div className="post-image">
      <Image
        src={image.url}
        alt={`Trump post ${postId}`}
        fill
        className="post-image-bg"
      />
      <div className="post-image-quote">
        <div className="quote-text">{image.quote}</div>
        <div className="quote-subtext">{image.subtext}</div>
      </div>
      <div className="post-image-badge">SATIRE</div>
    </div>
  )
}
