import Link from "next/link";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  const getYear = () => {
    const date = new Date();
    const year = date.getFullYear();

    return year;
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__nav">
          <nav className="footer__navlinks">
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
          </nav>

          <div className="footer__social">
            <AiOutlineTwitter />
            <AiFillFacebook />
            <AiOutlineGithub />
            <AiOutlineInstagram />
          </div>
        </div>

        <div className="footer__about">
          <span>
            <b>SCINUGGETS</b> - A constructive and inclusive blog for
            articulated writers. Document every step of your journey.
          </span>
        </div>

        <div className="footer__footer">
          <span>
            Made with <span style={{ color: "red" }}>&#x2764;</span> and React.
            Scinuggets &copy; 2016 - {getYear()}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
