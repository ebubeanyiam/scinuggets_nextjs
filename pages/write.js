import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
// import Editorjs from "react-editor-js";

const Editorjs = dynamic(() => import("react-editor-js"), { ssr: false });

import { User } from "../src/contexts/User";
import Header from "../src/assets/write/Header_";
import { EDITOR_JS_TOOLS } from "../src/editor/config";
import Publish from "../src/assets/write/Publish";

import { saveDraft } from "../src/assets/write/Functions";

// import "../style/new-story.css";

const NewStory = (props) => {
  const user = User();
  const instanceRef = useRef(null);

  const [title, setTitle] = useState("");
  const [saving, setSaving] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [menuDropDown, setMenuDropDown] = useState(false);
  const [onChangeCount, setOnChangeCount] = useState(0);

  // Image Uploads
  const [file, setFile] = useState(null);
  const [postImage, setPostImage] = useState(null);

  const [publish, setPublish] = useState(false);
  const [draftId, setDraftId] = useState(null);

  const pageProps = {
    user,
    setSaving,
    draftId,
    setDraftId,
    title,
    setTitle,
    instanceRef,
  };

  useEffect(() => {
    if (onChangeCount > 0 && onChangeCount % 5 === 0 && title !== "") {
      saveDraft(pageProps, title);
    }
  }, [onChangeCount]);

  return (
    <div
      className="new-story"
      onClick={(e) => {
        !e.target.classList.contains("header__menu--dropdown") &&
          dropDown &&
          setDropDown(false);
      }}
    >
      {publish && (
        <Publish
          user={user}
          setPublish={setPublish}
          pageProps={pageProps}
          file={file}
          postImage={postImage}
          setFile={setFile}
          setPostImage={setPostImage}
          draftId={draftId}
        />
      )}

      <Header
        dropDown={dropDown}
        setDropDown={setDropDown}
        menuDropDown={menuDropDown}
        setMenuDropDown={setMenuDropDown}
        saving={saving}
        user={user}
      />

      {!publish && (
        <div className="new-story__editor">
          <div className="new-story__editor--save-btn-container">
            {title && (
              <button
                className="new-story__editor--save-btn"
                onClick={() => {
                  setPublish(true);
                  saveDraft(pageProps, title);
                }}
              >
                Publish
              </button>
            )}
          </div>

          <div className="new-story__editor--header">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>

          {postImage && (
            <div className="new-story__editor--featured-image">
              <img src={postImage} alt="Featured" />
            </div>
          )}

          <div
            className="new-story__editor--body"
            style={{ zIndex: dropDown ? -1 : 1 }}
          >
            <Editorjs
              holder="editor-js"
              onChange={() => {
                setOnChangeCount(onChangeCount + 1);
              }}
              data={""}
              instanceRef={(instance) => (instanceRef.current = instance)}
              placeholder="Write your article"
              tools={EDITOR_JS_TOOLS}
            >
              <div id="editor-js"></div>
            </Editorjs>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewStory;
