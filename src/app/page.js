"use client";
import Image from "next/image";

import styles from "./page.module.css";
import projectCss from "../../components/layout/Project/Project.module.css";

import animator from "../../libs/page-elements-animation.js"

import Header from "../../components/layout/Header/Header.js"
import Section from "../../components/layout/Section/Section.js"
import Projects from "./Projects.js"

import { useEffect } from "react";

const title = "Dev Kumar";

const myPhrases = [
    "Android Developer",
    "Java | Shell | Gradle knowledge",
    "Self taught",
    "Front end website designer",
    "Adapting new programming languages",
    "Open Source project Developer"
];

const socialLinks = [
  {
    link: "https://www.instagram.com/innovative_cst?igsh=MWQ0bDFsbGJ0NmpobQ==",
    text: "Instagram"
  },
  {
    link: "https://www.github.com/DevVigilante",
    text: "GitHub"
  }
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
      <Header title={title} phrases={myPhrases} links={socialLinks} className={styles.fadein}/>
      <Section title="About me" content={aboutMe()} className={styles.fadein}/>
      <Projects/>
    </div>
  );
}
