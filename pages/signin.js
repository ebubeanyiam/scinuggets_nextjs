import { useState } from "react";
import { useRouter } from "next/router";

import Login from "../src/assets/auth/Login";
import Signup from "../src/assets/auth/Signup";

import { User } from "../src/contexts/User";

import styles from "../styles/signin.module.scss";

const Enter = () => {
  const user = User();
  const router = useRouter();
  const [op, setOp] = useState(router.query.op);

  if (user) {
    router.push("/");
    return null;
  }

  return (
    <>
      <div className={styles.auth_modal}>
        <div className={styles.modal}>
          {op === "signup" ? <Signup setOp={setOp} /> : <Login setOp={setOp} />}
        </div>
      </div>
    </>
  );
};

export default Enter;
