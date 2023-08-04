import Link from "next/link";
import Button from "./Button";

const Navber = () => {
  return (
    <header className='h-20   border-b'>
      <div className='h-full w-full flex justify-around items-center'>
        <nav className='nav-start'>
          <Link href='/' className='link-item text-2xl font-semibold'>
            StrikeForce
          </Link>
        </nav>
        <nav className='nav-middle'>
          <ul className='flex gap-5 capitalize'>
            <li>
              <Link href='/' className='link-item'>
                home
              </Link>
            </li>
            <li>
              <Link href='/arts' className='link-item'>
                arts
              </Link>
            </li>
            <li>
              <Link href='/instructors' className='link-item'>
                instructors
              </Link>
            </li>
            <li>
              <Link href='/gallery' className='link-item'>
                gallery
              </Link>
            </li>
            <li>
              <Link href='/aboutus' className='link-item'>
                about us
              </Link>
            </li>
            <li>
              <Link href='/faq' className='link-item'>
                faq
              </Link>
            </li>
            <li>
              <Link href='/contactus' className='link-item'>
                contact us
              </Link>
            </li>
            <li>
              <Button
                href='/contactus'
                color='dark'
                placeholder='Get started'
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navber;
