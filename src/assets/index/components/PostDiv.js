import Moment from "react-moment";
import { timeToRead } from "../Functions";

export default function PostDiv(props) {
  return (
    <div className="homepage__all-posts--post">
      <div className="homepage__all-posts--post-info">
        <div className="homepage__all-posts__author--ft-img">
          <img
            src={
              props.post.data().authorImage !== ""
                ? props.post.data().authorImage
                : DefaultUser
            }
            alt="author"
          />
          <span>{props.post.data().authorName}</span>
        </div>
        <h1 className="homepage__all-posts__title">
          {props.post.data().title}
        </h1>
        {props.post.data().subtitle && (
          <p className="homepage__all-posts__subtitle">
            {props.post.data().subtitle}
          </p>
        )}
        <div className="trending-posts__time">
          <span>
            {
              <Moment fromNow>
                {new Date(props.post.data().timestamp.seconds * 1000)}
              </Moment>
            }
            .
          </span>
          <span>{timeToRead(props.post.data().savedData)}</span>
        </div>
      </div>
      <div className="homepage__all-posts--post-image">
        {props.post.data().featuredImage && (
          <img src={props.post.data().featuredImage} alt="featured" />
        )}
      </div>
    </div>
  );
}
