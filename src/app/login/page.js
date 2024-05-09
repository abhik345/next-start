"use client";
import Link from "next/link";
import styles from "../page.module.css";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const navigate = (page) => {
    router.push(`/login/${page}`);
  };
  return (
    <div className="login">
      <h1>Hello Login Page</h1>
      <Link href="/">
        <button className={styles.Home_link_btn}>Home</button>
      </Link>
      <br />
      <br />
      <button onClick={() => navigate("loginstudent")}>
        Go To student Login Page
      </button>
      <br />
      <br />
      <button onClick={() => navigate("loginteacher")}>
        Go To teacher Login Page
      </button>
    </div>
  );
};

export default Login;
