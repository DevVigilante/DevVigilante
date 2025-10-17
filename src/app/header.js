import styles from "./page.module.css";
import header from "./page.header.module.css";

export default function Header() {
  return (
    <div className={`${styles.container} ${styles.fadein} ${header.intro}`}>
      <h1>Dev Kumar</h1>
      <p className={header.reserved_text}><span className={header.typing_text}></span><span className={header.cursor}>|</span></p>
      <div className={header.links}>
        <a href="https://github.com/DevVigilante" target="_blank">GitHub</a>
        <a href="https://www.instagram.com/innovative_cst?igsh=MWQ0bDFsbGJ0NmpobQ==" target="_blank">Instagram</a>
      </div>
    </div>
  );
}