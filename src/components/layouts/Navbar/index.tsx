import { signIn } from "next-auth/react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className="big">Navbar</div>
      <button onClick={() => signIn()}>Sign In</button>
    </div>
  );
};

export default Navbar;
