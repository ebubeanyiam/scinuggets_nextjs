import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import server from "../../firebase/config";
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";

// import DropDown from "./DropDown";

import styles from "../../../styles/header-styles/loggedin.module.scss";

const LoggedInHeader = ({ dropDown, setDropDown, user }) => {
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    server
      .firestore()
      .collection("users")
      .doc(user.uid)
      .get()
      .then((doc) => {
        if (doc.data()) {
          setProfileImage(doc.data().photoUrl);
        }
      });
  }, [user]);

  return (
    <div className={`${styles.loggedin} menu`}>
      <ul className="header__menu--container">
        {window.location.pathname === "/" && (
          <li className="header__menu--container__link">
            <AiOutlineSearch className="header__menu--container__link--icon" />
          </li>
        )}
        <li className="header__menu--container__link">
          <AiOutlineBell className="header__menu--container__link--icon" />
        </li>
        <li>
          <Link href="/">
            <a className="header__menu--container__link--button__logged-in">
              Upgrade
            </a>
          </Link>
        </li>
        <li className="header__menu--container__link">
          <span
            onClick={() => {
              setDropDown(!dropDown);
            }}
          >
            {!profileImage ? (
              <Image
                width={29}
                height={29}
                src="/images/default_profile-img.png"
                alt="logged in user"
              />
            ) : (
              <img src={profileImage} alt="logged in user" />
            )}
            {/* {dropDown && (
              <DropDown profileImage={profileImage} setDropDown={setDropDown} />
            )} */}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default LoggedInHeader;
