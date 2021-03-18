import { useState, useEffect, createContext, useContext } from "react";
import { getUserData } from "../functions/AppProvider";

import Loader from "../components/Loader";

import server from "../firebase/config";

export const UserContext = createContext();

export const User = () => {
  const [user] = useContext(UserContext);
  return user;
};

export const UserData = () => {
  const [, userData] = useContext(UserContext);
  return userData;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [userData, setUserData] = useState(null);

  server.auth().onAuthStateChanged((user) => {
    setUser(user);
  });

  useEffect(() => {
    if (user) {
      const data = getUserData(user);
      setUserData(data);
    }
  }, [user]);

  return (
    <UserContext.Provider value={[user, userData]}>
      {children}
    </UserContext.Provider>
  );
};

export const ProtectedRoute = ({ children }) => {
  const user = User();
  if (user === false) {
    return <Loader />;
  }

  return children;
};
