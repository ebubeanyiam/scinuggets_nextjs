import React from "react";

import styles from "../../styles/loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.screen}>
      <div className={styles.container}>
        <div className={styles.sphere}></div>
        <h5>Loading</h5>
      </div>
    </div>
  );
};

export default Loader;
