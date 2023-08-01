import Link from "next/link";

const Navber = () => {
  return (
    <header className="h-20   border-b bg-rose-700/70 text-gray-200">
      <div className="h-full w-full flex justify-around items-center">
        <nav className="nav-start">
          <Link href="/" className="link-item text-2xl font-semibold">
            StrikeForce
          </Link>
        </nav>
        <nav className="nav-middle font-medium">
          <ul className="flex gap-5 capitalize">
            <li>
              <Link href="/" className="link-item">
                home
              </Link>
            </li>
            <li>
              <Link href="/arts" className="link-item">
              arts
              </Link>
            </li>
            <li>
              <Link href="/instructors" className="link-item">
              instructors
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="link-item">
              gallery
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="link-item">
              about us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="link-item">
              faq 
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="link-item">
              contact us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navber;
