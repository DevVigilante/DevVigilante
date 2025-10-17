import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header.js"
export default function Home() {
  return (
    <div>
      <Header
      title="Dev Kumar"
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
