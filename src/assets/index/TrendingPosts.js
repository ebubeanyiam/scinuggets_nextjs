import { useState, useEffect } from "react";
import Moment from "react-moment";
import Link from "next/Link";
import { IoIosTrendingUp } from "react-icons/io";

import server from "../../firebase/config";
import { timeToRead } from "./Functions";

import TrendingSkeleton from "../../skeletons/TrendingSkeleton";

const TrendingPosts = ({ setTrend }) => {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    server
      .firestore()
      .collection("posts")
      .orderBy("postViews", "desc")
      .limit(6)
      .get()
      .then((snapshots) => {
        setTrendingPosts([...snapshots.docs]);
      });
  }, []);

  useEffect(() => {
    const trends = [];
    trendingPosts.forEach((post) => {
      trends.push(post.id);
    });
    setTrend(trends);
  }, [trendingPosts, setTrend]);

  return (
    <div className="homepage__trending-container">
      <div className="homepage__trending-posts">
        <div className="trending-posts__marker">
          <IoIosTrendingUp />
          <h3>TRENDING</h3>
        </div>
        <div className="trending-posts__container">
          {trendingPosts.length > 0
            ? trendingPosts.map((post, index) => (
                <Link key={index} href={post.data().slug}>
                  <a>
                    <div className="trending-posts__post">
                      <div className="trending-posts__author--ft-img">
                        {post.data().featuredImage !== "" && (
                          <img src={post.data().featuredImage} alt="" />
                        )}
                        <span>{post.data().authorName}</span>
                      </div>
                      <h1 className="trending-posts__title">
                        {post.data().title}
                      </h1>
                      <div className="trending-posts__time">
                        <span>
                          {
                            <Moment fromNow>
                              {new Date(post.data().timestamp.seconds * 1000)}
                            </Moment>
                          }
                          .
                        </span>
                        <span>{timeToRead(post.data().savedData)}</span>
                      </div>
                    </div>
                  </a>
                </Link>
              ))
            : [1, 2, 3, 4, 5, 6].map((skeleton) => (
                <TrendingSkeleton key={skeleton} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingPosts;
