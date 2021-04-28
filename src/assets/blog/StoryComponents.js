import { BsBookmark } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { calcLike, calcSaves } from "./Functions";

export default function StoryComponents({ args }) {
  return (
    <>
      <aside className="blog__story-component">
        <div className="blog__story-comp-card-container">
          <div className="blog__story-comp-card">
            <IoMdHeartEmpty
              style={{ color: args.likedPost && "red" }}
              onClick={() => {
                calcLike(args);
              }}
            />
            <span>{args.postLikes}</span>
          </div>

          {/* <div className="blog__story-comp-card">
                  <VscComment />
                  <span>{postComments}</span>
                </div> */}

          <div className="blog__story-comp-card">
            <BsBookmark
              style={{ color: args.savedPost && "purple" }}
              onClick={() => {
                args.calcSaves(args);
              }}
            />
            <span>{args.postSaves}</span>
          </div>
        </div>
      </aside>
    </>
  );
}
