"use client";
import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/lib/mockData';
import styles from './page.module.css';

export default function Shop() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={`container ${styles.shopPage}`}>
      <h1 className={styles.title}>Our Collection</h1>
      
      <div className={styles.controls}>
        <div className={styles.searchBar}>
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className={styles.filters}>
          <button 
            className={selectedCategory === 'All' ? styles.activeFilter : ''}
            onClick={() => setSelectedCategory('All')}
          >
            All
          </button>
          {categories.map((cat, i) => (
            <button 
              key={i}
              className={selectedCategory === cat.name ? styles.activeFilter : ''}
              onClick={() => setSelectedCategory(cat.name)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className={styles.noResults}>No products found.</p>
        )}
      </div>
    </div>
  );
}
