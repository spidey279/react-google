import { FaMicrophone } from "react-icons/fa";
import gemini from "../assets/gemini-icon-logo-png_seeklogo-611605.png";
import { IoMdSearch } from "react-icons/io";
import { FaCamera } from "react-icons/fa";

const Hero = () => {
  return (
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
  );
};

export default Hero;
