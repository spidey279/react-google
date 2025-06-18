import React from "react";
import { PiFlaskFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { CgMenuGridO } from "react-icons/cg";
import { FaMicrophone } from "react-icons/fa";
import gemini from "./assets/gemini-icon-logo-png_seeklogo-611605.png";
import { IoMdSearch } from "react-icons/io";
import { FaCamera } from "react-icons/fa";

import "./index.css";

const App = () => {
  return (
    <div>
      <nav className="w-full h-[10vh] bg-[#1E1E21]">
        <div className="flex justify-between items-center  h-full">
          <div className=" text-sm  flex items-center justify-evenly g-10 text-white w-[10vw] h-full font-[300px]">
            <a
              href="https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header"
              className="hover:underline"
            >
              About
            </a>
            <a
              href="https://store.google.com/in/?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN"
              className="hover:underline "
            >
              Store
            </a>
          </div>
          <div className="  text-sm  flex items-center justify-evenly g-10 text-white w-[20vw] h-full font-[300px]">
            <div className="w-[50%]  flex justify-evenly">
              <a
                href="https://mail.google.com/mail/u/0/?ogbl#inbox"
                className="hover:underline"
              >
                Gmail
              </a>
              <a
                href="https://www.google.com/imghp?hl=en&authuser=0&ogbl"
                className="hover:underline"
              >
                Images
              </a>
            </div>
            <div className="  flex w-[50%] text-2xl justify-evenly items-center">
              <div className="relative group hover:bg-[#2B2B2E] duration-350 rounded-full p-2 ">
                <a href="https://labs.google.com/search?source=hp&authuser=0">
                  {" "}
                  <PiFlaskFill />
                </a>{" "}
                <div
                  className="absolute left-[-19px] bottom-[-25px] text-xs w-[80px] bg-gray-600 rounded-sm p-1 
                  opacity-0 group-hover:opacity-100 
                  pointer-events-none group-hover:pointer-events-auto 
                  transition-opacity duration-1000 text-center"
                >
                  Search Labs
                </div>
              </div>

              <div className="relative group hover:bg-[#2B2B2E] duration-350 rounded-full p-2 ">
                <a href="https://about.google/products/ ">
                  {" "}
                  <CgMenuGridO />
                </a>{" "}
                <div
                  className="absolute left-[-19px] bottom-[-25px] text-xs w-[80px] bg-gray-600 rounded-sm p-1 
                  opacity-0 group-hover:opacity-100 
                  pointer-events-none group-hover:pointer-events-auto 
                  transition-opacity duration-1000 text-center"
                >
                  Google apps
                </div>
              </div>
              <div className="relative group hover:bg-[#2B2B2E] duration-350 rounded-full p-2 ">
                <a href="">
                  {" "}
                  <CgProfile />
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="w-full h-[73vh] bg-[#1E1E21]">
        <div className="flex flex-col space-y-10 items-center">
          <h1 className="text-8xl font-medium text-white tracking-tight  ">
            Google
          </h1>

          <input
            className="hover:bg-[#686868] caret-white  focus:outline-none relative p-3 bg-[#454A52] rounded-full w-[45%] "
            type="text"
          />
          <IoMdSearch className="text-[125%]   absolute text-[#A0A0A0]  top-52.5 left-97   " />
          <FaMicrophone className="cursor-pointer text-[125%]  absolute text-[#A0A0A0] top-52.5 right-110 " />
          <FaCamera className="text-[125%] cursor-pointer  absolute text-[#A0A0A0] top-52.5 right-100 " />
          <div className="text-white flex space-x-4 mt-[-10px] ">
            <button className="hover:border-[#686868] hover:border bg-[#3C3C3C] p-2 rounded-sm text-sm w-32 cursor-pointer h-9 flex items-center justify-center ">
              Google Search
            </button>
            <button className="bg-[#3C3C3C] hover:border-[#686868] hover:border p-2 rounded-sm text-sm   w-32 cursor-pointer h-9 flex items-center justify-center ">
              I'm Feeling Lucky
            </button>
          </div>
          <p className="text-white flex gap-2 ">
            {" "}
            <img className="w-7" src={gemini} alt="" />
            <span className="text-sm">
              Google Gemini,{" "}
              <a
                href="https://gemini.google.com/share/e8db4a13b525?utm_source=dg&utm_medium=paid-media&utm_campaign=in_1ppd_q2_1002"
                className="text-[#6BA3F5] hover:underline"
              >
                {" "}
                create an Algebra quiz for the next 10 minutes
              </a>
            </span>
          </p>
          <p className=" text-white text-sm">
            <span className="text-[#9AA0A6] "> Google offered in:</span>{" "}
            <a className="cursor-pointer text-[#6BA3F5] hover:underline">
              {" "}
              हिन्दी{" "}
            </a>
            <a className="cursor-pointer text-[#6BA3F5] hover:underline">
              {" "}
              বাংলা{" "}
            </a>
            <a className="cursor-pointer text-[#6BA3F5] hover:underline">
              {" "}
              తెలుగు{" "}
            </a>
            <a className="cursor-pointer text-[#6BA3F5] hover:underline">
              {" "}
              मराठी{" "}
            </a>
            <a className="cursor-pointer text-[#6BA3F5] hover:underline">
              {" "}
              தமிழ்{" "}
            </a>
            <a className="cursor-pointer text-[#6BA3F5] hover:underline">
              {" "}
              ગુજરાતી{" "}
            </a>
            <a className="cursor-pointer text-[#6BA3F5] hover:underline">
              {" "}
              ಕನ್ನಡ{" "}
            </a>
            <a className="cursor-pointer text-[#6BA3F5] hover:underline">
              {" "}
              മലയാളം{" "}
            </a>
            <a className="cursor-pointer text-[#6BA3F5] hover:underline">
              {" "}
              ਪੰਜਾਬੀ{" "}
            </a>
          </p>
        </div>
      </main>
      <footer className="h-[17vh] bg-[#131415]">
        <div className="h-[55%]  border-b-[#3C4043] border-b-1  text-white flex items-center pl-8 text-sm ">
          India
        </div>
        <div className="flex h-[45%] text-white text-sm justify-between items-center ">
          <div className="flex items-center justify-evenly pl-5 gap-3  w-[26%] h-full">
            <a
              href="https://business.google.com/in/google-ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
              className="hover:underline"
            >
              Advertising
            </a>
            <a
              href="https://business.google.com/in/business-profile/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1"
              className="hover:underline"
            >
              Business
            </a>
            <a
              href="https://www.google.com/search/howsearchworks/?fg=1"
              className="hover:underline"
            >
              How Search works
            </a>
          </div>
          <div className="flex items-center gap-8 justify-end  pr-10  w-[26%] h-full">
            <a
              href="https://policies.google.com/privacy?hl=en-IN&fg=1"
              className="hover:underline"
            >
              Privacy
            </a>
            <a
              href="https://policies.google.com/terms?hl=en-IN&fg=1"
              className="hover:underline"
            >
              Terms
            </a>
            <a className="hover:underline">Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
