import Link from "next/link";
import Image from "next/image";
import DropDown from "./DropDown";
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";

import styles from "../../../styles/header/loggedin.module.scss";

const LoggedInHeader = ({ dropDown, setDropDown, user }) => {
  return (
    <div className={styles.menu}>
      <ul className={styles.container}>
        {window.location.pathname === "/" && (
          <li className={styles.link}>
            <AiOutlineSearch className={styles.link_icon} />
          </li>
        )}
        <li className={styles.link}>
          <AiOutlineBell className={styles.link_icon} />
        </li>
        <li>
          <Link href="/">
            <a className={styles.link_button}>Upgrade</a>
          </Link>
        </li>
        <li className={styles.link}>
          <span
            onClick={() => {
              setDropDown(!dropDown);
            }}
          >
            {!user.photoURL ? (
              <Image
                width={29}
                height={29}
                src="/images/default_profile-img.png"
                alt="logged in user"
              />
            ) : (
              <img src={user.photoURL} alt="logged in user" />
            )}

            {dropDown && (
              <DropDown setDropDown={setDropDown} image={user.photoURL} />
            )}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default LoggedInHeader;
