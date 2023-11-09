import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Images/Nav/Logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";
const Navbar = () => {
  const pathname = useLocation().pathname;
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  return (
    <div className="w-full bg-palette-one">
      <div className="max-w-[1200px] mx-auto px-3 md:px-0">
        <div className="flex items-center justify-between w-full h-28 ">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <ul className="hidden md:flex p-0 gap-x-[35px] items-center list-none">
            <li>
              <Link to="/" className="text-lg font-light text-black">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="text-lg font-light text-black">
                About Us
              </Link>
            </li>
            <li>
              <a
                href="https://blog.tradestrek.com"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-light text-black"
              >
                Blog
              </a>
            </li>
            <li>
              <Link to="/wait-list" className="text-lg font-light text-black">
               Join Waitlist
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-lg font-light text-black">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-lg font-light text-black">
                FAQ
              </Link>
            </li>
            <li>
              <a
                href="https://play.google.com/store/apps/details?id=com.tradestrek.tradestrek"
                target="_blank"
                rel="noreferrer"
              >
                <button className="px-5 h-[57px] border-none bg-palette-two text-white rounded-[15px] text-lg font-semibold">
                  Get the App
                </button>
              </a>
            </li>
          </ul>
          <FiMenu
            className="text-3xl font-semibold md:hidden"
            onClick={() => setOpenMenu(true)}
          />
          <div
            className={`md:hidden transition-all duration-500 right-0 top-0 fixed overflow-hidden bg-white z-[99999] h-screen ${
              openMenu ? "w-screen" : "w-0"
            }`}
          >
            <div>
              <div className="flex justify-end px-3 pt-6 pb-10">
                <FiX
                  onClick={() => setOpenMenu(false)}
                  className="text-3xl text-black"
                />
              </div>
              <ul className="list-none">
                <li className="px-4 py-3 border-y">
                  <Link to="/" className="text-lg font-medium text-black">
                    Home
                  </Link>
                </li>
                <li className="px-4 py-3 border-y">
                  <Link
                    to="/about-us"
                    className="text-lg font-medium text-black"
                  >
                    About Us
                  </Link>
                </li>
                <li className="px-4 py-3 border-y">
                  <a
                    href="https://blog.tradestrek.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-medium text-black"
                  >
                    Blog
                  </a>
                </li>
                <li className="px-4 py-3 border-y">
                  <Link
                    to="/contact"
                    className="text-lg font-medium text-black"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="px-4 py-3 border-y">
                  <Link to="/faq" className="text-lg font-medium text-black">
                    FAQ
                  </Link>
                </li>

                <li className="flex justify-center px-4 py-3 border-t">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.tradestrek.tradestrek"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="px-8 h-[47px] border-none bg-palette-two text-white rounded-[15px] font-semibold">
                      Get the App
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
