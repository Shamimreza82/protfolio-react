import Container from "../../Component/Sheared/Container";
import project from '../../assets/images/Screenshot_3.jpg'
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";


const Projects = () => {
    return (
        <div className="md:py-20">
            <Container>
                <div className="flex justify-center">
                    <p className="text-center text-2xl border-b-2 w-24 ">Projects</p>
                </div>
                <p className="text-2xl py-8">Each project is a unique piece of development </p>
                <div className="flex items-center gap-10">
                    <div>
                        <img className="rounded-md shadow-md hover:scale-105 duration-300" src={project} alt="" />
                    </div>
                    <div>
                        <h1 className="text-2xl py-4 text-slate-700 font-semibold">Blood Donation app <span className="text-base text-gray-500">(November-2023)</span></h1>
                        <p>The Blood Donation Application is a platform designed to facilitate seamless blood donation activities, connecting donors with individuals in need of blood. This project is built using the MERN stack (MongoDB, Express.js, React, Node.js).</p>
                        <p>The purpose is to create a user-friendly platform for blood donation activities, promoting efficient donation processes by connecting donors with recipients.</p>
                        <div className="flex gap-20 py-7">
                            <div>
                                <a href="https://blood-donation-28936.web.app/" target="new">
                                <p>Live Demo <FiExternalLink className="inline-flex"></FiExternalLink> </p>
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <p>Code Link <FaGithub className="inline-flex"></FaGithub></p>
                                </a>    
                            </div>
                        </div>
                    </div>
                    
                </div>
            </Container>
        </div>
    );
};

export default Projects;