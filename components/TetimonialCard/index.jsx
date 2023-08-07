import React from "react";

function TestimonialCard() {
  return (
    <div className="testimonial-card shadow-md py-6 px-4 bg-[#121127] rounded-md text-white">
      <div className="testimonial-header flex items-center gap-8">
        <div className="testimonial-author-avatar w-12 h-12 border-2 border-blue-600 rounded-full py-1 px-1">
          <img
            src="https://images.unsplash.com/photo-1546539782-6fc531453083?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            alt="review-author-image"
            className="w-fulll h-full object-cover rounded-full"
          />
        </div>
        <div className="testimonial-author-content">
          <h3>Author</h3>
          <p className="text-white/70 text-xs">Author Position</p>
        </div>
      </div>
      <div className="testimonial-body mt-3">
        <p className="text-white/70 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eos
          quis atque itaque enim doloremque qui, provident expedita
          necessitatibus harum illum dolorum, reiciendis illo voluptatem,
          dolorem alias vitae ducimus? Optio.
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;
