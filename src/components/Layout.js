import { useState } from "react";
import Warning from "./Warning";
import Header from "./Header";

const Layout = ({ children }) => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div onClick={() => dropDown && setDropDown(false)}>
      <Warning />
      <Header dropDown={dropDown} setDropDown={setDropDown} />
      {children}
    </div>
  );
};

export default Layout;
