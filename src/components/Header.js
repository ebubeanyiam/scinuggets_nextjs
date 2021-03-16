import Link from "next/link";
// import Image from "next/image";

import { User } from "../contexts/User";
import { getTime } from "../functions/AppProvider";
import LoggedInHeader from "../assets/header-assets/LoggedInHeader";
import LoggedOutHeader from "../assets/header-assets/LoggedOutheader";

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

          {/* <Link href="/">
            <Image
              className="header__logo-light"
              src="/images/scinuggets_logo.png"
              width={100}
              height={100}
              alt="Scinuggets Logo"
            />
          </Link> */}

          {user && window.location.pathname === "/" && (
            <div className={styles.greeting}>{<h1>{getTime()}</h1>}</div>
          )}
        </div>

        {!user ? (
          <LoggedOutHeader />
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
