import { IoIosArrowRoundForward } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

export const Navbar = () =>{

  const [showMenu,setShowMenu] = useState(true)

  return(
    <> 
      <section className="lg:h-screen bg-[url(/image/middle.png)] bg-no-repeat">
        <div>
          <nav className="flex bg-neutral-50  top-0 left-0 right-0  lg:bg-transparent justify-between p-3 lg:items-center lg:py-10 lg:px-10 ">
            <div className="font-bold lg:text-5xl">
              <h1>DEVLOP.ME</h1>
            </div>
            {/* for desktop menu start */}
            <div className="lg:flex hidden lg:block items-center gap-x-16">
              <div className="">
                <ul className="flex gap-x-16 font-bold">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="#blog">Blog</a>
                  </li>
                </ul>
              </div>
              <button className="flex items-center lg:gap-x-2 border lg:py-3 rounded-full lg:pr-3 font-semibold hover:pl-3 transition-all duration-300">
                <IoIosArrowRoundForward className="border text-3xl rounded-full" />
                Start Project
              </button>
            </div>
            {/* for desktop menu end */}
            <div onClick={() => setShowMenu(!showMenu)} className="lg:hidden cursor-pointer text-2xl">
                {
                showMenu ? <CiMenuFries /> : <RxCross1 />
                }
            </div>
          </nav>
          {/* Mobile Menu start*/}
          {!showMenu && (
            <div className="absolute top-12 left-0 w-full bg-white shadow-md py-10 px-5 z-40 transition-all duration-500">
              <ul className="flex flex-col gap-y-6 text-center text-xl font-semibold">
                <li><a href="#home" onClick={() => setShowMenu(true)}>Home</a></li>
                <li><a href="#about" onClick={() => setShowMenu(true)}>About</a></li>
                <li><a href="#portfolio" onClick={() => setShowMenu(true)}>Portfolio</a></li>
                <li><a href="#blog" onClick={() => setShowMenu(true)}>Blog</a></li>
              </ul>
            </div>
          )}
          {/* Mobile Menu end*/}

          {/* Hero section start */}

            <div className="p-3 lg:px-10 lg:mt-12" id="home">

              <div className="xl:text-[6.9rem] lg:text-[5.2rem] text-2xl font-semibold leading-snug">
                <h1>Trusted <span className="bg-black text-white rounded-3xl px-4">Partner</span> for <br /> Your Website <span className="bg-black text-white rounded-3xl px-4 ">Develop.</span></h1>
              </div>
              <div className="lg:flex items-start mt-10 lg:mt-20">
                <div className="hidden lg:block lg:flex lg:items-end  lg:w-[30%]">
                  <p className=" -rotate-90 font-bold text-xl">@williamrey</p>
                  <div className="lg:space-y-3 lg:text-2xl">
                    <FaTwitter className=" -rotate-90 " />
                    <FaInstagram  className=" -rotate-90"/>
                    <FaFacebook className=" -rotate-90" /> <br />
                    <hr className="hidden lg:block rotate-90 bg-black h-[2px] w-[50px] -ml-4" />
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-xl lg:leading-9">
                    <p>Building the worlds best marketing websites for over a decade.</p>
                    <p> Your trusted partner for strategy, design, and dev.</p>
                  </div>
                  <button className=" mt-10 lg:mt-0 flex border items-center pr-4 lg:hover:pl-4 transition-all duration-200 py-1 rounded-full lg:gap-x-4">
                    <IoCall className="border rounded-full text-2xl p-1 lg:text-5xl lg:p-2" /> 
                    <p className="font-semibold">Schedule a Call</p>
                  </button>
                </div>
              </div>
            </div>
          {/* Hero section end*/}
        </div>
      </section>
    </>
  )
}