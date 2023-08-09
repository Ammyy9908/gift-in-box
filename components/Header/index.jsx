import React from "react";

function Header() {
  return (
    <div className="w-full px-6 md:px-12 py-2 flex items-center justify-between gap-32">
      <a href="#" className="px-2 py-2  rounded-md flex items-center gap-2">
        <img
          src="/logo.png"
          alt="brand-logo"
          className="w-16 h-16 shadow-md rounded-full"
        />

        <span className="font-semibold text-2xl">Giftinbox</span>
      </a>
      <nav className="navbar hidden md:block">
        <ul className="w-full flex items-center justify-start gap-4">
          <li>
            <a href="#" className="transition-all">
              Services
            </a>
          </li>
          <li>
            <a href="#catalog" className="transition-all">
              Gift Catalog
            </a>
          </li>
          <li>
            <a href="#" className="transition-all">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#" className="transition-all">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
