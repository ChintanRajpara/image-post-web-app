import React from "react";
import ImageCard from "./ImageCard";
import NewImageContainer from "../newImageContainer/NewImageContainer";

const ImagesGrid = ({
  images,
  viewerId,
}: {
  viewerId: string;
  images: { edges: ImageEdge[] };
}) => {
  return (
    <div className="grid-cols-3 gap-4 grid">
      {images.edges.map((imageEdge) => (
        <ImageCard {...{ imageEdge, viewerId }} />
      ))}

      <NewImageContainer {...{ viewerId }} />
    </div>
  );
};

export default ImagesGrid;
