import React from "react";

function ProductCard({ name, thumbnail }) {
  return (
    <div className="min-w-[322px] shadow-md bg-gray-100 rounded-md">
      <div className="product-card-thumb">
        <img
          src={`/catalog/${thumbnail}`}
          alt="product-image-not-avial"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="product-card-footer py-3 px-4">
        <h2>{name}</h2>
        <p>$45</p>
      </div>
    </div>
  );
}

export default ProductCard;
