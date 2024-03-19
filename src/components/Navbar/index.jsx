import Link from "next/link";
import Logo from "../../assets/Images/Nav/Logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";
import { cachedTime, getCompanyInfoApi } from "../../api/general.api";
import { useQuery } from "react-query";
import { usePathname } from "next/navigation";
import { useMediaQuery } from 'react-responsive'
const Navbar = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const  {isLoading,data} = useQuery('getCompanyInfoApi',getCompanyInfoApi,cachedTime)
  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  return (
    <div className="w-full bg-palette-one">
      <div className="max-w-[1200px] mx-auto px-3 md:px-0">
        <div className="flex items-center justify-between w-full h-28 ">
          <Link href="/">
            <img src={Logo.src} alt="Logo" />
          </Link>
          <ul className="hidden md:flex p-0 gap-x-[35px] items-center list-none">
            <li>
              <Link href="/" className="text-lg font-light text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="text-lg font-light text-black">
                About Us
              </Link>
            </li>

            <li>
              <Link 
              // href="/features"
              href="#"
               className="text-lg font-light text-black">
              Features
              </Link>
            </li>
             
        <ResourcesDropdown />
            <li>
              <Link href="/contact" className="text-lg font-light text-black">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-lg font-light text-black">
                FAQ
              </Link>
            </li>
            {/* <li>
              <a
                href="https://play.google.com/store/apps/details?id=com.tradestrek.tradestrek"
                target="_blank"
                rel="noreferrer"
              >
                <button className="px-5 h-[57px] border-none bg-palette-two text-white rounded-[15px] text-lg font-semibold">
                  Get the App
                </button>
              </a>
            </li> */}
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
                  <Link href="/" className="text-lg font-medium text-black">
                    Home
                  </Link>
                </li>
                <li className="px-4 py-3 border-y">
                  <Link
                    href="/about-us"
                    className="text-lg font-medium text-black"
                  >
                    About Us
                  </Link>
                </li>
                
                <li className="px-4 py-3 border-y">
                  <Link
                    // href="/features"
                    href="#"
                    className="text-lg font-medium text-black"
                  >
              Features

                  </Link>
                </li>
                
                <ResourcesDropdown />


                <li className="px-4 py-3 border-y">
                  <Link
                    href="/contact"
                    className="text-lg font-medium text-black"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="px-4 py-3 border-y">
                  <Link href="/faq" className="text-lg font-medium text-black">
                    FAQ
                  </Link>
                </li>
                <li className="flex justify-center px-4 py-3 border-t">
                  <a
                    href={!isLoading?data.dynamic_link??'':''}
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

const ResourcesDropdown =()=>{
  const [resourceDropdown,setResourceDropdown] = useState(false)
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <li 
            
    onMouseOver={e=>{
      if(!isTabletOrMobile){
        setResourceDropdown(true)
      }
    }}
    onMouseOut={e=>{
      if(!isTabletOrMobile){
        setResourceDropdown(false)
      }
  }}
  onClick={e=>{
    e.preventDefault()
    if(isTabletOrMobile){
      setResourceDropdown(!resourceDropdown)
    }
  }}
    className={`relative `}>
      <Link href="#" className="text-lg  font-medium px-4 py-3 border-y md:px-0 md:py-0 md:border-0 md:font-light text-black flex items-center ">
      <span>Resources</span>
      <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
      </svg>
      </Link>
      <div className={`bg-[#7f00ff] absolute  px-5 text-center rounded  ${resourceDropdown?'block':'hidden'}`}>
        <ul>
          <li className="py-2">
      

 <Link  onClick={() => {
    window.open("https://blog.tradestrek.com")
     }} href="https://blog.tradestrek.com"  target="_blank" className="text-lg font-light text-white">
            Blog
          </Link>

      </li >
        <li className="py-2">
          <Link href="/join-community" className="text-lg font-light text-white">
            Join Community
          </Link>
        </li>

        </ul>
      </div>
    </li>

  )
}
