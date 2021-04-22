import Link from "next/Link";

export default function Explore() {
  return (
    <>
      <div className="homepage__all-posts--discover__container">
        <div className="homepage__all-posts--discover">
          <div className="homepage__all-posts--discover-topics">
            <div className="homepage__all-posts--discover-topics__header">
              <h2>EXPLORE TOPICS YOU ENJOY</h2>
            </div>

            <div className="homepage__all-posts--discover-topics__topics-container">
              <Link href="/">
                <a>Fashion</a>
              </Link>
              <Link href="/">
                <a>Travel</a>
              </Link>
              <Link href="/">
                <a>Programming</a>
              </Link>
              <Link href="/">
                <a>Education</a>
              </Link>
              <Link href="/">
                <a>Javascript</a>
              </Link>
              <Link href="/">
                <a>Food</a>
              </Link>
              <Link href="/">
                <a>Politics</a>
              </Link>
              <Link href="/">
                <a>Machine Learning</a>
              </Link>
              <Link href="/">
                <a>Data Science</a>
              </Link>
            </div>

            <div className="homepage__all-posts--discover-topics__exp-link">
              <span>
                <Link href="/">Explore all topics</Link>
              </span>
            </div>
          </div>
          <div className="homepage__all-posts--discover__footer">
            <Link href="">
              <a>Home</a>
            </Link>
            <Link href="">
              <a>Tags</a>
            </Link>
            <Link href="">
              <a>Code of Conduct</a>
            </Link>
            <Link href="">
              <a>FAQ</a>
            </Link>
            <Link href="">
              <a>Sponsors</a>
            </Link>
            <Link href="">
              <a>About</a>
            </Link>
            <Link href="">
              <a>Privacy Policy</a>
            </Link>
            <Link href="">
              <a>Terms of Use</a>
            </Link>
            <Link href="">
              <a>Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
