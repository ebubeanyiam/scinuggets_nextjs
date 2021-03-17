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
        <Link href="/m/new-story">New Story</Link>
        <Link href="/">Stories</Link>
        <Link href={`/profile/${userData && userData.username}`}>Profile</Link>
        <Link href="/me/settings">Settings</Link>
      </div>

      <div>
        <Link href="/">Reading List</Link>
        <Link href="/">Publications</Link>
        <Link href="/">Customize your interests</Link>
        <Link href="/">Become a Partner</Link>
      </div>

      <div>
        <Link href="/">Become a Member</Link>
        <Link href="/">Help</Link>
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
