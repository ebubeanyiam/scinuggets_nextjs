import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";

import styles from "../../../styles/header/loggedout.module.scss";

const LoggedOutHeader = ({ dropDown, setDropDown }) => {
  const style = {
    display: "flex",
    alignItems: "center",
    position: "relative",
  };

  return (
    <div className={styles.menu}>
      <div style={style} className={styles.mobile}>
        <BsThreeDots
          style={{ cursor: "pointer" }}
          onClick={() => {
            setDropDown(!dropDown);
          }}
        />
        {dropDown && <DropDown />}
      </div>

      <ul className={styles.menu_container}>
        <li>
          <Link href="/">
            <a className={styles.container_link}>Our story</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={styles.container_link}>Membership</a>
          </Link>
        </li>
        <li>
          <Link href="new-story">
            <a className={styles.container_link}>Write</a>
          </Link>
        </li>
        <li>
          <span
            className={styles.container_link}
            onClick={() => {
              setAuthModal(true);
              setAuthStatus("Login");
            }}
          >
            Sign In
          </span>
        </li>
        <li>
          <span
            className={styles.container_link_button}
            onClick={() => {
              setAuthModal(true);
              setAuthStatus("Signup");
            }}
          >
            Get Started
          </span>
        </li>
      </ul>
    </div>
  );
};

export const DropDown = () => {
  return (
    <div className={styles.dropdown}>
      <div>
        <span>Our Story</span>
        <span>Membership</span>
        <Link href="/">
          <a>
            <span>Write</span>
          </a>
        </Link>
        <Link href="/enter">
          <a>
            <span>Sign In</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default LoggedOutHeader;
