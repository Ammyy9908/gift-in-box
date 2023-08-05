import React from "react";

function ProductCard() {
  return (
    <div className="min-w-[322px]">
      <div className="product-card-thumb">
        <img
          src="http://via.placeholder.com/460x460"
          alt="product-image-not-avial"
        />
      </div>
      <div className="product-card-footer">
        <h2>Product Name</h2>
        <p>$45</p>
      </div>
    </div>
  );
}

export default ProductCard;
