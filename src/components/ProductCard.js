"use client";
import Link from 'next/link';
import Image from 'next/image';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigating to product detail
    // Mock functionality: get cart from local storage, add item, save
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = currentCart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      currentCart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(currentCart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <Link href={`/product/${product.id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image 
          src={product.image} 
          alt={product.name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {discount > 0 && <span className={styles.badge}>{discount}% OFF</span>}
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{product.name}</h3>
        <div className={styles.priceContainer}>
          <span className={styles.price}>₹{product.price.toLocaleString()}</span>
          {product.originalPrice > product.price && (
            <span className={styles.originalPrice}>₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
        <div className={styles.rating}>
          {'★'.repeat(Math.floor(product.rating))}
          {'☆'.repeat(5 - Math.floor(product.rating))}
          <span className={styles.reviews}>({product.reviews})</span>
        </div>
        <button className={styles.addToCartBtn} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </Link>
  );
}
