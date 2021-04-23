import React from "react";

const TrendingSkeleton = () => {
  return (
    <div className="trending_skeleton">
      <div className="trending_skeleton--flex">
        <div className="skeleton skeleton-image-author"></div>
        <div className="skeleton skeleton-name"></div>
      </div>
      <div className="skeleton skeleton-title-small"></div>
      <div className="skeleton skeleton-article-info"></div>
    </div>
  );
};

export default TrendingSkeleton;
