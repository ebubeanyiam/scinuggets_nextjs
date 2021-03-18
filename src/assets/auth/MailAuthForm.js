import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";

import Loader from "../../components/Loader";

import * as _ from "./AuthProvider";

import styles from "../../../styles/auth/mailauthform.module.scss";

const MailAuthForm = ({ status, setEnterPassword, setFormSubHeading }) => {
  const [loginStep, setLoginStep] = useState(0);
  const [emailLoginValue, setEmailLoginValue] = useState("");
  const [passwordLoginValue, setPasswordLoginValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const props = {
    status,
    setLoading,
    emailLoginValue,
    passwordLoginValue,
    setLoginStep,
    setErrorMessage,
    setEnterPassword,
    setFormSubHeading,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errorMessage || !passwordLoginValue) {
      return;
    }
    _.mailAuthFunction(
      emailLoginValue,
      passwordLoginValue,
      setLoading,
      setErrorMessage,
      status
    );
  };

  return (
    <>
      {loading && <Loader />}
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
    </>
  );
};

export default MailAuthForm;
