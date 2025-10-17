import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header.js"

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

export default function Home() {
  return (
    <div>
      <Header
      title = {title}
      phrases = {myPhrases}
      links = {socialLinks}
      />
    </div>
  );
}
