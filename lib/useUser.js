import { createContext, useContext, useEffect, useState } from "react";
import firebase from "./firebase";
import { useRouter } from "next/router";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const dev = process.env.NODE_ENV !== 'production';
  const server = dev ? 'http://localhost:3000' : 'https://your_deployment.server.com';
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


// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}