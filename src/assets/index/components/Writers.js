import Link from "next/link";

export default function Writers({ authors }) {
  return (
    <>
      <div className="homepage__custom-posts-writers-child">
        <h1 className="homepage__custom-posts--marker">WRITERS TO FOLLOW</h1>
        <div className="homepage__custom-posts--writer-box-container">
          {authors.length !== 0 &&
            authors.map((author, index) => (
              <div className="homepage__custom-posts--writer-box" key={index}>
                <div className="homepage__custom-posts--writer-box-bio">
                  {author.data().photoUrl && (
                    <Link href={`/profile/${author.data().username}`}>
                      <a>
                        <img src={author.data().photoUrl} alt="writer" />
                      </a>
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
          <Link href="/">
            <a>
              <span>See More</span>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
