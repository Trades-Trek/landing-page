import Illustrate from "@/assets/Images/footer_image.png";
import Appstore from "@/assets/Images/appstore.png";
import Playstore from "@/assets/Images/playstore.png";
import Logo from "@/assets/Images/Footer/LogoWhite.png";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { cachedTime, getCompanyInfoApi } from "@/api/general.api";
import { useQuery } from "react-query";
import Link from "next/link";

const Footer = () => {
  const {data} = useQuery('getCompanyInfoApi',getCompanyInfoApi,cachedTime)

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-y-7 md:flex-row bg-palette-one gap-x-14">
        <div className="md:w-[579px] px-3 md:px-0">
        <br />

          <h2 className="font-bold text-[32px] text-center md:text-left mb-2 pt-12 md:pt-0">
          Download the Trades Trek Stock Trading Simulator App Today
          </h2>
          <p className=" mb-8 text-lg font-light text-center md:text-left leading-[25px]">

          Download the Trades Trek Stock Trading Simulator App Today and Start Learning How to Trade Stocks Risk-Free! Win weekly and monthly cash prizes in our Trades Trek simulation trades competitions.

          </p>
          <div className="flex flex-col items-center md:flex-row gap-y-4 gap-x-3">
            <a 
                          href={data?.ios_download_url??''}
             target="_blank" rel="noreferrer">
                 <img src={Appstore.src} alt="appstore" />
            </a>
            <a
              href={data?.android_download_url??''}
              target="_blank"
              rel="noreferrer"
            >
                <img src={Playstore.src} alt="playstore" />
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
          <br /><br />

        </div>
        <div className="flex justify-center md:block translate-y-7 md:translate-y-9">
          <img src={Illustrate.src} alt="illustration of a girl" />
        </div>
      </div>
      <div className="px-3 py-20 md:px-0 bg-palette-two">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 gap-y-[35px] md:grid-cols-4">
          <div>
            <img src={Logo.src} alt="Logo" className="mb-5" />
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
              <Link href="/" className="font-medium text-white">
                Home
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/about-us" className="font-medium text-white">
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
              <Link href="/contact" className="font-medium text-white">
                Contact
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/faq" className="font-medium text-white">
                FAQ
              </Link>
            </li>
          </ul>
          <ul className="p-0 list-none">
            <li className="mb-4">
              <p className="font-bold text-white">Legal</p>
            </li>
            <li className="mb-3">
              <Link href="/terms-conditions" className="font-medium text-white">
                Terms & Conditions
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/privacy-policy" className="font-medium text-white">
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
                // href="https://web.facebook.com/TradesTrek/"
                href={data?.facebook_url??''}
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook className="text-xl text-white" />
              </a>
              <a
                // href="https://twitter.com/TradesTrek"
                href={data?.twitter_url??''}

                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter className="text-xl text-white" />
              </a>
              <a
                // href="https://www.instagram.com/tradestrek/"
                href={data?.instagram_url??""}

                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-xl text-white" />
              </a>
              <a
                // href="https://www.linkedin.com/company/trades-trek/"
                target="_blank"
                rel="noreferrer"
                href={data?.linkedin_url??''}

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
