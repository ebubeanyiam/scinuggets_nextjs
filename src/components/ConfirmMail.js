import { resendEmail } from "../functions/AppProvider";

import styles from "../../styles/confirmmail.module.scss";

const ConfirmMail = () => {
  return (
    <div className={styles.user_setup}>
      <div className={styles.setup_modal}>
        <p>
          We've sent an email to your email address, Click on the link to verify
          your account or{" "}
          <span className={styles.setup_cta} onClick={resendEmail}>
            click here
          </span>{" "}
          to recieve another
        </p>
      </div>
    </div>
  );
};

export default ConfirmMail;
