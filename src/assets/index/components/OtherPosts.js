import Link from "next/Link";
import Moment from "react-moment";

import { timeToRead } from "../Functions";

import ForYouSkeleton from "../../../skeletons/ForYouSkeleton";

export default function OtherPosts({ postSliced }) {
  return (
    <>
      {postSliced.length > 0
        ? postSliced.map((post, index) => (
            <Link key={index} href={`/${post.data().slug}`}>
              <a>
                <div className="homepage__custom-posts--post">
                  <div className="homepage__all-posts--post-info">
                    <div className="homepage__all-posts__author--ft-img">
                      <img
                        src={
                          post.data().authorImage !== ""
                            ? post.data().authorImage
                            : DefaultUser
                        }
                        alt="author"
                      />
                      <span>{post.data().authorName}</span>
                    </div>
                    <h1 className="homepage__custom-posts__title">
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
                  <div className="homepage__custom-posts--post-image">
                    {post.data().featuredImage && (
                      <img src={post.data().featuredImage} alt="featured" />
                    )}
                  </div>
                </div>
              </a>
            </Link>
          ))
        : [1, 2, 3, 4].map((skeleton) => <ForYouSkeleton key={skeleton} />)}
    </>
  );
}
