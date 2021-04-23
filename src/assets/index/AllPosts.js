import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

import server from "../../firebase/config";
import PostDiv from "./components/PostDiv";
import Explore from "./components/Explore";

import AllPostsSkeleton from "../../skeletons/AllPostsSkeleton";

const AllPosts = ({ trend }) => {
  const [posts, setPosts] = useState([]);
  const [lastPost, setLastPost] = useState();
  const [hasMore, setHasMore] = useState(true);

  const observer = useRef();
  const lastPostRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          server
            .firestore()
            .collection("posts")
            .where("slug", "not-in", trend)
            .startAfter(lastPost)
            .limit(5)
            .get()
            .then((snapshots) => {
              setPosts((posts) => [...posts, ...snapshots.docs]);
              if (snapshots.docs.length > 0) {
                setLastPost(snapshots.docs[snapshots.docs.length - 1]);
              } else {
                setHasMore(false);
              }
            })
            .catch(function (error) {
              console.log("Error getting documents: ", error);
            });
        }
      });
      if (node) observer.current.observe(node);
    },
    [trend, lastPost, hasMore]
  );

  useEffect(() => {
    if (trend.length !== 0) {
      server
        .firestore()
        .collection("posts")
        .where("slug", "not-in", trend)
        .limit(5)
        .get()
        .then((snapshots) => {
          setPosts([...snapshots.docs]);
          setLastPost(snapshots.docs[snapshots.docs.length - 1]);
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
        });
    }
  }, [trend]);

  return (
    <div className="homepage__all-posts_top-container">
      <div className="homepage__all-posts">
        <div className="homepage__all-posts--container">
          {posts.length > 0
            ? posts.map((post, index) => {
                if (posts.length === index + 1) {
                  return (
                    <Link key={index} href={`/${post.data().slug}`}>
                      <a ref={lastPostRef}>
                        <PostDiv post={post} />
                      </a>
                    </Link>
                  );
                } else {
                  return (
                    <Link key={index} href={`/${post.data().slug}`}>
                      <a>
                        <PostDiv post={post} />
                      </a>
                    </Link>
                  );
                }
              })
            : [1, 2, 3, 4, 5].map((skeleton) => (
                <AllPostsSkeleton key={skeleton} />
              ))}
        </div>

        <Explore />
      </div>
    </div>
  );
};

export default AllPosts;
