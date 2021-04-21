import { useEffect, useState } from "react";
import Link from "next/Link";
import Moment from "react-moment";

import server from "../../firebase/config";
import { timeToRead } from "./Functions";

// import DefaultUser from "../../assets/images/default_profile-img.png";

import MainPost from "./components/MainPost";
import OtherPosts from "./components/OtherPosts";

import ForYouSkeleton from "../../skeletons/ForYouSkeleton";

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

        {/* <div className="homepage__custom-posts-writers">
          <div className="homepage__custom-posts-writers-child">
            <h1 className="homepage__custom-posts--marker">
              WRITERS TO FOLLOW
            </h1>
            <div className="homepage__custom-posts--writer-box-container">
              {authors.length !== 0 &&
                authors.map((author, index) => (
                  <div
                    className="homepage__custom-posts--writer-box"
                    key={index}
                  >
                    <div className="homepage__custom-posts--writer-box-bio">
                      {author.data().photoUrl && (
                        <Link to={`/profile/${author.data().username}`}>
                          <img src={author.data().photoUrl} alt="writer" />
                        </Link>
                      )}
                      <div className="homepage__custom-posts--writer-box-bio-about">
                        {author.data().displayName && (
                          <h5>{author.data().displayName}</h5>
                        )}
                        {author.data().bio && <span>{author.data().bio}</span>}
                      </div>
                    </div>
                    <div className="homepage__custom-posts--writer-box-follow">
                      <button>Follow</button>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="homepage__custom-posts-writers-child">
            <h1 className="homepage__custom-posts--marker">TOPICS TO FOLLOW</h1>
            <div className="homepage__custom-posts--topics-container">
              <div className="homepage__custom-posts--topic-box">
                <h3>Coronavirus</h3>
                <button>Follow</button>
              </div>
              <div className="homepage__custom-posts--topic-box">
                <h3>Programming</h3>
                <button>Follow</button>
              </div>
              <div className="homepage__custom-posts--topic-box">
                <h3>Javascript</h3>
                <button>Follow</button>
              </div>
              <Link to="/">
                <span>See More</span>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ForYou;
