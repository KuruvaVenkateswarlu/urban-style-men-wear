import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
  const whatsappNumber = "919014689625"; // User provided number: 9014689625, added 91 for India
  const message = encodeURIComponent("Hi Urban Style, I'm interested in your clothing collection.");
  
  return (
    <a 
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappFloat}
      aria-label="Contact us on WhatsApp"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp" 
        className={styles.icon}
      />
    </a>
  );
}
