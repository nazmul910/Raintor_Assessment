import { About } from "../pages/About"
import { Contact } from "../pages/Contact"
import { Home } from "../pages/Home"
import { Footer } from "./Footer"

import { Navbar } from "./Navbar"

export const AppLayout = () =>{
  return(
    <>
      <div className="container mx-auto lg:w-[1440px]">
        <Navbar/>
        <Home/>
        <About/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}