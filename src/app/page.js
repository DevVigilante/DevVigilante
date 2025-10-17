import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header.js"

export default function Home() {
  return (
    <div>
      <Header
      title="Dev Kumar"
      phrases = {[
        "Android Developer",
        "Java | Shell | Gradle knowledge",
        "Self taught",
        "Front end website designer",
        "Adapting new programming languages",
        "Open Source project Developer"
      ]}
      links={[
        {
          link: "https://www.instagram.com/innovative_cst?igsh=MWQ0bDFsbGJ0NmpobQ==",
          text: "Instagram"
        },
        {
          link: "https://www.github.com/DevVigilante",
          text: "GitHub"
        }
      ]}
      />
    </div>
  );
}
