import { useState } from "react";
import Link from "next/Link";

import { authFunction } from "./AuthProvider";
import { authOptions } from "./AuthOptions";

import MailAuth from "./MailAuth";

import styles from "../../../styles/auth/authtemplate.module.scss";

const AuthTemplate = (props) => {
  const [mailAuth, setMailAuth] = useState(false);

  return (
    <div className={styles.template}>
      <div className={styles.header}>
        <h3>{props.headerText}</h3>
      </div>

      <div className={styles.auth_options}>
        {authOptions.map((option, index) => {
          return (
            <div
              key={index}
              className={styles.auth_option}
              onClick={() => {
                !option.authProvider
                  ? setMailAuth(true)
                  : authFunction(option.authProvider);
              }}
            >
              <div
                className={styles.icon}
                style={{ color: option.color ? option.color : "" }}
              >
                {<option.icon />}
              </div>
              <div className="auth-template__auth-option--text">
                {props.status} {option.text}
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.auth_redirect}>
        <p className={styles.redirect_text}>
          {props.question}{" "}
          <span
            className={styles.text_link}
            onClick={() => {
              props.setOp(props.status === "signup" ? false : "signup");
            }}
          >
            {props.redirect}
          </span>
        </p>
      </div>

      <div className={styles.accept_terms}>
        <p className={styles.terms_text}>
          Click "{props.status}" to agree to Scinugget's{" "}
          <Link href="/">
            <a>Terms of Service</a>
          </Link>{" "}
          and acknowledge that Scinugget's{" "}
          <Link href="/">
            <a>Privacy Policy</a>
          </Link>{" "}
          applies to you.
        </p>
      </div>

      {mailAuth && (
        <div className={styles.mail_auth}>
          <MailAuth authStatus={props.status} setMailAuth={setMailAuth} />
        </div>
      )}
    </div>
  );
};

export default AuthTemplate;
