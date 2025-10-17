"use client";
import styles from "./Section.module.css";

export default function Section({title, content}) {
  return (
    <section className={`${styles.section}`}>
      <h2>{title}</h2>
      <div>{content}</div>
    </section>
  );
}
