import { IoIosArrowRoundDown } from "react-icons/io";
import { IoCall } from "react-icons/io5"
import { IoIosSend } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export const Contact = () =>{
  return(
    <>
      <section className="h-[100vh] bg-[url(/image/bottom.png)] bg-no-repeat lg:mt-[1300px] xl:mt-[600px] px-5 lg:px-24 py-28 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className=" space-y-10">
            <div className="text-black flex  justify-center lg:justify-start items-center">
              <IoIosArrowRoundDown className="text-4xl border border-black rounded-full" />
              <p className=" border border-black rounded-full py-1 px-4">Contact</p>
            </div>
            <h1 className="text-[2.3rem] xl:text-[5rem] font-bold">Interested in <br /> <span>work</span> together?</h1>
            <p className="font-semibold text-xl">We start every new client interaction with an in-depth discovery call where we get to know each other</p>
             <button className=" mt-10 lg:mt-0 flex border items-center pr-4 lg:hover:pl-4 transition-all duration-200 py-1 rounded-full lg:gap-x-4">
              <IoCall className="border rounded-full text-2xl p-1 lg:text-5xl lg:p-2" /> 
              <p className="font-semibold">Schedule a Call</p>
            </button>
          </div>
          <div className="bg-black rounded-3xl space-y-10 text-white p-5 lg:p-10">
              <div className="flex flex-col space-y-6">
                <input type="text" placeholder="Enter your name" className=" text-white py-3 placeholder:text-white text-xl bg-black  border-b-2 focus:border-none " />
                <input className=" text-white py-3 placeholder:text-white text-xl bg-black  border-b-2 focus:border-none " type="email" placeholder="Your email address" />
                <input className=" text-white py-3 placeholder:text-white text-xl bg-black  border-b-2 focus:border-none " type="text" placeholder="Describe your project" />
              </div>
              <div className="grid lg:flex lg:items-center gap-5">
                <button className="flex lg:justify-start justify-center items-center border py-1 pr-4 hover:pl-4 transition-all duration-300 rounded-full gap-3">
                  <IoIosSend className="border text-2xl rounded-full" />
                  <p>Send</p>
                </button>
                <p className="text-center">or</p>
                <button className="flex lg:justify-start justify-center items-center border py-1 pr-4 hover:pl-4 transition-all duration-300 rounded-full gap-3">
                  <IoIosMail className="border text-2xl rounded-full" />
                  <p>Contact me</p>
                </button>
              </div>
              <div className="flex items-center gap-6 lg:gap-10 pt-10">
                <p>@williamrey</p>
                <div className=" flex gap-4 text-2xl">    
                  <hr className="text-white hidden lg:block  h-2 w-10 mt-3" />   
                  <FaFacebook  />
                  <FaInstagram />
                  <FaTwitter />
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}