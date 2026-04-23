"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function Checkout() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (savedCart.length === 0) {
      router.push('/shop');
    } else {
      setCartItems(savedCart);
      setIsLoaded(true);
    }
  }, [router]);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    alert("Order placed successfully! (Mock COD Order)");
    localStorage.removeItem('cart');
    router.push('/');
  };

  if (!isLoaded) return <div className="container" style={{padding: "5rem 20px", textAlign: "center"}}>Loading...</div>;

  return (
    <div className={`container ${styles.checkoutPage}`}>
      <h1 className={styles.title}>Checkout</h1>
      
      <div className={styles.checkoutContainer}>
        <form className={styles.formSection} onSubmit={handlePlaceOrder}>
          <h2>Shipping Information</h2>
          <div className={styles.formGroup}>
            <label>Full Name</label>
            <input type="text" required placeholder="John Doe" />
          </div>
          <div className={styles.formGroup}>
            <label>Email Address</label>
            <input type="email" required placeholder="john@example.com" />
          </div>
          <div className={styles.formGroup}>
            <label>Phone Number</label>
            <input type="tel" required placeholder="1234567890" />
          </div>
          <div className={styles.formGroup}>
            <label>Address</label>
            <textarea required rows="3" placeholder="123 Main St, Apt 4B"></textarea>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>City</label>
              <input type="text" required placeholder="Mumbai" />
            </div>
            <div className={styles.formGroup}>
              <label>Postal Code</label>
              <input type="text" required placeholder="400001" />
            </div>
          </div>
          
          <h2 style={{marginTop: '2rem'}}>Payment Method</h2>
          <div className={styles.paymentMethod}>
            <input type="radio" id="cod" name="payment" value="cod" defaultChecked />
            <label htmlFor="cod">Cash on Delivery (COD)</label>
          </div>

          <button type="submit" className={styles.placeOrderBtn}>Place Order (₹{subtotal.toLocaleString()})</button>
        </form>
        
        <div className={styles.orderSummary}>
          <h2>Order Summary</h2>
          <div className={styles.summaryItems}>
            {cartItems.map(item => (
              <div key={item.id} className={styles.summaryItem}>
                <div className={styles.itemHeader}>
                  <span>{item.quantity}x {item.name}</span>
                  <span>₹{(item.price * item.quantity).toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.summaryTotals}>
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
          </div>
        </div>
      </div>
    </div>
  );
}
