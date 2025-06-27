import { PiFlaskFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { CgMenuGridO } from "react-icons/cg";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full h-[10vh] bg-[#1E1E21] lg:h-[8vh]">
        <div className="flex justify-between items-center h-full px-2 sm:px-4 lg:px-0">
          {/* Left side - About and Store links */}
          <div className="text-xs sm:text-sm flex items-center justify-center sm:justify-evenly text-white w-[25vw] sm:w-[20vw] lg:w-[10vw] h-full font-light">
            <a
              href="https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header"
              className="hover:underline hidden sm:block"
            >
              About
            </a>
            <a
              href="https://store.google.com/in/?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN"
              className="hover:underline hidden sm:block"
            >
              Store
            </a>
            {/* Mobile - show only one link or abbreviate */}
            <a
              href="https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header"
              className="hover:underline sm:hidden"
            >
              About
            </a>
          </div>

          {/* Right side - Gmail, Images, and Icons */}
          <div className="text-xs sm:text-sm flex items-center justify-center text-white w-[60vw] sm:w-[50vw] lg:w-[20vw] h-full font-light">
            <div className="w-[50%] sm:w-[50%] flex justify-evenly">
              <a
                href="https://mail.google.com/mail/u/0/?ogbl#inbox"
                className="hover:underline hidden md:block"
              >
                Gmail
              </a>
              <a
                href="https://www.google.com/imghp?hl=en&authuser=0&ogbl"
                className="hover:underline hidden md:block"
              >
                Images
              </a>
              {/* Mobile - show abbreviated versions */}
              <a
                href="https://mail.google.com/mail/u/0/?ogbl#inbox"
                className="hover:underline md:hidden"
              >
                Mail
              </a>
              <a
                href="https://www.google.com/imghp?hl=en&authuser=0&ogbl"
                className="hover:underline md:hidden"
              >
                Img
              </a>
            </div>
            
            <div className="flex w-[50%] sm:w-[50%] text-lg sm:text-xl lg:text-2xl justify-evenly items-center">
              {/* Search Labs */}
              <div className="relative group hover:bg-[#2B2B2E] duration-300 rounded-full p-1 sm:p-2">
                <a href="https://labs.google.com/search?source=hp&authuser=0">
                  <PiFlaskFill />
                </a>
                <div className="absolute left-[-19px] bottom-[-25px] text-xs w-[80px] bg-gray-600 rounded-sm p-1 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-500 text-center hidden sm:block">
                  Search Labs
                </div>
              </div>

              {/* Google Apps */}
              <div className="relative group hover:bg-[#2B2B2E] duration-300 rounded-full p-1 sm:p-2">
                <a href="https://about.google/products/">
                  <CgMenuGridO />
                </a>
                <div className="absolute left-[-19px] bottom-[-25px] text-xs w-[80px] bg-gray-600 rounded-sm p-1 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-500 text-center hidden sm:block">
                  Google apps
                </div>
              </div>

              {/* Profile */}
              <div className="relative group hover:bg-[#2B2B2E] duration-300 rounded-full p-1 sm:p-2">
                <a href="">
                  <CgProfile />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;