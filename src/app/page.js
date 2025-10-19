"use client";
import Image from "next/image";

import styles from "./page.module.css";
import projectCss from "../../components/layout/Project/Project.module.css";

import animator from "../../libs/page-elements-animation.js"

import Header from "../../components/layout/Header/Header.js"
import Section from "../../components/layout/Section/Section.js"
import Projects from "./Projects.js"
import Skills from "./Skills.js"

import { useEffect } from "react";

const title = "Dev Kumar";

const myPhrases = [
    "Android Developer",
    "Front end website designer",
    "Java | Shell | Gradle skills",
    "Self taught",
    "Adapting new programming languages",
    "Open Source project Developer"
];

const socialLinks = [
  {
    link: "https://www.instagram.com/innovative_cst?igsh=MWQ0bDFsbGJ0NmpobQ==",
    text: "Instagram",
    background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)"
  },
  {
    link: "https://www.github.com/DevVigilante",
    text: "GitHub",
    background: "#000000"
  }
];

const skills = [
  "Java, HTML, CSS, JavaScript, Shell/Bash",
  "Gradle, JDK, Build Systems",
  "Android SDK",
  "Nextjs, React, Nodejs",
  "Android Environment",
  "Git, GitHub Actions, CI/CD"
];

function aboutMe() {
  return (
    <p>
      I'm a self taught Android developer who loves building developer tools and modern Android apps. I specialize in Java, Gradle, and custom IDEs for mobile platforms.
    </p>
  );
}

export default function Home() {
  useEffect(() => {
    const projects = document.querySelectorAll(`.${projectCss.project}`);
    animator(projects, projectCss.show);
    const elements = document.querySelectorAll(`.${styles.fadein}`);
    animator(elements, styles.visible);
  }, []);
  return (
    <div className={styles.page}>
      <Header phrases={myPhrases} links={socialLinks} className={styles.fadein}/>
      <Section title="About me" content={aboutMe()} className={styles.fadein}/>
      <Projects/>
      <Skills>
        {skills.map((item, index) => (
          <li>{item}</li>
        ))}
      </Skills>
    </div>
  );
}
