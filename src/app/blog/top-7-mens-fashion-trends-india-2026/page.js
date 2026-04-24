import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: "Top 7 Men's Fashion Trends in India for 2026 | Urban Style",
  description: "Upgrade your wardrobe with the latest premium styles from Urban Style. Discover the top 7 men's fashion trends in India for 2026.",
  keywords: "men's fashion India, latest fashion trends for men, premium men clothing, stylish men outfits India, men's wear 2026"
};

const trends = [
  {
    id: 1,
    title: "Oversized Shirts",
    description: "Relaxed fit oversized shirts are becoming a major trend for casual streetwear looks.",
    image: "/images/blog/trend_oversized_shirts.png",
    alt: "Stylish Indian male model wearing oversized premium shirt in urban street setting"
  },
  {
    id: 2,
    title: "Neutral Tones",
    description: "Beige, cream, olive, and earthy shades are dominating premium fashion collections.",
    image: "/images/blog/trend_neutral_tones.png",
    alt: "Fashionable male model wearing beige premium outfit in luxury setting"
  },
  {
    id: 3,
    title: "Smart Casual Blazers",
    description: "Lightweight blazers paired with jeans create a perfect semi-formal style.",
    image: "/images/blog/trend_smart_blazers.png",
    alt: "Indian male model wearing blazer with jeans in modern city background"
  },
  {
    id: 4,
    title: "Wide Fit Trousers",
    description: "Comfortable wide-fit trousers are replacing skinny fits in modern wardrobes.",
    image: "/images/blog/trend_wide_trousers.png",
    alt: "Male model wearing wide trousers and fitted shirt in stylish studio"
  },
  {
    id: 5,
    title: "Monochrome Looks",
    description: "Single-color outfits create a sharp and premium appearance.",
    image: "/images/blog/trend_monochrome.png",
    alt: "Male model wearing all-black luxury monochrome outfit"
  },
  {
    id: 6,
    title: "Minimal Sneakers",
    description: "Clean white sneakers remain a timeless essential.",
    image: "/images/blog/trend_minimal_sneakers.png",
    alt: "Premium white sneakers with men's casual fashion styling"
  },
  {
    id: 7,
    title: "Ethnic Fusion Wear",
    description: "Traditional kurtas with modern styling are trending for festive occasions.",
    image: "/images/blog/trend_ethnic_fusion.png",
    alt: "Indian male model wearing modern ethnic kurta fusion outfit"
  }
];

export default function FashionTrends2026() {
  return (
    <article className={styles.articleContainer}>
      <header className={styles.heroSection}>
        <Image
          src="/images/blog/hero_fashion_2026.png"
          alt="Top 7 Men's Fashion Trends in India for 2026"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Top 7 Men’s Fashion Trends in India for 2026</h1>
          <p className={styles.subtitle}>Upgrade your wardrobe with the latest premium styles from Urban Style</p>
        </div>
      </header>

      <div className={styles.contentWrapper}>
        <section className={styles.introSection}>
          <p>
            Fashion is evolving rapidly in India, and modern men are choosing styles that combine comfort, confidence, and class. Here are the top trends dominating 2026.
          </p>
        </section>

        <section className={styles.trendsWrapper}>
          {trends.map((trend, index) => (
            <div 
              key={trend.id} 
              className={index % 2 === 0 ? styles.trendRow : styles.trendRowReverse}
            >
              <div className={styles.trendImageWrapper}>
                <Image
                  src={trend.image}
                  alt={trend.alt}
                  fill
                  className={styles.trendImage}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className={styles.trendContent}>
                <div className={styles.trendNumber}>0{trend.id}</div>
                <h2 className={styles.trendTitle}>{trend.title}</h2>
                <p className={styles.trendDescription}>{trend.description}</p>
              </div>
            </div>
          ))}
        </section>
      </div>

      <section className={styles.closingSection}>
        <p className={styles.closingText}>
          Visit Urban Style to explore the latest men’s fashion collections and upgrade your style in 2026.
        </p>
        <Link href="/shop" className={styles.ctaButton}>
          Shop Latest Collection
        </Link>
      </section>
    </article>
  );
}
