"use client";
import Image from "next/image";

import styles from "./page.module.css";
import projectCss from "../../components/layout/Project/Project.module.css";
import TimelineItemCss from "../../components/layout/TimelineItem/TimelineItem.module.css";

import animator from "../../libs/page-elements-animation.js"

import Header from "../../components/layout/Header/Header.js"
import Section from "../../components/layout/Section/Section.js"
import Projects from "./Projects.js"
import Skills from "./Skills.js"
import Timeline from  "../../components/layout/Timeline/Timeline.js"
import TimelineItem from  "../../components/layout/TimelineItem/TimelineItem.js"
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

const timelineData = [
  {
    time: "20 September 2019",
    title: "First Spark of Interest",
    content: (
      <>
        <p>
          Back in 2019, I developed an interest in technology after noticing
          people creating websites and apps. I didn’t fully understand it, but I
          knew I wanted to learn how to build things digitally.
        </p>
        <p>
          I started watching YouTube tutorials and experimenting with HTML —
          that’s where my coding journey began.
        </p>
      </>
    ),
  },
  {
    time: "20 March 2020",
    title: "Lockdown & Opportunity",
    content: (
      <>
        <p>
          When the nationwide lockdown began, I was in Class 6 and had a lot of
          free time. With schools closed, I took coding seriously and spent most
          of my days learning web development.
        </p>
        <p>
          That period turned out to be one of the most productive times in my
          life — it helped me build consistency and self-learning habits.
        </p>
      </>
    ),
  },
  {
    time: "August 2020",
    title: "School Resumes Online",
    content: (
      <>
        <p>
          Classes resumed online, and it felt strange to study through a screen.
          Still, I continued learning to code in parallel, building a balance
          between schoolwork and programming.
        </p>
        <p>
          I also improved my English and Math to strengthen my understanding of
          technical topics.
        </p>
      </>
    ),
  },
  {
    time: "October 2021",
    title: "Temptation vs. Integrity",
    content: (
      <>
        <p>
          During online exams, I was tempted to cheat to secure better marks, but
          I remembered my values and decided to stay honest. Even if my marks
          were average, I was proud of my integrity.
        </p>
        <p>
          That experience taught me that true success comes from effort and
          consistency, not shortcuts.
        </p>
      </>
    ),
  },
  {
    time: "Late 2021",
    title: "Balanced Efforts",
    content: (
      <>
        <p>
          After my exams, I became more consistent. I balanced academics and
          coding equally. By then, I had learned HTML, CSS, and was moving on to
          JavaScript.
        </p>
        <p>
          I finally started feeling confident — growing as both a student and a
          budding developer.
        </p>
      </>
    ),
  },
  {
    time: "March 2021",
    title: "Temptation Returns",
    content: (
      <>
        <p>
          During another online exam, I again faced the choice between honesty
          and shortcuts. I decided to stay true to myself and take the exam
          sincerely.
        </p>
        <p>
          Even though my marks were lower, I maintained my integrity — something
          I still take pride in today.
        </p>
      </>
    ),
  },
  {
    time: "May 2021",
    title: "Curiosity Turns Into Direction",
    content: (
      <>
        <p>
          After completing JavaScript, I started exploring cybersecurity out of
          curiosity. Watching a movie about hacking sparked my interest in how
          systems really work.
        </p>
        <p>
          I began learning about ethical hacking, networking, and penetration
          testing through YouTube and long-form tutorials.
        </p>
        <p>
          That was when I first realized that technology is not just about
          creativity — it’s also about problem-solving and responsibility.
        </p>
      </>
    ),
  },
  {
    time: "September 2021",
    title: "Reality Check and New Beginnings",
    content: (
      <>
        <p>
          When schools reopened, I noticed how fast technology evolves and how
          much there was still to learn. I discovered Java and realized it was
          key to Android development.
        </p>
        <p>
          That very day, I began learning Java — marking the beginning of my
          journey into app development.
        </p>
      </>
    ),
  },
  {
    time: "Oct 2021 – Jan 2022",
    title: "Java Journey",
    content: (
      <>
        <p>
          I spent these months mastering core Java concepts such as{" "}
          <strong>Abstraction</strong>, <strong>Encapsulation</strong>,{" "}
          <strong>Inheritance</strong>, and <strong>Polymorphism</strong>.
        </p>
        <p>
          As I progressed, I became deeply passionate about software
          development. By January 2022, I was ready to dive into Android.
        </p>
      </>
    ),
  },
  {
    time: "Feb 2022 – Apr 2022",
    title: "Academic Pressure and a Lesson",
    content: (
      <>
        <p>
          I focused on academics, but scored lower than expected in Mathematics.
          Instead of scolding me, my father encouraged me with a simple line:
          <em>“Do better next time.”</em>
        </p>
        <p>
          That moment taught me resilience and the importance of learning from
          mistakes.
        </p>
      </>
    ),
  },
  {
    time: "Apr 2022 – Oct 2022",
    title: "Leveling Up in Android Development",
    content: (
      <>
        <p>
          By 9th grade, I could read and understand official Android
          documentation. I stopped relying on tutorials and started building my
          own small Android apps.
        </p>
        <p>
          I also learned Git and GitHub, beginning my open-source contributions.
        </p>
      </>
    ),
  },
  {
    time: "Nov 2022 – Mar 2023",
    title: "Sketchware Pro & Helping Out",
    content: (
      <>
        <p>
          During this period, I joined the{" "}
          <strong>Sketchware Pro</strong> project and contributed features and
          fixes. This was my first real experience collaborating in open-source.
        </p>
        <p>
          It helped me understand teamwork and version control better.
        </p>
      </>
    ),
  },
  {
    time: "April 2023",
    title: "First Public Project & Board Year",
    content: (
      <>
        <p>
          In 10th grade, I released my first public project on GitHub —{" "}
          <strong>Android Code Editor</strong>. It was a big step forward, as I
          had finally created something fully by myself.
        </p>
        <p>
          Despite being a board year, I managed to stay consistent with my
          projects while balancing academics.
        </p>
      </>
    ),
  },
  {
    time: "Sep 2023 – Feb 2024",
    title: "New Ideas, New Projects",
    content: (
      <>
        <p>
          After finishing my first major project, I started experimenting with
          visual coding. I began developing a platform for block-based website
          creation called <strong>Block Web Builder</strong>.
        </p>
        <p>
          It was an ambitious project, and though I paused it later, it expanded
          my creativity and problem-solving skills.
        </p>
      </>
    ),
  },
  {
    time: "February 2024",
    title: "Board Exam & New Project",
    content: (
      <>
        <p>
          On <strong>16 February 2024</strong>, I faced my first board exam.
          Despite unexpected subject changes, I managed to handle it with
          confidence.
        </p>
        <p>
          Just two days later, I launched a new GitHub project:{" "}
          <strong>AndroidAppStudio</strong>, which became the foundation of my
          future work.
        </p>
      </>
    ),
  },
  {
    time: "March 2024",
    title: "End of 10th Board",
    content: (
      <>
        <p>
          <strong>11 March</strong> marked the end of my old school journey. It was
          emotional yet empowering, as I transitioned from a student to an
          developer focused on growth and learning.
        </p>
      </>
    ),
  },
  {
    time: "April 2024 – March 2025",
    title: "Still Building, Still Dreaming",
    content: (
      <>
        <p>
          During this period, I was in <strong>11th grade</strong>, continuing
          development on <strong>AndroidAppStudio</strong>, which evolved into{" "}
          <strong>BlockIDLE</strong> — a block-based coding interface for Android.
        </p>
        <p>
          I also learned <em>shell/bash</em> scripting and studied{" "}
          <em>Python</em> and <em>MySQL</em> basics.
        </p>
      </>
    )
  },
  {
    time: "March 2025 – June 2025",
    title: "DSA Questions and project continue",
    content: (
      <>
        <p>
          I focused mainly on improving <strong>Block IDLE</strong> and practicing{" "}
          <strong>DSA questions</strong>.
        </p>
      </>
    )
  },
  {
    time: "June 2025 – October 2025",
    title: "Focused on physics",
    content: (
      <>
        <p>
          I paused coding activities to prepare for my{" "}
          <strong>12th board exams</strong>, studying through{" "}
          <strong>YouTube</strong> and other online resources.
        </p>
        <p>
          From curiosity to creation, I’ve grown into a self-taught developer
          passionate about building tools that empower others.
        </p>
        <p>This is just the beginning of my journey.</p>
      </>
    )
  }
];

export default function Home() {
  useEffect(() => {
    const projects = document.querySelectorAll(`.${projectCss.project}`);
    animator(projects, projectCss.show);
    const elements = document.querySelectorAll(`.${styles.fadein}`);
    animator(elements, styles.visible);
    const timelineItems = document.querySelectorAll(`.${TimelineItemCss.timeline_item}`);
    animator(timelineItems, TimelineItemCss.visible);
  }, []);
  return (
    <div className={styles.page}>
      <Header phrases={myPhrases} links={socialLinks} className={styles.fadein}/>
      <Section title="About me" className={styles.fadein}>
        <p>
          I'm a self taught Android developer who loves building developer tools and modern Android apps. I specialize in Java, Gradle, and custom IDEs for mobile platforms.
        </p>
      </Section>
      <Projects/>
      <Skills>
        {skills.map((item, index) => (
          <li>{item}</li>
        ))}
      </Skills>
      <Section title="My journey">
        <Timeline>
          {timelineData.map((item, index) => (
            <TimelineItem key={index} title={item.title} time={item.time}>
              {item.content}
            </TimelineItem>
          ))}
        </Timeline>
      </Section>
    </div>
  );
}
