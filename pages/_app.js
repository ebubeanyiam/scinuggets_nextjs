import { UserProvider, ProtectedRoute } from "../src/contexts/User";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ProtectedRoute>
        <Component {...pageProps} />
      </ProtectedRoute>
    </UserProvider>
  );
}

export default MyApp;
