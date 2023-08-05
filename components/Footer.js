import { ImFacebook } from "react-icons/im";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className='wrapper py-5 bg-gray-700 text-white '>
      <div className='flex justify-around items-center gap-5'>
        <div className='social flex justify-center items-center gap-5'>
          <span className='text-3xl cursor-pointer'>
            <AiOutlineTwitter />
          </span>
          <span className='text-3xl cursor-pointer'>
            <ImFacebook />
          </span>
          <span className='text-3xl cursor-pointer'>
            <AiFillYoutube />
          </span>
        </div>

        <div className='flex justify-around items-center gap-5'>
          <Link href='/arts' className='link link-hover'>
            Arts
          </Link>
          <Link href='/instructors' className='link link-hover'>
            Instructors
          </Link>
          <Link href='/gallery' className='link link-hover'>
            Gallery
          </Link>

          <Link href='/about-us' className='link link-hover'>
            About us
          </Link>
          <Link href='/contact-us' className='link link-hover'>
            Contact us
          </Link>
          <Link href='/faq' className='link link-hover'>
            FAQ
          </Link>
        </div>
      </div>

      <div className='mt-16'>
        <p className='text-center text-light/40'>
          Copyright © 2023 - All rights reserved by StrikeForce Industries
        </p>
      </div>
    </footer>
  );
};

export default Footer;
