import Link from "next/link";

export default function AuthorComponent({ authorDetails }) {
  return (
    <>
      <div className="blog__author-component">
        <div className="blog__author-image-container">
          <Link href={`/profile/${authorDetails.username}`}>
            <a>
              {authorDetails.photoUrl ? (
                <img src={authorDetails.photoUrl} alt="author" />
              ) : (
                <img src="/images/default_profile-img" alt="author" />
              )}
            </a>
          </Link>
        </div>
        <div className="blog__author-about-container">
          <span>WRITTEN BY</span>
          <div className="blog__author-about-container__author-name">
            <h3>{authorDetails.displayName && authorDetails.displayName}</h3>
            <button>Follow</button>
          </div>
          <div className="blog__author-about-container__bio">
            <span>{authorDetails.bio && authorDetails.bio}</span>
          </div>
        </div>
      </div>
    </>
  );
}
