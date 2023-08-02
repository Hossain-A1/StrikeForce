import {ImFacebook} from "react-icons/im"
import {AiOutlineTwitter,AiFillYoutube} from "react-icons/ai"
const Footer = () => {
  return (
    <footer className="wrapper section-p  bg-dark text-light">
    <div className="flex justify-around items-center gap-5">
    <div className="social flex flex-col items-center gap-5">
    <h2 className="font-semibold text-lg  underline underline-offset-4">Social</h2>
    <span className="text-3xl cursor-pointer"><AiOutlineTwitter/></span>
    <span className="text-3xl cursor-pointer"><ImFacebook/></span>
    <span className="text-3xl cursor-pointer"><AiFillYoutube/></span>
  </div>
       <div className="flex flex-col items-center gap-5" >
    <h2 className="font-semibold text-lg underline underline-offset-4 ">Services</h2> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
  </div> 
  <div className="flex flex-col items-center gap-5" >
    <h2 className="font-semibold text-lg underline underline-offset-4">Contact</h2> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
  </div> 
    </div>
  <div className="mt-5"><p className="text-center text-light/40">Copyright © 2023 - All rights reserved by StrikeForce Industries</p></div>
  
    </footer>
  )
}

export default Footer