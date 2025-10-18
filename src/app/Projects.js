"use client";
import styles from "./page.module.css";
import section from "../../components/layout/Section/Section.module.css";
import projectCss from "../../components/layout/Project/Project.module.css";
import Project from "../../components/layout/Project/Project.js"

export default function Projects() {
  return (
    <section className={`${section.section}`}>
      <h2>Projects</h2>
      <div>
        <div className={styles.projects}>
          <Project
          className={projectCss.project}
          title="BlockIDLE"
          content="
          A Android app builder with a visual block-based editor including a builtin terminal.
          "
          link="https://github.com/Innovative-CST/BlockIDLE"
          img="https://raw.githubusercontent.com/Innovative-CST/BlockIDLE/refs/heads/main/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png"
          />
          <Project
          className={projectCss.project}
          title="Android Code Editor"
          content="
          A basic code editor for android that supports code editing with syntax highlighting.
          "
          link="https://github.com/Innovative-CST/Android-Code-Editor"
          img="https://raw.githubusercontent.com/Innovative-cst/Android-Code-Editor/dev/app/src/main/res/drawable/logo_black.png"
          />
        </div>
      </div>
    </section>
  );
}