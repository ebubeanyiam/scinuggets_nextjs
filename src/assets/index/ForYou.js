import { useEffect, useState } from "react";
import Link from "next/link";
import Moment from "react-moment";

import server from "../../firebase/config";
import { timeToRead } from "./Functions";

// import DefaultUser from "../../assets/images/default_profile-img.png";

import MainPost from "./components/MainPost";
import OtherPosts from "./components/OtherPosts";
import Writers from "./components/Writers";

const ForYou = ({ trend, setCustom }) => {
  const [posts, setPosts] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [allAuthors, setAllAuthors] = useState([]);
  const [mainPost, setMainPost] = useState([]);
  const [postSliced, setPostSliced] = useState([]);

  useEffect(() => {
    if (trend.length !== 0) {
      server
        .firestore()
        .collection("posts")
        .where("slug", "not-in", trend)
        .where("featuredImageIsSet", "==", true)
        .limit(5)
        .get()
        .then((snapshots) => {
          setPosts([...snapshots.docs]);
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
        });
    }
  }, [trend]);

  useEffect(() => {
    setMainPost(posts.slice(0, 1));
    setPostSliced(posts.slice(1));
  }, [posts]);

  useEffect(() => {
    server
      .firestore()
      .collection("users")
      .where("postsNum", ">", 0)
      .get()
      .then((snapshots) => {
        setAllAuthors([...snapshots.docs]);
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }, []);

  useEffect(() => {
    if (allAuthors.length !== 0) {
      const numStart = Math.floor(Math.random() * (allAuthors.length - 1));
      setAuthors(allAuthors.slice(numStart, numStart + 2));
    }
  }, [allAuthors]);

  return (
    <div className="homepage__custom-posts--container">
      <div className="homepage__custom-posts">
        <div className="homepage__custom-post--main-container">
          <MainPost mainPost={mainPost} />
        </div>

        <div className="homepage__custom-posts-container-other-posts">
          <OtherPosts postSliced={postSliced} />
        </div>

        <div className="homepage__custom-posts-writers">
          <Writers authors={authors} />
        </div>
      </div>
    </div>
  );
};

export default ForYou;
