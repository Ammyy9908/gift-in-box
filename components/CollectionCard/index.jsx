import React from "react";

function CollectionCard() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="collection-card-thumb">
        <img
          src="http://via.placeholder.com/70x70"
          alt="collection-thumbnail"
        />
      </div>
      <p className="mt-3 text-xs">Collection Name</p>
    </div>
  );
}

export default CollectionCard;
