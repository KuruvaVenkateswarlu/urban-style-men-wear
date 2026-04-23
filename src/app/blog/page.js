import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: "Blog | Urban Style Men Wear",
  description: "Read the latest trends, styling tips, and news in men's fashion.",
};

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Men's Formal Wear",
    excerpt: "Discover the essential rules of dressing sharp for any formal occasion.",
    image: "/images/shirt_product_1776879570061.png",
    date: "April 15, 2026",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "How to Style Denim for a Casual Day Out",
    excerpt: "Learn how to effortlessly pull off a classic denim look.",
    image: "/images/jeans_product_1776879727850.png",
    date: "April 10, 2026",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Choosing the Perfect Wedding Sherwani",
    excerpt: "Make your big day memorable with the right traditional attire.",
    image: "/images/wedding_wear_product_1776879797382.png",
    date: "April 05, 2026",
    readTime: "6 min read"
  }
];

export default function Blog() {
  return (
    <div className={`container ${styles.blogPage}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>Style Journal</h1>
        <p className={styles.subtitle}>Insights, trends, and tips for the modern man.</p>
      </div>

      <div className={styles.grid}>
        {blogPosts.map(post => (
          <article key={post.id} className={styles.blogCard}>
            <div className={styles.imageWrapper}>
              <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                style={{objectFit: 'cover'}} 
              />
            </div>
            <div className={styles.content}>
              <div className={styles.meta}>
                <span>{post.date}</span>
                <span className={styles.dot}>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <Link href="#" className={styles.readMore}>
                Read Article &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
