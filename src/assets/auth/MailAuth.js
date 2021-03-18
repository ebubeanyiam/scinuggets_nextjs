import { useState } from "react";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineRollback } from "react-icons/ai";

import MailAuthForm from "./MailAuthForm";

import styles from "../../../styles/auth/mailauth.module.scss";

const MailAuth = ({ authStatus, setMailAuth }) => {
  if (authStatus === "Login") {
    return (
      <MailAuthTemplate
        status="Login"
        subHeading="Enter the email address associated with your account"
        setMailAuth={setMailAuth}
      />
    );
  } else {
    return (
      <MailAuthTemplate
        status="Sign up"
        subHeading="Enter your email address to create an account"
        setMailAuth={setMailAuth}
      />
    );
  }
};

const MailAuthTemplate = ({ status, subHeading, setMailAuth }) => {
  const [enterPassword, setEnterPassword] = useState(false);
  const [formSubHeading, setFormSubHeading] = useState("");

  return (
    <>
      <div className={styles.template_logo}>
        <Link href="/">
          <a>
            <img src="/images/scinuggets_logo.png" alt="" />
          </a>
        </Link>
      </div>

      <div className={styles.template_header}>
        <h3>{status} with Email</h3>
      </div>

      <div className={styles.template_subheader}>
        <p>{!enterPassword ? subHeading : formSubHeading}</p>
      </div>

      <MailAuthForm
        setMailAuth={setMailAuth}
        status={status}
        setEnterPassword={setEnterPassword}
      />

      <div
        className={styles.auth_option}
        onClick={() => {
          setMailAuth(false);
        }}
      >
        {enterPassword ? <AiOutlineRollback /> : <BiArrowBack />}{" "}
        <span>All {status} options</span>
      </div>
    </>
  );
};

export default MailAuth;
