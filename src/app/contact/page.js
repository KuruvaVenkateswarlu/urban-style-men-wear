"use client";
import styles from './page.module.css';

export default function Contact() {
  const whatsappNumber = "919014689625";
  const message = encodeURIComponent("Hi Urban Style, I'd like to get in touch.");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    e.target.reset();
  };

  return (
    <div className={`container ${styles.contactPage}`}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.subtitle}>We'd love to hear from you. Get in touch with our team.</p>

      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <div className={styles.infoCard}>
            <h3>Visit Our Store</h3>
            <p>123 Fashion Street, Style District</p>
            <p>Mumbai, Maharashtra 400001</p>
            <p>India</p>
          </div>

          <div className={styles.infoCard}>
            <h3>Contact Details</h3>
            <p><strong>Phone / WhatsApp:</strong> +91 9014689625</p>
            <p><strong>Email:</strong> support@urbanstyle.com</p>
            <p><strong>Hours:</strong> Mon - Sat: 10:00 AM - 9:00 PM</p>
          </div>

          <div className={styles.infoCard}>
            <h3>Quick Connect</h3>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className={styles.contactForm}>
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label>Name</label>
              <input type="text" required placeholder="Your Name" />
            </div>
            <div className={styles.formGroup}>
              <label>Email</label>
              <input type="email" required placeholder="your.email@example.com" />
            </div>
            <div className={styles.formGroup}>
              <label>Subject</label>
              <input type="text" required placeholder="How can we help?" />
            </div>
            <div className={styles.formGroup}>
              <label>Message</label>
              <textarea required rows="5" placeholder="Write your message here..."></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>Send Message</button>
          </form>
        </div>
      </div>

      <div className={styles.mapContainer}>
        <h2>Find Us</h2>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120653.1224056637!2d72.8055627!3d19.0833919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1689254641920!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
