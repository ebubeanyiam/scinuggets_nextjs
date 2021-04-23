import { useRouter } from "next/router";
import Link from "next/link";

import styles from "../../../styles/index/hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Great articles, by great Writers</h1>

        <p>
          Read and share new perspectives on just about any topic. Everyone’s
          welcome. Learn more.
        </p>

        <Link href="/signin">
          <a>
            <button>Get Started</button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
