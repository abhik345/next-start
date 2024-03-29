"use client";

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
    </div>
  );
};

export default About;
