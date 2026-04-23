import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerCol}>
          <h3 className={styles.footerLogo}>Urban Style</h3>
          <p>Upgrade your style with our premium collection of men's clothing. Modern, stylish, and perfect for every occasion.</p>
        </div>
        
        <div className={styles.footerCol}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/shop">Shop Collection</Link></li>
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className={styles.footerCol}>
          <h4>Customer Service</h4>
          <ul>
            <li><Link href="/contact">Shipping Policy</Link></li>
            <li><Link href="/contact">Returns & Exchanges</Link></li>
            <li><Link href="/contact">Size Guide</Link></li>
            <li><Link href="/contact">FAQs</Link></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Contact Us</h4>
          <p>Phone/WhatsApp: +91 9014689625</p>
          <p>Email: support@urbanstyle.com</p>
          <div className={styles.socials}>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Urban Style Men Wear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
