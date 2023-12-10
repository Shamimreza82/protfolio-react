import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import project from "../../assets/images/Screenshot_3.jpg";
import Container from "../../Component/Sheared/Container";

const Projects1 = () => {
  return (
    <div className="px-3 max-w-7xl m-auto ">
      <Container>
        <div className="md:py-10 py-3">
          <div className="flex justify-center">
            <p className="text-center text-2xl border-b-2 h-full border-b-[#CCCD34] uppercase w-24 font-bold">
              Projects
            </p>
          </div>
          <p className="text-xl text-center mb-12 py-3">
            Each project is a unique piece of development{" "}
          </p>
        </div>
        <div className="md:flex items-center md:gap-14">
          <div className="md:w-[45%]">
            <a href="https://blood-donation-28936.web.app/" target="new">
              <img
                className="rounded-md shadow-md hover:scale-105 duration-300"
                src={project}
                alt=""
              />
            </a>
          </div>
          <div className="md:w-[50%]">
            <h1 className="text-2xl py-4 text-slate-700 font-semibold">
              Blood Donation app{" "}
              <span className="text-base text-gray-500">(November-2023)</span>
            </h1>
            <p>
              The Blood Donation Application is a platform designed to
              facilitate seamless blood donation activities, connecting donors
              with individuals in need of blood. This project is built using the
              MERN stack (MongoDB, Express.js, React, Node.js).
            </p>
            <p>
              The purpose is to create a user-friendly platform for blood
              donation activities, promoting efficient donation processes by
              connecting donors with recipients.
            </p>
            <div className="md:flex md:gap-6 gap-4 py-10 ">
              <div>
                <a
                  className="flex px-3 py-1 border hover:bg-[#CCCD34] hover:border-[#CCCD34] hover:text-black  border-red-600  justify-center items-center mb-3 gap-2 hover:scale-105 duration-300"
                  href="https://blood-donation-28936.web.app/"
                  target="new"
                >
                  <p>Live Demo </p>
                  <FiExternalLink className="inline-flex "></FiExternalLink>
                </a>
              </div>
              <div>
                <a
                  className="flex px-3 py-1 border hover:bg-[#CCCD34] hover:border-[#CCCD34] hover:text-black  border-red-600  justify-center items-center gap-2 mb-3 hover:scale-105 duration-300"
                  href="https://github.com/Shamimreza82/Blood-donation-app-client"
                  target="new"
                >
                  <p className="hover:text-black  ">Client Code</p>
                  <FaGithub className="inline-flex "></FaGithub>
                </a>
              </div>
              <div>
                <a
                  className="flex px-3 py-1 border hover:bg-[#CCCD34] hover:border-[#CCCD34] hover:text-black  border-red-600  justify-center items-center gap-2 hover:scale-105 duration-300"
                  href="https://github.com/Shamimreza82/Blood-donation-app-server"
                  target="new"
                >
                  <p className="hover:text-black  ">Server Code</p>
                  <FaGithub className="inline-flex "></FaGithub>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects1;
