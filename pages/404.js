import Link from "next/link";

import styles from "../styles/404.module.scss";

const PageNotFound = () => {
  return (
    <>
      <div className={styles.not_found}>
        <div className={styles.error_warning}>
          <h3>Page Not Found</h3>
        </div>
        <div className={styles.error_response}>
          <h1>404</h1>
        </div>
        <div className={styles.error_header}>
          <h2>You've stumbled upon a treasure that does not exist... Yet</h2>
        </div>
        <div className={styles.error_message}>
          <p>
            Finding great things on{" "}
            <Link href="/">
              <a>Scinuggets</a>
            </Link>{" "}
            is easy — apparently even a page that doesn’t exist... yet. <br />
            Why don't you explore some of the amazing treasures that do exist.{" "}
            <br /> <br />
            <Link href="/">
              <a>Home</a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
