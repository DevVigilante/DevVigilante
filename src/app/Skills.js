import styles from "./page.module.css";

export default function Skills({children}) {
  const sectionStyle = {
    padding: "1em 2em",
    margin: "auto",
    backgroundColor: "#0d1117",
    borderBottom: "1px solid #9f9f9f"
  };

  const skillsHeadingStyle = {
    fontSize: "1.8em",
    margin: "0.5em 0em",
    color: "var(--primary-color)"
  };
  
  const unorderedListStyle = {
    color: "#c9d1d9",
    fontSize: "1.1rem",
    padding: "1rem"
  };

  return (
    <section className={styles.fadein} style={sectionStyle}>
      <h2 style={skillsHeadingStyle}>Skills</h2>
      <ul style={unorderedListStyle}>
        {children}
      </ul>
    </section>
  );
}