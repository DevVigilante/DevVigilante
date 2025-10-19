"use client";
import styles from "./Section.module.css";

export default function Section({title, content, className}) {
  return (
    <section className={`${styles.section} ${className}`}>
      <h2 className={styles.heading}>{title}</h2>
      <div className={styles.para}>{content}</div>
    </section>
  );
}
