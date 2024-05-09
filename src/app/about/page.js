"use client";

import Link from "next/link";
import styles from "../page.module.css";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  const handleNavigate = (name) => {
    router.push(name);
  };
  return (
    <div className="about_page">
      <h2>About Page</h2>
      <button
        className={styles.Home_link_btn}
        onClick={() => handleNavigate("/login")}
      >
        Go to Login Page
      </button>
      <br />
      <Link href="/about/aboutcollege">Go to About college page</Link>
      <br />
      <Link href="/about/aboutstudent">Go to About student page</Link>
    </div>
  );
};

export default About;
