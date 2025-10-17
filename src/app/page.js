import Image from "next/image";
import styles from "./page.module.css";
import Header from "../../components/layout/Header/Header.js"
import Section from "../../components/layout/Section/Section.js"
import Project from "../../components/layout/Project/Project.js"

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

function projects() {
  return (
    <div>
      <Project
      title="BlockIDLE"
      content="
      A Android app builder with a visual block-based editor including a builtin terminal.
      "
      link="https://github.com/Innovative-CST/BlockIDLE"
      img="https://raw.githubusercontent.com/Innovative-CST/BlockIDLE/refs/heads/main/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png"
      />
      <Project
      title="Android Code Editor"
      content="
      A basic code editor for android that supports code editing with syntax highlighting.
      "
      link="https://github.com/Innovative-CST/Android-Code-Editor"
      img="https://raw.githubusercontent.com/Innovative-cst/Android-Code-Editor/dev/app/src/main/res/drawable/logo_black.png"
      />
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Header title={title} phrases={myPhrases} links={socialLinks}/>
      <Section title="About me" content={aboutMe()}/>
      <Section title="Projects" content={projects()}/>
    </div>
  );
}
