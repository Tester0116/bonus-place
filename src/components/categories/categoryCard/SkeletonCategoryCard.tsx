import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonCategoryCard = () => {
  return (
    <div className="container__skeleton">
      {Array(11)
        .fill(0)
        .map((item, index) => (
          <ContentLoader
            key={index}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            className="contentLoader"
          >
            <circle cx="45" cy="45" r="45" />
            <rect x="13" y="99" rx="3" ry="3" width="70" height="11" />
          </ContentLoader>
        ))}
    </div>
  );
};

export default SkeletonCategoryCard;
