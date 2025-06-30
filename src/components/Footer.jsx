export const Footer = () =>{
  return(
    <>
      <section className=" px-2 lg:px-7 mt-80 xl:-mt-40">
        <div className="bg-black rounded-3xl px-4 lg:px-12 py-6 lg:py-16">
          <div className="grid lg:flex lg:justify-between">
            <div className="w-[20%]">
              <h1 className="text-[#C5FF41] uppercase text-3xl font-bold">devlop.me</h1>
            </div>
             <div className="grid text-white lg:w-[70%] space-y-5 lg:space-y-24">
            <h1 className=" text-[2.6rem] lg:text-6xl">As cou can</h1>
              <div className="grid  lg:flex lg:justify-between items-start">
                
                <div className="grid  sm:grid-cols-2 lg:grid-cols-1 gap-y-8">     
                  <div className=" space-y-3">
                    <p className="text-[#757575] font-semibold">Say hello</p>
                    <div>
                      <h1>HELLO@DEVLOP.ME.COM</h1>
                      <h1>MAHBUBUL@ME.COM</h1>
                    </div>
                  </div>
                  <div className=" space-y-3">
                    <p className="text-[#757575] font-semibold">Call</p>
                    <div>
                      <h1>+784549 4981 00</h1>
                      <h1>+8845 0100 211</h1>
                    </div>
                  </div>
                </div>
                <div className=" space-y-4 mt-5 lg:mt-0">
                  <h1 className="text-[#757575] font-medium">Menu</h1>
                  <ul className=" lg:space-y-4 font-semibold">
                    <li>
                      <a href="#home">HOME</a>
                    </li>
                    <li>
                      <a href="#about">ABOUT</a>
                    </li>
                    <li>
                      <a href="#portfolio">PORTFOLIO</a>
                    </li>
                    <li>
                      <a href="#blog">BLOG</a>
                    </li>
                  </ul>
                </div>
                <div className=" space-y-4 mt-5 lg:mt-0">
                  <h1 className="text-[#757575] font-medium">Social</h1>
                  <ul className=" lg:space-y-4 font-semibold">
                    <li>
                      <a href="#">TWITTER</a>
                    </li>
                    <li>
                      <a href="#">INSTAGRAM</a>
                    </li>
                    <li>
                      <a href="#">FACEBOOK</a>
                    </li>
                    <li>
                      <a href="#">BEHANCE</a>
                    </li>
                    <li>
                      <a href="#">DRIBBLE</a>
                    </li>
                  </ul>
                </div>
                
              </div>

            </div>
          </div>
          <div className="flex justify-between items-center text-white mt-10">
              <h1 className="font-bold">BESNIK</h1>
              <p className="text-[#757575] text-[10px] sm:text-sm">© devlop.me 2022</p>
              <p className="text-[#757575] font-semibold text-[10px] sm:text-sm">PRIVACY - TERMS</p>
          </div>
          <div>

          </div>
        </div>
      </section>
    </>
  )
}