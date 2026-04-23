import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import ProductCard from "@/components/ProductCard";
import { products, categories, faqs } from "@/lib/mockData";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  const bestSellers = products.filter(p => p.isBestSeller);
  const newArrivals = products.filter(p => p.isNew);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="/images/hero_banner_men_1776879519075.png" 
            alt="Premium Men's Fashion"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>Upgrade Your Style</h1>
          <p className={styles.heroSubtitle}>Discover the finest collection of premium men's clothing designed for the modern gentleman.</p>
          <Link href="/shop" className={styles.primaryButton}>
            Shop Collection
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className={`container ${styles.section}`}>
        <h2 className={styles.sectionTitle}>Shop by Category</h2>
        <div className={styles.categoriesGrid}>
          {categories.map((category, index) => (
            <Link href={`/categories`} key={index} className={styles.categoryCard}>
              <div className={styles.categoryImageWrapper}>
                <Image 
                  src={category.image} 
                  alt={category.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.categoryOverlay}>
                <h3>{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className={styles.bgLight}>
        <div className={`container ${styles.section}`}>
          <h2 className={styles.sectionTitle}>Best Sellers</h2>
          <div className={styles.productsGrid}>
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Limited Offer Banner */}
      <section className={styles.offerBanner}>
        <div className={`container ${styles.offerContent}`}>
          <h2>Limited Time Offer</h2>
          <p>Get flat 20% off on all wedding wear. Use code: <strong>ROYAL20</strong></p>
          <Link href="/shop" className={styles.secondaryButton}>
            Shop Now
          </Link>
        </div>
      </section>

      {/* New Arrivals */}
      <section className={`container ${styles.section}`}>
        <h2 className={styles.sectionTitle}>New Arrivals</h2>
        <div className={styles.productsGrid}>
          {newArrivals.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className={styles.bgLight}>
        <div className={`container ${styles.section}`}>
          <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
          <div className={styles.reviewsGrid}>
            {[
              { name: "Rahul S.", review: "The quality of the shirts is absolutely top-notch. Highly recommended!", rating: 5 },
              { name: "Vikram M.", review: "Bought a sherwani for my brother's wedding. It fit perfectly and looked royal.", rating: 5 },
              { name: "Aman K.", review: "Great collection and very fast delivery. The jeans are very comfortable.", rating: 4 }
            ].map((review, i) => (
              <div key={i} className={styles.reviewCard}>
                <div className={styles.stars}>{'★'.repeat(review.rating)}</div>
                <p className={styles.reviewText}>"{review.review}"</p>
                <h4 className={styles.reviewerName}>- {review.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Newsletter */}
      <section className={`container ${styles.section} ${styles.newsletterSection}`}>
        <div className={styles.newsletterBox}>
          <h2>Join Our Club</h2>
          <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}
