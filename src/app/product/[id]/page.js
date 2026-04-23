"use client";
import { useState, useEffect, use } from 'react';
import Image from 'next/image';
import { products } from '@/lib/mockData';
import styles from './page.module.css';

export default function ProductDetail({ params }) {
  const unwrappedParams = use(params);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');

  useEffect(() => {
    const found = products.find(p => p.id === unwrappedParams.id);
    setProduct(found);
  }, [unwrappedParams.id]);

  if (!product) return <div className="container" style={{padding: "5rem 20px", textAlign: "center"}}>Loading product...</div>;

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  const handleAddToCart = () => {
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
    // We add the size to the ID to differentiate variants in cart
    const cartItemId = `${product.id}-${selectedSize}`;
    const existingItem = currentCart.find(item => item.id === cartItemId);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      currentCart.push({ 
        ...product, 
        id: cartItemId, // overriding id for cart uniqueness
        originalId: product.id,
        name: `${product.name} (Size: ${selectedSize})`,
        quantity: quantity 
      });
    }
    
    localStorage.setItem('cart', JSON.stringify(currentCart));
    alert(`${product.name} (Size ${selectedSize}) added to cart!`);
  };

  return (
    <div className={`container ${styles.productPage}`}>
      <div className={styles.productContainer}>
        <div className={styles.imageSection}>
          <div className={styles.mainImage}>
            <Image 
              src={product.image} 
              alt={product.name} 
              fill 
              style={{objectFit: 'cover'}} 
              priority
            />
            {discount > 0 && <span className={styles.badge}>{discount}% OFF</span>}
          </div>
        </div>

        <div className={styles.infoSection}>
          <p className={styles.category}>{product.category}</p>
          <h1 className={styles.title}>{product.name}</h1>
          
          <div className={styles.rating}>
            <span className={styles.stars}>
              {'★'.repeat(Math.floor(product.rating))}
              {'☆'.repeat(5 - Math.floor(product.rating))}
            </span>
            <span className={styles.reviews}>{product.reviews} Reviews</span>
          </div>

          <div className={styles.priceContainer}>
            <span className={styles.price}>₹{product.price.toLocaleString()}</span>
            {product.originalPrice > product.price && (
              <span className={styles.originalPrice}>₹{product.originalPrice.toLocaleString()}</span>
            )}
          </div>

          <p className={styles.description}>{product.description}</p>

          <div className={styles.sizeSection}>
            <h3>Select Size</h3>
            <div className={styles.sizeOptions}>
              {sizes.map(size => (
                <button 
                  key={size}
                  className={`${styles.sizeBtn} ${selectedSize === size ? styles.activeSize : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.actionSection}>
            <div className={styles.quantityControls}>
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            
            <button className={styles.addToCartBtn} onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>

          <div className={styles.metaInfo}>
            <p><strong>Free Delivery:</strong> On orders above ₹2000</p>
            <p><strong>Return Policy:</strong> 15 days easy returns</p>
            <p><strong>Secure Payment:</strong> 100% secure checkout</p>
          </div>
        </div>
      </div>
    </div>
  );
}
