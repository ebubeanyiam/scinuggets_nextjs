import server from "../firebase/config";

import styles from "../style/user-setup.css";

const ConfirmMail = () => {
  const resendEmail = () => {
    server
      .auth()
      .currentUser.sendEmailVerification()
      .then(() => {
        alert("Email sent");
      })
      .catch((e) => {
        alert("Error", e.message);
      });
  };

  return (
    <div className={styles.user_setup}>
      <div className={styles.setup_modal}>
        <p>
          We've sent an email to your email address, Click on the link to verify
          your account or{" "}
          <span className="user-setup__cta" onClick={resendEmail}>
            click here
          </span>{" "}
          to recieve another
        </p>
      </div>
    </div>
  );
};

export default ConfirmMail;
