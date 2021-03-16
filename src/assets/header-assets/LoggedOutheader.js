import { useState } from "react";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";

// import { AuthStatus } from "../../context/AuthStatusContext";
// import { AuthModal } from "../../context/AuthModalContext";

const LoggedOutHeader = () => {
  // const [, setAuthStatus] = AuthStatus();
  // const [, setAuthModal] = AuthModal();
  const [dropDown, setDropDown] = useState(false);

  const styles = {
    display: "flex",
    alignItems: "center",
    position: "relative",
  };

  return (
    <div className="header__menu">
      <div style={styles} className="header__menu--mobile">
        <BsThreeDots
          style={{ cursor: "pointer" }}
          onClick={() => {
            setDropDown(!dropDown);
          }}
        />
        {dropDown && <DropDown />}
      </div>
      <ul className="header__menu--container">
        <li>
          <Link href="/">
            <a className="header__menu--container__link header__menu--container__link--d">
              Our story
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="header__menu--container__link header__menu--container__link--d">
              Membership
            </a>
          </Link>
        </li>
        <li>
          <Link href="new-story">
            <a className="header__menu--container__link header__menu--container__link--d">
              Write
            </a>
          </Link>
        </li>
        <li>
          <span
            className="header__menu--container__link header__menu--container__link--d"
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
            className="header__menu--container__link--button"
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
    <div className="header__menu--dropdown">
      <div className="header__menu--dropdown--user-options">
        <span>Our Story</span>
        <span>Membership</span>
        <Link href="/new-story">
          <span>Write</span>
        </Link>
        <Link href="/signin">
          <span>Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default LoggedOutHeader;
