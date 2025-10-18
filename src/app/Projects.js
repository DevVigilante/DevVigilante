"use client";
import styles from "./page.module.css";
import section from "../../components/layout/Section/Section.module.css";
import projectCss from "../../components/layout/Project/Project.module.css";
import Project from "../../components/layout/Project/Project.js";

export default function Projects() {
  const projects = [
    {
      title: "BlockIDLE",
      content:
        "An Android app builder with a visual block-based editor including a built-in terminal.",
      link: "https://github.com/Innovative-CST/BlockIDLE",
      img: "https://raw.githubusercontent.com/Innovative-CST/BlockIDLE/refs/heads/main/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png",
    },
    {
      title: "Android Code Editor",
      content:
        "A basic code editor for Android that supports code editing with syntax highlighting.",
      link: "https://github.com/Innovative-CST/Android-Code-Editor",
      img: "https://raw.githubusercontent.com/Innovative-cst/Android-Code-Editor/dev/app/src/main/res/drawable/logo_black.png",
    }
  ];

  return (
    <section className={`${section.section} ${styles.fadein}`}>
      <h2>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <Project
            key={index}
            className={projectCss.project}
            title={project.title}
            content={project.content}
            link={project.link}
            img={project.img}
          />
        ))}
      </div>
    </section>
  );
}