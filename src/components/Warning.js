import React from "react";
import Link from "next/link";
import { TiWarningOutline } from "react-icons/ti";

import styles from "../../styles/caution.module.scss";

const Warning = () => {
  return (
    <div className={styles.caution}>
      <TiWarningOutline />
      <span>
        Certain parts of the app are in development and will be unavailable.{" "}
        <Link href="/">
          <a>Learn more</a>
        </Link>
      </span>
    </div>
  );
};

export default Warning;
