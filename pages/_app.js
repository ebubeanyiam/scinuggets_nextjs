import { UserProvider, ProtectedRoute } from "../src/contexts/User";
import "../styles/publish/editor.css";
import "../styles/globals.css";

import "../styles/[post]/blog.css";

import "../styles/index/for_you.css";
import "../styles/index/trending_posts.css";
import "../styles/index/all_posts.css";

// import skeleton css files
import "../styles/skeletons/skeletons.css";
import "../styles/skeletons/for-you_skeleton.css";
import "../styles/skeletons/for-you-main_skeleton.css";
import "../styles/skeletons/trending_skeleton.css";
import "../styles/skeletons/allposts_skeleton.css";

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
