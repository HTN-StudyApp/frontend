import "@csstools/normalize.css";
import { UserContextProvider } from "../lib/useUser";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default App;
