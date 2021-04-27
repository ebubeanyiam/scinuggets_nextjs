import Link from "next/link";

export default function MorePosts({ morePosts, authorDetails }) {
  return (
    <>
      {morePosts.length > 0 && (
        <div className="blog__more-author-posts">
          <h3 className="blog__more-author-posts-title">More Reading</h3>
          <div className="blog__more-author-posts--container">
            {morePosts.map((post, index) => (
              <Link href={`${post.data().slug}#`} key={index}>
                <a>
                  <div className="blog__more-author-post">
                    <img
                      className="blog__more-author-post--author"
                      src={authorDetails.photoUrl}
                      alt="author"
                    />
                    <img
                      className="blog__more-author-post--featuredImage"
                      src={post.data().featuredImage}
                      alt="featured"
                    />
                    <h4>{post.data().title}</h4>
                    <p>{post.data().subtitle}</p>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
