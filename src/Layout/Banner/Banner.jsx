import photo from "../../assets/base.jpg";
import { LiaLinkedin, LiaGithub } from "react-icons/lia";
import "./Banner.css";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import javaScript from "../../assets/images/javascript.png";
import tailwind from "../../assets/images/tailwind.png";
import mongodb from "../../assets/images/mongodb.png";
import react from "../../assets/images/react.png";
import express from "../../assets/images/express.png";
import node from "../../assets/images/node.png";
import Navber from "../Navber/Navber";
import PdfDewonlode from "../../Component/Sheared/PdfDewonlode";
import { CgScrollV } from "react-icons/cg";

const Banner = () => {
  return (
    <div className="bg-black bannerBg">
      <Navber></Navber>
      <div className="max-w-7xl m-auto md:-mt-12">
        <div className="max-w-7xl m-auto min-h-screen md:py-14 flex justify-center items-center px-4">
          <div>
            <div>
              <div className="flex justify-center md:gap-16 gap-4 items-center flex-col lg:flex-row-reverse">
                <div
                  className="md:w-[25%] w-[60%]  duration-700"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <img
                    src={photo}
                    className="p-3 rounded-full hover:rounded-ss-[25px] duration-500 border-[#CCCD34]  border-4 shadow-2xl"
                  />
                </div>
                <div>
                  <h1
                    className="md:text-[55px] text-[24px] text-center md:text-left  md:leading-[66px] font-bold text-white"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-center"
                  >
                    Full Stack Web
                  </h1>

                  <h1 className="md:text-[55px] mt-2 text-[24px] text-center md:text-left  md:leading-[66px] font-bold text-white">
                    Developer <span className=" font-thin">(MERN) </span> <br />{" "}
                  </h1>
                  <p className="py-8 md:w-[65%] font-Mulish  text-white text-[19px] leading-[29px]">
                    Hi, I'm Shamim Reza. A passionate full Stack Developer(MERN)
                    based in Dhaka, Bangladesh.
                  </p>
                  <div className="flex text-4xl space-x-2">
                    <a
                      href="https://www.linkedin.com/in/shamim--reza/"
                      target="blank"
                    >
                      <LiaLinkedin className="hover:scale-110 duration-300 hover:text-green-600 text-[#CCCD34] animate-bounce"></LiaLinkedin>
                    </a>
                    <a href="https://github.com/Shamimreza82" target="new">
                      <LiaGithub className="hover:scale-110 duration-300 hover:text-green-600 text-[#CCCD34] animate-bounce"></LiaGithub>
                    </a>
                  </div>
                  <div
                    className="md:mt-10 mt-4"
                    data-aos="flip-up"
                    data-aos-duration="1000"
                  >
                    <PdfDewonlode></PdfDewonlode>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-6 gap-3 py-5 items-center md:ml-8 md:mt-14 mt-3">
              <p className="text-xl w-32 border-r-4 border-[#CCCD34]  font-bold text-white">
                Tech Stack
              </p>
              <div className="flex gap-5 flex-wrap text-5xl ">
                <div className="tooltip" data-tip="HTML">
                  <img
                    className="hover:scale-110 md:h-16 h-12 hover:translate-y-2 duration-300 hover:text-green-600 text-[#2d2e32]"
                    src={html}
                    alt=""
                  />
                </div>
                <div className="tooltip" data-tip="CSS">
                  <img
                    className="hover:scale-110 md:h-16 h-12 hover:translate-y-2 duration-300 hover:text-green-600 text-[#2d2e32]"
                    src={css}
                    alt=""
                  />
                </div>
                <div className="tooltip" data-tip="Tailwind CSS">
                  <img
                    className="hover:scale-110 md:h-16 h-12 hover:translate-y-2 duration-300 hover:text-green-600 text-[#2d2e32]"
                    src={tailwind}
                    alt=""
                  />
                </div>
                <div className="tooltip" data-tip="javaScript">
                  <img
                    className="hover:scale-110 md:h-16 h-12 hover:translate-y-2 duration-300 hover:text-green-600 text-[#2d2e32]"
                    src={javaScript}
                    alt=""
                  />
                </div>
                <div className="tooltip" data-tip="React">
                  <img
                    className="hover:scale-110 md:h-16 h-12 hover:translate-y-2 duration-300 hover:text-green-600 text-[#2d2e32]"
                    src={react}
                    alt=""
                  />
                </div>
                <div className="tooltip" data-tip="Express">
                  <img
                    className="hover:scale-110 md:h-16 h-12 hover:translate-y-2 duration-300 hover:text-green-600 text-[#2d2e32]"
                    src={express}
                    alt=""
                  />
                </div>
                <div className="tooltip" data-tip="Node">
                  <img
                    className="hover:scale-110 md:h-16 h-12 hover:translate-y-2 duration-300 hover:text-green-600 text-[#2d2e32]"
                    src={node}
                    alt=""
                  />
                </div>

                <div className="tooltip " data-tip="MongoDB">
                  <img
                    className="hover:scale-110 md:h-16 h-12 hover:translate-y-2 duration-300 hover:text-green-600 text-[#2d2e32]"
                    src={mongodb}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:visible invisible justify-center py-6 absolute md:bottom-0 left-1/2 text-2xl mt-3">
          <CgScrollV className="text-white animate-bounce"></CgScrollV>
        </div>
      </div>
    </div>
  );
};

export default Banner;
