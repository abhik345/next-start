import Link from "next/link";
import styles from "../page.module.css";

const Login = () => {
    return (
      <div className="login">
        <h1>Hello Login Page</h1>
        <Link href="/">
          <button className={styles.Home_link_btn}>Home</button>
        </Link>
      </div>
    );
}

export default Login;