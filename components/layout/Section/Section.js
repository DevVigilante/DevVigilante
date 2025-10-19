"use client";
import styles from "./Section.module.css";

export default function Section({title, className, children}) {
  return (
    <section className={`${styles.section} ${className}`}>
      <h2 className={styles.heading}>{title}</h2>
      <div className={styles.para}>{children}</div>
    </section>
  );
}
