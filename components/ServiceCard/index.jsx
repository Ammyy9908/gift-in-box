import React from "react";
import { AiFillHome } from "react-icons/ai";
function ServiceCard({ title, description }) {
  return (
    <div
      className="group overflow-hidden cursor-pointer rounded-md bg-white py-12 px-8 flex flex-col items-center gap-3 hover:shadow-2xl hover:shadow-green-200 hover:scale-105"
      style={{
        transitionDuration: "1.5s",
      }}
    >
      {/* <div className="service-icon w-12 h-12 bg-[#67C347] rounded-full flex items-center justify-center text-white">
        <AiFillHome />
      </div> */}
      <div className="service-card-body text-center">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-black/70 mt-3">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
