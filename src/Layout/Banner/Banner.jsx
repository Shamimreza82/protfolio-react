import photo from "../../assets/base.jpg";
import { LiaLinkedin, LiaGithub } from "react-icons/lia";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

const Banner = () => {
  return (
    <div className="max-w-7xl m-auto">
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={photo} className=" w-96 rounded-full shadow-2xl" />
          <div>
            <h1 className="md:text-[55px] text-[35px]  md:leading-[55px] font-bold text-[#2d2e32]">
              Front-End React <br /> Developer
            </h1>
            <p className="py-6 w-[65%] font-Mulish  text-[#555555] text-[19px] leading-[29px]">
              Hi, I'm Shamim Reza. A passionate Front-end React Developer based
              in Dhaka, Bangladesh.
            </p>
            <div className="flex text-4xl space-x-2">
              <LiaLinkedin className="hover:scale-110 duration-300 hover:text-green-600 text-[#2d2e32]"></LiaLinkedin>
              <LiaGithub className="hover:scale-110 duration-300 hover:text-green-600 text-[#2d2e32]"></LiaGithub>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <p className="text-xl w-32 border-r-4 ml-8 font-bold text-[#555555]">
          {" "}
          Tech Stack
        </p>
        <div className="flex gap-5 text-5xl ">
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
  );
};

export default Banner;
