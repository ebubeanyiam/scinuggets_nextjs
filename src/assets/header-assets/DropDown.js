import React from "react";
import Link from "next/link";
import Image from "next/image";

import { UserData } from "../../contexts/User";
import server from "../../firebase/config";

const DropDown = ({ profileImage }) => {
  const userData = UserData();

  return (
    <div className="header__menu--dropdown">
      <div className="header__menu--dropdown--user">
        <Image
          width={29}
          height={29}
          src={
            profileImage !== ""
              ? profileImage
              : `images/default_profile-img.png`
          }
          alt="logged in user"
        />
      </div>

      <div className="header__menu--dropdown--user-options">
        <Link href="/m/new-story">New Story</Link>
        <Link href="/">Stories</Link>
        <Link href={`/profile/${userData && userData.username}`}>Profile</Link>
        <Link href="/me/settings">Settings</Link>
      </div>

      <div className="header__menu--dropdown--user--personal">
        <Link href="/">Reading List</Link>
        <Link href="/">Publications</Link>
        <Link href="/">Customize your interests</Link>
        <Link href="/">Become a Partner</Link>
      </div>

      <div className="header__menu--dropdown--user--others">
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
