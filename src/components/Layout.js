import { useState } from "react";
import { User } from "../contexts/User";

import Warning from "./Warning";
import Header from "./Header";
import ConfirmMail from "./ConfirmMail";

const Layout = ({ children }) => {
  const user = User();
  const [dropDown, setDropDown] = useState(false);

  return (
    <div onClick={() => dropDown && setDropDown(false)}>
      <Warning />
      {user && !user.emailVerified && <ConfirmMail />}
      <Header dropDown={dropDown} setDropDown={setDropDown} />
      {children}
    </div>
  );
};

export default Layout;
