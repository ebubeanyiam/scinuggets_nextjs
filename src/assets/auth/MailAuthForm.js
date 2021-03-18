import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";

// import * as _ from "./AuthProviders";

import styles from "../../../styles/auth/mailauthform.module.scss";

const MailAuthForm = ({ status, setEnterPassword }) => {
  const [loginStep, setLoginStep] = useState(0);
  const [emailLoginValue, setEmailLoginValue] = useState("");
  const [passwordLoginValue, setPasswordLoginValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const props = {
    status,
    emailLoginValue,
    passwordLoginValue,
    setLoginStep,
    setErrorMessage,
    setEnterPassword,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errorMessage || !passwordLoginValue) {
      return;
    }
    _.mailAuthFunction(
      emailLoginValue,
      passwordLoginValue,
      setAuthModal,
      status
    );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.container}>
        <div className={styles.input_container}>
          {loginStep === 0 && (
            <>
              <input
                type="email"
                value={emailLoginValue}
                onChange={(e) => {
                  setEmailLoginValue(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  _.checkEmail(props);
                }}
              >
                Check
              </button>
            </>
          )}

          {loginStep === 1 && (
            <>
              <input
                type="password"
                value={passwordLoginValue}
                onChange={(e) => {
                  setPasswordLoginValue(e.target.value);
                }}
                onKeyUp={() => {
                  _.checkPassword(props);
                }}
              />

              {passwordLoginValue.match(_.validPassword) && (
                <button type="submit">
                  {status === "Login" ? "Log In" : "Sign up"}
                </button>
              )}

              <div className={styles.change_email}>
                <BiArrowBack />
                <p
                  onClick={() => {
                    setLoginStep(0);
                    setEnterPassword(false);
                  }}
                >
                  Change Email
                </p>
              </div>
            </>
          )}
        </div>

        <p className={styles.error_message}>{errorMessage}</p>
      </div>
    </form>
  );
};

export default MailAuthForm;
