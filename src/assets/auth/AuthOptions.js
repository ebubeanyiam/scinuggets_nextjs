import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import server from "../../firebase/config";

const googleProvider = new server.auth.GoogleAuthProvider();
const facebookProvider = new server.auth.FacebookAuthProvider();
const twitterProvider = new server.auth.TwitterAuthProvider();
const githubProvider = new server.auth.GithubAuthProvider();

export const authOptions = [
  {
    icon: FcGoogle,
    text: "with Google",
    authProvider: googleProvider,
  },
  {
    icon: IoLogoFacebook,
    text: "with Facebook",
    color: "#3B5997",
    authProvider: facebookProvider,
  },
  {
    icon: FaTwitter,
    text: "with Twitter",
    color: "#55ACED",
    authProvider: twitterProvider,
  },
  {
    icon: FaGithub,
    text: "with Github",
    authProvider: githubProvider,
  },
  {
    icon: AiOutlineMail,
    text: "with Mail",
  },
];
