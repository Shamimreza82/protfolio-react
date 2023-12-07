import photo from "../../assets/base.jpg";
import { LiaLinkedin, LiaGithub } from "react-icons/lia";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="bg-black ">
      <div className="max-w-7xl m-auto">
        <div className="max-w-7xl m-auto min-h-screen md:py-14 flex justify-center items-center px-4">
          <div>
            <div>
              <div className="flex justify-center md:gap-16 gap-4 items-center flex-col lg:flex-row-reverse">
                <div className="md:w-[25%] w-[60%]  duration-700">
                  <img
                    src={photo}
                    className="p-3 rounded-full hover:rounded-ss-[25px] duration-500 border-[#CCCD34]  border-4 shadow-2xl"
                  />
                </div>
                <div>
                  <h1 className="md:text-[55px] text-[35px]  md:leading-[66px] font-bold text-white">
                    Full Stack Developer <br />{" "}
                    <span className="font-light">MERN</span>
                  </h1>
                  <p className="py-6 md:w-[65%] font-Mulish  text-white text-[19px] leading-[29px]">
                    Hi, I'm Shamim Reza. A passionate Front-end React Developer
                    based in Dhaka, Bangladesh.
                  </p>
                  <div className="flex text-4xl space-x-2">
                    <a href="">
                      <LiaLinkedin className="hover:scale-110 duration-300 hover:text-green-600 text-[#CCCD34] animate-bounce"></LiaLinkedin>
                    </a>
                    <a href="https://github.com/Shamimreza82" target="new">
                      <LiaGithub className="hover:scale-110 duration-300 hover:text-green-600 text-[#CCCD34] animate-bounce"></LiaGithub>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-center md:ml-16 mt-5">
              <p className="text-xl w-32 border-r-4  font-bold text-[#555555]">
                Tech Stack
              </p>
              <div className="flex gap-5 flex-wrap text-5xl ">
                <div className="tooltip" data-tip="HTML">
                  <FaHtml5 className="hover:scale-110 hover:translate-y-2 duration-300 hover:text-green-600 text-[#2d2e32]"></FaHtml5>
                </div>
                <div className="tooltip" data-tip="CSS">
                  <FaCss3Alt className="hover:scale-110 hover:translate-y-2  duration-300 hover:text-green-600 text-[#2d2e32]"></FaCss3Alt>
                </div>
                <div className="tooltip" data-tip="Tailwind CSS">
                  <SiTailwindcss className="hover:scale-110 hover:translate-y-2  duration-300 hover:text-green-600 text-[#2d2e32]"></SiTailwindcss>
                </div>
                <div className="tooltip" data-tip="javaScript">
                  <BiLogoJavascript className="hover:scale-110 hover:translate-y-2  duration-300 hover:text-green-600 text-[#2d2e32]"></BiLogoJavascript>
                </div>
                <div className="tooltip" data-tip="React">
                  <FaReact className="hover:scale-110 hover:translate-y-2  duration-300 hover:text-green-600 text-[#2d2e32]"></FaReact>
                </div>
                <div className="tooltip" data-tip="Express">
                  <SiExpress className="hover:scale-110 hover:translate-y-2  duration-300 hover:text-green-600 text-[#2d2e32]"></SiExpress>
                </div>

                <div className="tooltip " data-tip="MongoDB">
                  <SiMongodb className="hover:scale-110 hover:translate-y-2  duration-300 hover:text-green-600 text-[#2d2e32]"></SiMongodb>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
