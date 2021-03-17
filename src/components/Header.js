import Link from "next/link";

import { User } from "../contexts/User";

import { getTime } from "../functions/AppProvider";
import LoggedInHeader from "../assets/header/LoggedInHeader";
import LoggedOutHeader from "../assets/header/LoggedOutheader";

import styles from "../../styles/header.module.scss";

const Header = ({ dropDown, setDropDown }) => {
  const user = User();

  return (
    <div className={styles.container}>
      <nav className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <h1>Scinuggets</h1>
          </Link>

          <Link href="/">
            <a>
              <img src="/images/scinuggets_logo.png" alt="scinuggets logo" />
            </a>
          </Link>

          {user && window.location.pathname === "/" && (
            <div className={styles.greeting}>{<h1>{getTime()}</h1>}</div>
          )}
        </div>

        {!user ? (
          <LoggedOutHeader dropDown={dropDown} setDropDown={setDropDown} />
        ) : (
          <LoggedInHeader
            dropDown={dropDown}
            setDropDown={setDropDown}
            user={user}
          />
        )}
      </nav>
    </div>
  );
};

export default Header;
