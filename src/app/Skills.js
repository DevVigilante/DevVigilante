import styles from "./page.module.css";
import skillsCss from "./skills.module.css";

export default function Skills({children}) {
  return (
    <section className={`${styles.fadein} ${skillsCss.sectionStyle}`}>
      <h2 className={skillsCss.skillsHeadingStyle}>Skills</h2>
      <ul className={skillsCss.unorderedListStyle}>
        {children}
      </ul>
    </section>
  );
}