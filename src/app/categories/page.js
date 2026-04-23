import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/lib/mockData';
import styles from './page.module.css';

export const metadata = {
  title: "Categories | Urban Style Men Wear",
  description: "Browse our premium collection by categories: Shirts, T-Shirts, Jeans, Blazers, Wedding Wear, and Shoes.",
};

export default function Categories() {
  return (
    <div className={`container ${styles.categoriesPage}`}>
      <h1 className={styles.title}>Shop By Category</h1>
      <p className={styles.subtitle}>Explore our curated collections for every occasion.</p>
      
      <div className={styles.grid}>
        {categories.map((category, index) => (
          <Link href="/shop" key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image 
                src={category.image} 
                alt={category.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.overlay}>
              <h2>{category.name}</h2>
              <span>Explore Collection &rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
