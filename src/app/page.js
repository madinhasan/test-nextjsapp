
import styles from './page.module.css'
import FeatureSection from './component/Feature';

export default function Home() {
  return (
    <div>
      <section className={styles.hero}>
        <h1 className={styles.container}>Welcome to Our Website</h1>
        <p className={styles.container}>Your slogan or tagline goes here</p>
      </section>

      <FeatureSection/>

      <section className={styles.cta}>
        <h2 className={styles.container}>Call to Action</h2>
        <p className={styles.container}>Ready to get started? Contact us now!</p>
        <div className={styles.container}>
        <button className={styles.ctaButton}>Contact Us</button>
        </div>
      </section>
    </div>
  );
};
  
