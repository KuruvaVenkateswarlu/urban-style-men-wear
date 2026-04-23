"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(savedCart);
    setIsLoaded(true);
  }, []);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (!isLoaded) return <div className="container" style={{padding: "5rem 20px", textAlign: "center"}}>Loading...</div>;

  return (
    <div className={`container ${styles.cartPage}`}>
      <h1 className={styles.title}>Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className={styles.emptyCart}>
          <p>Your cart is currently empty.</p>
          <Link href="/shop" className={styles.continueBtn}>Continue Shopping</Link>
        </div>
      ) : (
        <div className={styles.cartContainer}>
          <div className={styles.cartItems}>
            <div className={styles.cartHeader}>
              <span>Product</span>
              <span>Quantity</span>
              <span>Total</span>
            </div>
            
            {cartItems.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemInfo}>
                  <div className={styles.itemImage}>
                    <Image src={item.image} alt={item.name} fill style={{objectFit: 'cover'}} />
                  </div>
                  <div>
                    <h3>{item.name}</h3>
                    <p className={styles.itemPrice}>₹{item.price.toLocaleString()}</p>
                    <button onClick={() => removeItem(item.id)} className={styles.removeBtn}>Remove</button>
                  </div>
                </div>
                
                <div className={styles.quantityControls}>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                
                <div className={styles.itemTotal}>
                  ₹{(item.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.cartSummary}>
            <h3>Order Summary</h3>
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className={`${styles.summaryRow} ${styles.totalRow}`}>
              <span>Total</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>
            <Link href="/checkout" className={styles.checkoutBtn} style={{display: 'block', textAlign: 'center'}}>Proceed to Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
}
