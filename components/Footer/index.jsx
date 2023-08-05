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
            <h3 className="text-xl font-semibold uppercase">Company</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Packaging and Branding</a>
              </li>
              <li>
                <a href="#">Affilate Program</a>
              </li>
              <li>
                <a href="#">Our Branding Partners</a>
              </li>
            </ul>
          </div>
          <div className="footer-link-box">
            <h3 className="text-xl font-semibold uppercase">Help</h3>
            <ul>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="footer-link-box">
            <h3 className="text-xl font-semibold uppercase">Connect</h3>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-secondary-links">
          <ul className="flex items-center justify-center gap-2">
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom flex flex-col md:flex-row items-center justify-center gap-2 w-full">
        <p>8:00am – 5:00pm PT, Monday - Friday</p>
        <p>206-557-4525</p>
        <p>help@company.com</p>
      </div>
    </footer>
  );
}

export default Footer;
