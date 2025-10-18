"use client";
import header from "./Header.module.css";
import typingTextAni from "../../../libs/typing-text-animation.js"
import { useEffect } from "react";

export default function Header({title, links = [], phrases, className}) {
  useEffect(() => {
    const el = document.querySelector(`.${header.typing_text}`);
    const cursor = document.querySelector(`.${header.cursor}`);
    typingTextAni(el, cursor, phrases);
  }, []);
  return (
    <div className={`${className} ${header.intro}`}>
      <h1>{title}</h1>
      <p className={header.reserved_text}><span className={header.typing_text}></span><span className={header.cursor}>|</span></p>
      <div className={header.links}>
        {links.map((el, index) => (
          <a key={index} href={el.link} target="_blank">
            {el.text}
          </a>
        ))}
      </div>
    </div>
  );
}
