import React from 'react';
import styles from '../page.module.css'

const Feature = ({ title, description }) => {
  return (
    <div className={styles.feature}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

const FeatureSection = () => {
  const features = [
    { title: 'Feature 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Feature 2', description: 'Integer bibendum purus at urna gravida, in tincidunt velit eleifend.' },
    { title: 'Feature 3', description: 'Quisque ut lectus vel justo volutpat rhoncus.' },
  ];

  return (
    <section className={styles.features}>
      {features.map((feature, index) => (
        <Feature key={index} title={feature.title} description={feature.description} />
      ))}
    </section>
  );
};

export default FeatureSection;
