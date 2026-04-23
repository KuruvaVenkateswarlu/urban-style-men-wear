"use client";
import { useState } from 'react';
import styles from './FAQSection.module.css';
import { faqs } from '@/lib/mockData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`container ${styles.faqSection}`}>
      <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`${styles.faqItem} ${openIndex === index ? styles.active : ''}`}
          >
            <button 
              className={styles.faqQuestion} 
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              {faq.question}
              <span className={styles.icon}>{openIndex === index ? '−' : '+'}</span>
            </button>
            <div className={styles.faqAnswer}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
