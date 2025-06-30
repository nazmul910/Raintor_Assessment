import { IoIosArrowRoundDown } from "react-icons/io";
import { Slider } from "../components/Slider";
export const Home = () =>{
  return(
    <>
      <section className="p-2 lg:p-5 lg:-mt-10 mt-10 ">
        <div className="bg-black p-8 lg:p-16 rounded-3xl">
          <div>
            <div className="text-white flex justify-center lg:justify-start items-center">
              <IoIosArrowRoundDown className="text-4xl border rounded-full" />
              <p className=" border rounded-full py-1 px-4">Why Choose me</p>
            </div>
            <div className="text-white lg:flex lg:justify-between mt-12">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-snug">My Extensive <br /> List of Skills</h1>
              <div className="py-10">
                <p className=" text-center lg:text-right font-semibold text-lg ">Building the worlds best marketing Your <br /> trusted partner for strategy, design, and dev.</p>
                <hr className="mt-6" />
              </div>
            </div>
            <div className="lg:mt-20">
              <Slider/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}