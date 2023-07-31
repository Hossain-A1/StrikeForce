"use client"

import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFax } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import Button from "@/components/Button";
const Contact = () => {
  return (
    <div className="wrapper section-padding relative min-h-screen">
      <div className="details grid lg:grid-cols-4 col-span-1 gap-5 z-[30]">
        <div  className="office bg-light shadow-lg rounded flex flex-col items-center text-center gap-5 p-5">
          <IoLocationSharp className="text-4xl font-bold text-green-700" />

          <h2 className="uppercase font-semibold text-md">Our institute</h2>
          <p className="text-sm font-medium capitalize">
            New York City, Los Angeles, Chicago, San Francisco, Washington D.C.
          </p>
        </div>
        <div   className="phone  bg-light shadow-lg rounded flex flex-col items-center text-center gap-5 p-5">
          <BsFillTelephoneFill className="text-4xl font-bold text-green-700" />
          <h2 className="uppercase font-semibold text-md">Phone Number</h2>
          <span className="text-sm">+9823742918</span>
          <span className="text-sm">+742918(Toll free)</span>
        </div>
        <div  className="fax  bg-light shadow-lg rounded flex flex-col items-center text-center gap-5 p-5">
          <FaFax className="text-4xl font-bold text-green-700" />
          <h2 className="uppercase font-semibold text-md">Fax</h2>
          <span className="text-sm">3-347-009-8634</span>
        </div>
        <div   className="email  bg-light shadow-lg rounded flex flex-col items-center text-center gap-5 p-5">
          <MdMarkEmailRead className="text-4xl font-bold text-green-700" />
          <h2 className="uppercase font-semibold text-md">Email</h2>
          <span className="text-sm font-medium">strikeforce@martial.net</span>
        </div>
      </div>

      {/* form here */}
      <form className="z-[20] bg-accent1 flex justify-center items-center -mt-10">
        <div className=" ">
          <div className="data flex flex-col gap-5 items-center py-20 px-5">
          <h2 className="capitalize font-semibold text-2xl text-center text-white">contact us</h2>
            <input
              type="text"
              placeholder="Enter your name"
              className="py-3 px-6 bg-gray-50 rounded-lg outline-none border-2 focus:border-green-700 duration-300 w-[20rem]"
            />
            <input
              type="text"
              placeholder="Enter a valid email address"
              className="py-3 px-6 bg-gray-50 rounded-lg outline-none border-2 focus:border-green-700 duration-300  w-[20rem]"
            />
            <textarea cols={10} rows={5}
              type="text"
              placeholder="Type your message"
              className=" bg-gray-50 px-6 py-3 resize-none rounded-lg outline-none border-2 focus:border-green-700 duration-300 h-[10rem] w-[20rem]"
            />
            <Button href="#" color='transparent' placeholder="Submit"/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
