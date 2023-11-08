import Illustrate from "../../assets/Images/Footer/Illustrate.png";
import Appstore from "../../assets/Images/appstore.png";
import Playstore from "../../assets/Images/playstore.png";
import Logo from "../../assets/Images/Footer/LogoWhite.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-y-7 md:flex-row bg-palette-one gap-x-14">
        <div className="md:w-[579px] px-3 md:px-0">
          <h2 className="font-bold text-[32px] text-center md:text-left mb-2 pt-12 md:pt-0">
            Invest Smarter, Learn Faster!
          </h2>
          <p className=" mb-16 text-lg font-light text-center md:text-left leading-[25px]">
            The Trades Trek App - Your Path to Financial Mastery. <br/>Download
            Today!
          </p>
          <div className="flex flex-col items-center md:flex-row gap-y-4 gap-x-3">
            <a href="https://apps.apple.com/ng/app/trades-trek/id6451382635" target="_blank" rel="noreferrer">
              <img src={Appstore} alt="appstore" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.tradestrek.tradestrek"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Playstore} alt="playstore" />
            </a>
            <a
              href="https://blog.tradestrek.com"
              target="_blank"
              rel="noreferrer"
              className="text-lg font-medium text-black"
            >
              <button className="text-white border-0 rounded-[px] bg-palette-two" type="button" >
                See Blog
              </button>
            </a>
          </div>
        </div>
        <div className="flex justify-center md:block">
          <img src={Illustrate} alt="illustration of a boy" />
        </div>
      </div>
      <div className="px-3 py-20 md:px-0 bg-palette-two">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 gap-y-[35px] md:grid-cols-4">
          <div>
            <img src={Logo} alt="Logo" className="mb-5" />
            <p className="font-bold text-white">
              © Copyright 2023 Trades Trek.
              <br />
              All rights reserved.
            </p>
          </div>
          <ul className="p-0 list-none">
            <li className="mb-4">
              <p className="font-bold text-white">Company</p>
            </li>
            <li className="mb-3">
              <Link to="/" className="font-medium text-white">
                Home
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/about-us" className="font-medium text-white">
                About Us
              </Link>
            </li>
            <li className="mb-3">
              <a
                href="https://blog.tradestrek.com"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-white"
              >
                Blog
              </a>
            </li>
            <li className="mb-3">
              <Link to="/contact" className="font-medium text-white">
                Contact
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/faq" className="font-medium text-white">
                FAQ
              </Link>
            </li>
          </ul>
          <ul className="p-0 list-none">
            <li className="mb-4">
              <p className="font-bold text-white">Legal</p>
            </li>
            <li className="mb-3">
              <Link to="/terms-conditions" className="font-medium text-white">
                Terms & Conditions
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/privacy-policy" className="font-medium text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
          <ul className="p-0 list-none">
            <li className="mb-4">
              <p className="font-bold text-white">Follow Us</p>
            </li>
            <li className="flex items-center gap-x-4">
              <a
                href="https://web.facebook.com/TradesTrek/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook className="text-xl text-white" />
              </a>
              <a
                href="https://twitter.com/TradesTrek"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter className="text-xl text-white" />
              </a>
              <a
                href="https://www.instagram.com/tradestrek/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-xl text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/trades-trek/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-xl text-white" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
