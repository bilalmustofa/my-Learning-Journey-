import { useState } from 'react';
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.png";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline, IoIosArrowDown } from "react-icons/io";
import { FiUser } from "react-icons/fi";

function Header() {

    const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="bg-transparent fixed top-0 left-0 w-full z-1000 py-5 sm:py-7 lg:py-10">
         <div className="flex items-center justify-between max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">

          {/* Left Side */}
          <div className="flex items-center gap-6 lg:gap-8 shrink-0">
            {/* Logo */}
            <div>
              <img className="w-20 sm:w-24 lg:w-25 h-auto cursor-pointer hover:opacity-80" src={logo} alt="Logo" />
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-5 text-[14px] font-medium">
              <Link className="hover:text-[#b3b3b0]" href="">Home</Link>
              <Link className="hover:text-[#b3b3b0]" href="">TvShows</Link>
              <Link className="hover:text-[#b3b3b0]" href="">Movies</Link>
              <Link className="hover:text-[#b3b3b0]" href="">New & Popular</Link>
              <Link className="hover:text-[#b3b3b0]" href="">My List</Link>
              <Link className="hover:text-[#b3b3b0]" href="">Browse by Language</Link>
            </nav>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4 sm:gap-5 shrink-0">

            {/* search */}
            <div className={`flex items-center border border-transparent transition-all duration-300 ${searchOpen ? "border-white px-2" : ""}`}>
              <button onClick={() => setSearchOpen(!searchOpen)}>
                <CiSearch size={20} className="cursor-pointer" />
              </button>
              <input type="text" placeholder="Search" className={`bg-transparent outline-none text-sm transition-all duration-300 ${searchOpen ? "w-32 sm:w-40 ml-2" : "w-0 ml-0" }`} />
            </div>

            {/* notification */}
            <div className="relative flex items-center cursor-pointer">
              {/* notification icon */}
              <button>
                <IoMdNotificationsOutline size={20} className="cursor-pointer"/>
              </button>
              {/* notification number */}
              <span className="absolute -top-2 -right-2 text-[10px] bg-[red] px-1 rounded-full">2</span>
            </div>

            {/* profile */}
            <div>
              <button className="flex items-center">
                {/* user icon */}
                <FiUser size={20} className="cursor-pointer"/>
                {/* dropDown Icon */}
                <IoIosArrowDown className="hidden sm:block cursor-pointer"/>
              </button>
            </div>
          </div>

        </div>
      </header>
    </>
  );
}

export default Header;
