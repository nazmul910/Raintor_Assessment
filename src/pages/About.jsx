import { IoIosArrowRoundDown } from "react-icons/io";
import { motion } from "framer-motion";

const brands = [
  { url: "/image/Vector (2).png", bg: "bg-black",  rotate: 15 },
  { url: "/image/facebook.png", bg: "bg-white",  rotate: 5 },
  { url: "/image/Vector (5).png", bg: "bg-white",  rotate: 15 },
  { url: "/image/Vector (4).png", bg: "bg-white",  rotate: 15 },
  { url: "/image/Vector (7).png", bg: "bg-white",  rotate: -5 },
  { url: "/image/Vector (3).png", bg: "bg-white",  rotate: 10 },
];

const works = [
  {cate:"Discovery",des:"We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action."},
  {cate:"Strategy",des:"Every end-to-end project of ours begins with tEspoke pre-build strateu. From brand ID consultation to in-depth ccxle reviews we're here to set the stage for success."},
  {cate:"Design",des:"After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval."},
  {cate:"Build",des:"Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project."},
]

export const About = () =>{
  return(
    <>
      <section className="xl:-mt-12 " id="about">
        <div className="lg:h-screen bg-[url(/image/top.png)] px-4 pt-28  lg:px-32  bg-no-repeat">
          <div className="flex flex-col space-y-6  items-end ">
              <div className="text-black flex justify-center lg:justify-start items-center">
                <IoIosArrowRoundDown className="text-4xl border-black border rounded-full" />
                <p className=" border border-black rounded-full font-bold py-1 px-4">About</p>
              </div>
            <div className=" text-[1.5rem] lg:text-[6rem] font-bold">
              <h1>I’ve been <span className="bg-black text-white rounded-3xl px-2">Developing</span> <br /> Websites since <span className="bg-black text-white rounded-3xl px-2">2013</span> </h1>
            </div>  
          </div>
          <div className="mt-10  font-semibold lg:text-center">
              <p className=" lg:leading-snug">We start every new client interaction with an in-depth discovery call where
                we get to <br className="hidden lg:block" /> know each other and recommend the best course of
                action.</p>
          </div>

          <div className="mt-10 lg:mt-20 lg:flex lg:justify-between lg:items-center ">
                <h2 className="text-center lg:text-start text-xl font-bold mb-6">PREVIOUSLY <br /> WORKED ON</h2>
                <div className=" lg:w-[60%] lg:gap-4 ">
                 {brands.map((brand, index) => (
                    <motion.div
                     key={index}
                     drag
                     dragConstraints={{top: 20, bottom: 20, left: 10, right: 10 }}
                      whileHover={{ scale: 1.1, rotate: 0 }}
                      initial={{ rotate: brand.rotate, y: Math.random() * 20 - 10 }}
                     className={`lg:px-6 py-2 rounded-full shadow-md cursor-pointer mb-10 lg:mb-0 ${brand.bg}`}
                      style={{ display: "inline-block", minWidth: "120px", textAlign: "center" }}
                    >
                     <img src={brand.url} alt="" />

                    </motion.div>
                  ))}
                </div>
          </div>
          <div className="">
            <div className="bg-[#141414] lg:p-12 p-4 rounded-3xl mt-10 ">
            <div className="flex lg:gap-x-20 items-center">
               <div className="text-white flex justify-center lg:w-[300px] lg:justify-start items-center">
               <IoIosArrowRoundDown className="text-4xl border rounded-full" />
               <p className=" border rounded-full py-1 px-4  lg:px-6">Work Process</p>
            </div>
              <h1 className="text-white lg:text-6xl font-semibold hidden lg:block">My Work Process</h1>
            </div>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16">
              {
               works.map((work, index) => {
                 return (
                   <div key={index} className="bg-black p-4 lg:p-10 group hover:rotate-12 hover:bg-[#C5FF41] transition-all duration-300 rounded-lg space-y-6">
                      <div className="flex justify-between">
                        <p className="bg-[#C5FFEE] text-black px-4 rounded-full transition-all duration-300 group-hover:bg-black group-hover:text-white">
                         {work.cate}
                       </p>
                       <button className="text-white underline group-hover:text-black">Read More</button>
                      </div>
                     <div className="text-white text-xl font-thin transition-all duration-300 group-hover:text-black group-hover:[text-shadow:0_0_1px_white,0_0_2px_white]">
                        <p>{work.des}</p>
                      </div>
                   </div>
                  )
                })
              }
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}