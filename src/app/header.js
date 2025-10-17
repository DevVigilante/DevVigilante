"use client";
import styles from "./page.module.css";
import header from "./page.header.module.css";
import typingTextAni from "../utils.js"
import { useEffect } from "react";

export default function Header({title}) {
  useEffect(() => {
    const el = document.querySelector(`.${header.typing_text}`);
    const cursor = document.querySelector(`.${header.cursor}`);
    typingTextAni(el, cursor);
  }, []);
  return (
    <div className={`${styles.container} ${styles.fadein} ${header.intro}`}>
      <h1>{title}</h1>
      <p className={header.reserved_text}><span className={header.typing_text}></span><span className={header.cursor}>|</span></p>
      <div className={header.links}>
        <a href="https://github.com/DevVigilante" target="_blank">GitHub</a>
        <a href="https://www.instagram.com/innovative_cst?igsh=MWQ0bDFsbGJ0NmpobQ==" target="_blank">Instagram</a>
      </div>
    </div>
  );
}
