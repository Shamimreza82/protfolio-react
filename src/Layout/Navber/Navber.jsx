import { useState } from "react";
import { FaAdjust } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { TfiAlignRight } from "react-icons/tfi";
import { GrClose } from "react-icons/gr";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black" >
      {isOpen && (
        <div className="absolute h-screen z-30 bg-[#CCCD34] w-full">
          <div className="flex justify-between p-9">
            <h1>reza.dev</h1>
            <button onClick={() => setIsOpen(false)}>
              <GrClose className="hover:text-white"></GrClose>
            </button>
          </div>
          <div className="max-w-4xl m-auto flex items-center h-[70vh]">
            <div className="flex gap-64">
              <div className="space-y-8 ">
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="text-4xl font-semibold hover:tracking-[18px] text-black duration-500 block cursor-pointer"
                >
                  Home
                </Link>
                
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="text-4xl font-semibold hover:tracking-[18px] text-black duration-500 block cursor-pointer"
                >
                  About
                </Link>
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="text-4xl font-semibold hover:tracking-[18px] text-black duration-500 block cursor-pointer"
                >
                  Projects
                </Link>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="text-4xl font-semibold hover:tracking-[18px] text-black duration-500 block"
                >
                  Contact
                </Link>
              </div>
              <div className="space-y-6">
                <h1 className="text-3xl font-semibold text-black">
                  Let’s find solutions together?
                </h1>
                <p className="text-black">
                  Use my contacts beloyou need to put a project on the move,
                  let’s work on it!
                </p>
                <p className="hover:tracking-[3px] text-black duration-500">
                  shamimrezaone@gmail.com
                </p>
                <button className="border-2 px-3 py-2 hover:bg-black hover:text-white hover:duration-500 border-gray-950 text-black font-semibold">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="drawer max-w-7xl m-auto bg-black relative">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar  bg-opacity-50 shadow-md py-2 md:py-5">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 font-bold text-xl hover:tracking-[8px] duration-500 text-white pl-8">
              Reza.dev
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal gap-6 pr-12 text-base font-bold text-white">
                
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : "  hover:text-[#CCCD34]  duration-300 cursor-pointer "
                  }
                >
                  Home
                </NavLink>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="hover:text-[#CCCD34]  duration-300 cursor-pointer"
                >
                  About
                </Link>
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="hover:text-[#CCCD34]  duration-300 cursor-pointer"
                >
                  Projects
                </Link>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="hover:text-[#CCCD34]  duration-300 cursor-pointer"
                >
                  Contact
                </Link>
                <button onClick={() => setIsOpen(!isOpen)}>
                  <TfiAlignRight className="text-3xl hover:text-[#CCCD34]  duration-300 font-bold"></TfiAlignRight>
                </button>
              </ul>
            </div>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side z-50 h-full ">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-[#CCCD34]">
            {/* Sidebar content here */}
            <li>
              <a className="text-3xl font-semibold ">Home</a>
            </li>
            <li>
              <a className="text-3xl font-semibold ">About</a>
            </li>
            <li>
              <a className="text-3xl font-semibold ">Projects</a>
            </li>
            <li>
              <a className="text-3xl font-semibold ">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
