import Link from "next/link";
import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
} from "react-icons/fa";
function Footer() {
  return (
    <footer className="py-16 px-6 md:px-16 bg-[#f9ebde] flex flex-col items-start gap-6">
      <div className="flex flex-col md:flex-row items-start justify-between w-full gap-12">
        <div className="footer-links grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="footer-link-box">
            <h3 className="text-xl font-semibold uppercase">Giftinbox</h3>
            <ul>
              <li>
                <Link href="/terms-of-service">Our Terms</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-secondary-links">
          <ul className="flex items-center justify-center gap-2">
            {/* <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li> */}
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100091581798816&mibextid=LQQJ4d"
                className="text-3xl"
              >
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/gift-inbox/"
                className="text-3xl"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom flex flex-col md:flex-row items-center justify-center gap-2 w-full">
        <p>
          Copyright © 2023{" "}
          <Link href="/">
            <strong>Giftinbox</strong>
          </Link>
          . All rights reserved.
        </p>
        <p>
          Designed by{" "}
          <a href="https://growtho.in">
            <strong>GrowthO.</strong>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
