import React from "react";
import Link from "next/link";
import Image from "next/image";

import { UserData } from "../../contexts/User";
import server from "../../firebase/config";

import styles from "../../../styles/header/dropdown.module.scss";

const DropDown = ({ image }) => {
  const userData = UserData();

  return (
    <div className={`${styles.menu_dropdown} main_menu_dropdown`}>
      <div>
        {!image ? (
          <Image
            width={29}
            height={29}
            src="/images/default_profile-img.png"
            alt="logged in user"
          />
        ) : (
          <img src={image} alt="logged in user" />
        )}
      </div>

      <div>
        <Link href="/write">
          <a>Write</a>
        </Link>
        <Link href="/">
          <a>Stories</a>
        </Link>
        <Link href={`/profile/${userData && userData.username}`}>
          <a>Profile</a>
        </Link>
        <Link href="/me/settings">
          <a>Settings</a>
        </Link>
      </div>

      <div>
        <Link href="/">
          <a>Reading List</a>
        </Link>
        <Link href="/">
          <a>Publications</a>
        </Link>
        <Link href="/">
          <a>Customize your interests</a>
        </Link>
        <Link href="/">
          <a>Become a Partner</a>
        </Link>
      </div>

      <div>
        <Link href="/">
          <a>Become a Member</a>
        </Link>
        <Link href="/">
          <a>Help</a>
        </Link>
        <span
          onClick={() => {
            server.auth().signOut();
          }}
        >
          Sign Out
        </span>
      </div>
    </div>
  );
};

export default DropDown;
