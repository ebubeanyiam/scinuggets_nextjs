import Link from "next/Link";
import Moment from "react-moment";

import { timeToRead } from "../Functions";

import ForYouMainSkeleton from "../../../skeletons/ForYouMainSkeleton";

export default function MainPost({ mainPost }) {
  return (
    <>
      {mainPost.length > 0
        ? mainPost.map((post, index) => (
            <Link key={index} href={`/${post.data().slug}`}>
              <a>
                <div className="homepage__custom-post--main">
                  <div className="homepage__custom-post--post-image">
                    {post.data().featuredImage && (
                      <img src={post.data().featuredImage} alt="featured" />
                    )}
                  </div>
                  <div className="homepage__custom-post--main-post-info">
                    <div className="homepage__custom-post__main-post-author--ft-img">
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
                    <h1 className="homepage__all-posts__title">
                      {post.data().title}
                    </h1>
                    {post.data().subtitle && (
                      <p className="homepage__all-posts__subtitle">
                        {post.data().subtitle}
                      </p>
                    )}
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
                </div>
              </a>
            </Link>
          ))
        : [1].map((skeleton) => <ForYouMainSkeleton key={skeleton} />)}
    </>
  );
}
