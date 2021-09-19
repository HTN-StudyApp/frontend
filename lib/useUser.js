import { createContext, useContext, useEffect, useState } from "react";
import firebase from "./firebase";
import { useRouter } from "next/router";
import postData, { server } from "./postData";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const createUser = (email, imgUrl, name) => {
    postData(`${server}/api/db/create-user`, { email, imgUrl, name })
  }

  const handleUser = (rawUser) => {
    if (rawUser) {
      // console.log(rawUser)
      createUser(rawUser.email, rawUser.photoURL, rawUser.displayName)

      setUser(rawUser);
      setLoading(false);
    } else {
      setUser(null);
      setLoading(false);
    }
  };
  const signInWithGoogle = (fn) => {
    setLoading(true);
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(async (response) => {
        handleUser(response.user);
        // router.back();
      });
  };
  const logout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(false));
  };
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);
    return () => {
      unsubscribe();
    };
  }, []);
  return {
    user,
    logout,
    loading,
    signInWithGoogle,
  };
};
const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
  const auth = useAuth();
  return <UserContext.Provider value={auth}>{children}</UserContext.Provider>;
};
const useUser = () => useContext(UserContext);
export default useUser;
