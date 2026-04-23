"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          Urban Style
        </Link>
        
        <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
          <Link href="/categories" onClick={() => setIsOpen(false)}>Categories</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>

        <div className={styles.navIcons}>
          <button className={styles.iconBtn}>🔍</button>
          <Link href="/cart" className={styles.iconBtn}>🛒</Link>
          <button 
            className={styles.mobileMenuBtn} 
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
