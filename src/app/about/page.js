import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: "About Us | Urban Style Men Wear",
  description: "Learn more about Urban Style Men Wear, our journey, and our commitment to premium men's fashion.",
};

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <h1>Our Story</h1>
          <p>Redefining Men's Fashion with Elegance and Style</p>
        </div>
      </div>
      
      <div className={`container ${styles.content}`}>
        <div className={styles.grid}>
          <div className={styles.textSection}>
            <h2>Who We Are</h2>
            <p>Urban Style Men Wear was born out of a passion for high-quality, modern men's clothing. We believe that what you wear is an expression of who you are, and our mission is to help every man look his absolute best.</p>
            <p>From casual t-shirts to royal wedding wear, every piece in our collection is carefully curated to ensure superior fabric quality, perfect fit, and impeccable style.</p>
          </div>
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/images/hero_banner_men_1776879519075.png" 
                alt="Our Store" 
                fill 
                style={{objectFit: 'cover'}}
              />
            </div>
          </div>
        </div>

        <div className={styles.values}>
          <h2>Our Core Values</h2>
          <div className={styles.valueGrid}>
            <div className={styles.valueCard}>
              <h3>Premium Quality</h3>
              <p>We source only the finest fabrics and materials for our clothing, ensuring durability and ultimate comfort.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Modern Design</h3>
              <p>Our designs blend classic tailoring with contemporary trends, keeping you sharp and stylish.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Customer First</h3>
              <p>Your satisfaction is our priority. We are committed to providing an exceptional shopping experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
