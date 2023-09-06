import React from "react";

function TestimonialCard({ author, brand, description }) {
  return (
    <div className="testimonial-card shadow-md  bg-gray-400 rounded-md text-white py-12 px-8 h-[294px]">
      <div className="testimonial-header flex items-center gap-8">
        {/* <div className="testimonial-author-avatar w-12 h-12 border-2 border-white rounded-full py-1 px-1">
          <img
            src="https://images.unsplash.com/photo-1546539782-6fc531453083?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            alt="review-author-image"
            className="w-fulll h-full object-cover rounded-full"
          />
        </div> */}
        <div className="testimonial-author-content">
          <h3 className="text-2xl">{author}</h3>
          <p className="text-white/70 text-lg">{brand}</p>
        </div>
      </div>
      <div className="testimonial-body mt-3">
        <p className="text-white/70 text-md">{description}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
