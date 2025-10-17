"use client";
import styles from "./Project.module.css";

export default function Section({title, content, link, img}) {
  return (
    <div className={styles.project}>
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{content}</p>
      <div class={styles.button_container}>
        <a href={link} class={styles.github_btn} target="_blank">View on GitHub</a>
      </div>
    </div>
  );
}
