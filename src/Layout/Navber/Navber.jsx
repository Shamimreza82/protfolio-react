import { useState } from "react";
import { FaAdjust } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { TfiAlignRight } from "react-icons/tfi";
import { GrClose } from "react-icons/gr";
import { CgMenuRightAlt } from "react-icons/cg";
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
    <div>
      {isOpen && (
        <div className="absolute h-screen z-30 bg-[#CCCD34] w-full">
          <div className="flex justify-between max-w-7xl m-auto p-9  px-14">
            <div className="flex-1 flex justify-end md:justify-start px-2 mx-2 font-light text-xl hover:tracking-[8px] duration-500 text-black pl-8">
              Reza.dev
            </div>
            <button onClick={() => setIsOpen(false)}>
              <GrClose className="hover:text-white hover:scale-125 duration-300 text-2xl"></GrClose>
            </button>
          </div>
          <div className="max-w-4xl m-auto flex  items-center h-[70vh] ">
            <div className="flex gap-64">
              <div className="space-y-12 w-[250px] ">
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl over font-semibold hover:tracking-[18px] text-black duration-500 block cursor-pointer"
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
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-semibold hover:tracking-[18px] text-black duration-500 block cursor-pointer"
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
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-semibold hover:tracking-[18px] text-black duration-500 block cursor-pointer"
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
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-semibold hover:tracking-[18px] text-black duration-500 block"
                >
                  Contact
                </Link>
              </div>
              <div className="space-y-6 w-[500px]">
                <h1
                  className="text-4xl font-semibold text-black pb-6"
                  data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="500"
                >
                  Let’s find solutions together?
                </h1>
                <p className="text-black text-xl">
                  Use my contacts beloyou need to put a project on the move,
                  let’s work on it!
                </p>
                <p className="hover:tracking-[3px] pb-5 text-xl text-black duration-500">
                  shamimrezaone@gmail.com
                </p>
                <button>
                  <Link
                    className="border-2 pt px-6 py-2 hover:bg-black hover:text-white hover:duration-500 border-gray-950 text-black font-semibold"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    data-aos="zoom-out-up"
                  >
                    Contact Me
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------- */}

      <div className="drawer max-w-7xl m-auto relative  ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Navbar */}
          <div className="w-full navbar  py-2 md:py-5">
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
            <div className="flex-1 flex justify-end md:justify-start px-2 mx-2 font-light md:text-xl hover:tracking-[8px] duration-500 text-white pl-8">
              Reza.dev
            </div>
            <div className="flex-none hidden lg:block">

              <ul className="menu menu-horizontal gap-4 pr-12 text-base font-bold text-white">
                <NavLink
                  to="/blog"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "mt-1"
                  }
                >
                  Blog
                </NavLink>
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "mt-1"
                  }
                >
                  Login
                </NavLink>
                <button onClick={() => setIsOpen(!isOpen)}>
                  <CgMenuRightAlt className="text-4xl hover:text-[#CCCD34] hover:scale-125 duration-300 font-bold"></CgMenuRightAlt>
                </button>
              </ul>
            </div>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side z-50 h-full">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay "
          ></label>
          <ul className="menu p-4 w-64 min-h-full bg-[#CCCD34]">
            <h3 className="flex justify-center text-lg">Reza.dev</h3>
            <hr className="mb-7 my-2" />
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="hover:bg-[#a7a739] text-2xl hover:rounded-md p-1 mb-2  duration-300 cursor-pointer"
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
              onClick={() => setIsOpen(false)}
              className="hover:bg-[#a7a739] text-2xl hover:rounded-md p-1 mb-2  duration-300 cursor-pointer"
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
              onClick={() => setIsOpen(false)}
              className="hover:bg-[#a7a739] text-2xl hover:rounded-md p-1 mb-2  duration-300 cursor-pointer"
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
              onClick={() => setIsOpen(false)}
              className="hover:bg-[#a7a739] text-2xl hover:rounded-md p-1 mb-2  duration-300 cursor-pointer"
            >
              Contact
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
