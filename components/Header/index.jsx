import React from "react";

function Header() {
  return (
    <div className="w-full px-12 py-6 flex items-center justify-between gap-32">
      <a href="#" className="px-2 py-2  rounded-md flex items-center gap-2">
        <img
          src="/logo.png"
          alt="brand-logo"
          className="w-12 h-12 shadow-md rounded-full"
        />

        <span className="font-semibold">Gift In Box</span>
      </a>
      <nav className="navbar hidden md:block">
        <ul className="w-full flex items-center justify-start gap-4">
          <li>
            <a href="#" className="transition-all">
              Shop Gifts
            </a>
          </li>
          <li>
            <a href="#" className="transition-all">
              Build A Gift
            </a>
          </li>
          <li>
            <a href="#" className="transition-all">
              Gift By Ethos
            </a>
          </li>
          <li>
            <a href="#" className="transition-all">
              Let Them Choose
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
