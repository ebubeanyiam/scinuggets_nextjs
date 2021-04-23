import Moment from "react-moment";
import readingTime from "reading-time";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoIosLink,
} from "react-icons/io";
import { copyFunction } from "./Functions";

export default function ArticleContainer({ data, authorDetails, htmlData }) {
  return (
    <>
      <div className="blog__article">
        <div className="blog__article-header">
          <h1>{data.title}</h1>
        </div>

        <div className="blog__article-subtitle">
          <h3>{data.subtitle}</h3>
        </div>

        <div className="blog__article-details">
          <div className="blog__article-details--user">
            <div className="user-image">
              {authorDetails.photoUrl ? (
                <img src={authorDetails.photoUrl} alt="author" />
              ) : (
                <img src="/images/default_profile-img.png" alt="author" />
              )}
            </div>
            <div className="article-time-details">
              <div className="article-time-details--author">
                <span>
                  {authorDetails.displayName && authorDetails.displayName}
                </span>
              </div>
              <div className="article-time-details--time">
                <span>
                  {
                    <Moment fromNow>
                      {new Date(data.timestamp.seconds * 1000)}
                    </Moment>
                  }{" "}
                  .
                </span>
                {htmlData && <span>{readingTime(htmlData).text}</span>}
              </div>
            </div>
          </div>

          <div className="blog__article-details--social">
            <IoLogoTwitter />
            <IoLogoFacebook />
            <IoLogoLinkedin />
            <IoIosLink onClick={() => copyFunction(data.slug)} />
          </div>
        </div>

        {data.edited && (
          <div className="blog__article--edited">
            <span>
              Last edited{" "}
              {<Moment>{new Date(data.lastEdited.seconds * 1000)}</Moment>}
            </span>
          </div>
        )}

        <div className="blog__article-featured-image">
          {data.featuredImage && (
            <img src={data.featuredImage} alt="featured" />
          )}
        </div>

        {htmlData && (
          <div
            className="blog__article-text"
            dangerouslySetInnerHTML={{ __html: htmlData }}
          ></div>
        )}

        <div className="blog__article-tags">
          {data.tags &&
            data.tags.map((tag, index) => <span key={index}>{tag}</span>)}
        </div>
      </div>
    </>
  );
}
