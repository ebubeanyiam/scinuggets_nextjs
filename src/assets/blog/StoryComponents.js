import { BsBookmark } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";

export default function StoryComponents(props) {
  return (
    <>
      <aside className="blog__story-component">
        <div className="blog__story-comp-card-container">
          <div className="blog__story-comp-card">
            <IoMdHeartEmpty
              style={{ color: props.likedPost && "red" }}
              onClick={() => {
                props.calcLike(props.args);
              }}
            />
            <span>{props.postLikes}</span>
          </div>

          {/* <div className="blog__story-comp-card">
                  <VscComment />
                  <span>{postComments}</span>
                </div> */}

          <div className="blog__story-comp-card">
            <BsBookmark
              style={{ color: props.savedPost && "purple" }}
              onClick={() => {
                props.calcSaves(props.args);
              }}
            />
            <span>{props.postSaves}</span>
          </div>
        </div>
      </aside>
    </>
  );
}
