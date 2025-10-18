"use client";
import styles from "./Project.module.css";

export default function Project({title, content, link, img, className}) {
  return (
    <div className={`${styles.project} ${className}`}>
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{content}</p>
      <div className={styles.button_container}>
        <a href={link} className={styles.github_btn} target="_blank">View on GitHub</a>
      </div>
    </div>
  );
}
