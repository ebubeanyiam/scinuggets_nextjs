import { UserProvider, ProtectedRoute } from "../src/contexts/User";
import "../styles/publish/editor.css";
import "../styles/globals.css";

import "../styles/index/for_you.css";

// import skeleton css files
import "../styles/skeletons/skeletons.css";
import "../styles/skeletons/for-you_skeleton.css";
import "../styles/skeletons/for-you-main_skeleton.css";

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
