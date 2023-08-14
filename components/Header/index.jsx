import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClear } from "react-icons/md";
function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full flex-col items-start ">
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
        <button
          className="w-14 h-14 flex items-center justify-center rounded-full md:hidden text-xl"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? <MdClear /> : <HiMenuAlt3 />}
        </button>
      </div>
      {toggle && (
        <ul className="mobile-menu w-full flex-col items-start gap-3">
          <li className="w-full py-3 h-full">
            <Link
              href={"/"}
              className="w-full text-center h-full flex items-center justify-center text-xl"
            >
              Services
            </Link>
          </li>
          <li className="w-full py-3">
            <Link
              href={"/"}
              className="w-full text-center h-full flex items-center justify-center text-xl"
            >
              Gift Catalog
            </Link>
          </li>
          <li className="w-full py-3">
            <Link
              href={"/"}
              className="w-full text-center h-full flex items-center justify-center text-xl"
            >
              Testimonials
            </Link>
          </li>
          <li className="w-full py-3">
            <Link
              href={"/"}
              className="w-full text-center h-full flex items-center justify-center text-xl"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
