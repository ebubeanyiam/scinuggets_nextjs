import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";


import Layout from "../src/components/Layout";
// import { VscComment } from "react-icons/vsc";

import BlogHeader from "../src/assets/blog/BlogHeader";
import StoryComponents from "../src/assets/blog/StoryComponents";
import ArticleContainer from "../src/assets/blog/ArticleContainer";
import AuthorComponent from "../src/assets/blog/AuthorComponent";
import MorePosts from "../src/assets/blog/MorePosts";
import Footer from "../src/components/Footer";

import { User } from "../src/contexts/User";

import { getHTMLData, getAuthorDetails } from "../src/assets/blog/Functions";

import server from "../src/firebase/config";

export default function Post({ data }) {
  const user = User();
  const router = useRouter();
  const [htmlData, setHtmlData] = useState(null);
  const [postLikes, setPostLikes] = useState(0);
  const [postSaves, setPostSaves] = useState(0);
  // const [postComments, setPostComments] = useState(0);

  const [likedPost, setLikedPost] = useState(false);
  const [savedPost, setSavedPost] = useState(false);

  const [authorDetails, setAuthorDetails] = useState({});
  const [loginAction, setLoginAction] = useState(false);

  const [morePosts, setMorePosts] = useState([]);

  const args = {
    user,
    router,
    likedPost,
    setLikedPost,
    postLikes,
    setPostLikes,
    postSaves,
    setPostSaves,
    savedPost,
    setSavedPost,
    setLoginAction,
  };

  useEffect(() => {
    getHTMLData(data, setHtmlData);
    getAuthorDetails(data.postedBy, setAuthorDetails);
    setPostLikes(data.likes.liked_by.length);
    setPostSaves(data.saved.saved_by.length);

    server
      .firestore()
      .collection("posts")
      .doc(data.slug)
      .update({
        postViews: server.firestore.FieldValue.increment(1),
      });
    // setPostComments(data.commentsCount);

    if (user) {
      data.likes.liked_by.includes(user.uid) && setLikedPost(true);
      data.saved.saved_by.includes(user.uid) && setSavedPost(true);
      setLoginAction(false);
    }
  }, [user]);

  useEffect(() => {
    const uid = data.postedBy;
    const slug = data.slug;

    server
      .firestore()
      .collection("posts")
      .where("slug", "!=", slug)
      .where("postedBy", "==", uid)
      .limit(3)
      .get()
      .then((snapshots) => {
        setMorePosts([...snapshots.docs]);
      })
      .catch((e) => {
        console.log("Error", e);
      });
  }, [data]);

  return (
    <>
      <Layout>
        <div>
          <Head>
            <title>{data.title}</title>
            <meta name="description" content={data.subtitle} />
            <meta name="image" content={data.featuredImage} />
            <meta property="og:title" content={data.title} />
            <meta property="og:description" content={data.subtitle} />
            {data.featuredImageIsSet && (
              <meta property="og:image" content={data.featuredImage} />
            )}
            <meta
              property="og:url"
              content={`blog.scinuggets.com/${data.slug}`}
            />
            <meta name="twitter:card" content="summary_large_image"></meta>
          </Head>

          <BlogHeader user={user} data={data} />
          <div className="blog__article-container">
            <StoryComponents args={args} />
            <ArticleContainer
              data={data}
              authorDetails={authorDetails}
              htmlData={htmlData}
            />
          </div>
          {authorDetails && (
            <>
              <AuthorComponent authorDetails={authorDetails} />
              <MorePosts morePosts={morePosts} authorDetails={authorDetails} />
            </>
          )}
        </div>
      </Layout>
      <Footer />
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  let data;

  await server
    .firestore()
    .collection("posts")
    .doc(params.post)
    .get()
    .then((doc) => {
      const tempData = doc.data();
      tempData.timestamp = tempData.timestamp.seconds;
      if (tempData.lastEdited)
        tempData.lastEdited = tempData.lastEdited.seconds;
      data = tempData;
    });

  if (data)
    return {
      props: { data },
    };
  else {
    return {
      notFound: true,
    };
  }
};
