
import Container from '../../Component/Sheared/Container';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import project3 from '../../assets/images/Screenshot_2.jpg'

const Projects3 = () => {
    return (
        <div className='px-3 mt-24'>
             <Container>
                <div className="md:flex items-center gap-10">
                    <div className='md:w-[45%]'>
                       <a href="https://brand-shop-af581.web.app/" target="new">
                       <img className="rounded-md shadow-md hover:scale-105 duration-300" src={project3} alt="" />
                       </a>
                    </div>
                    <div className='md:w-[50%]'>
                        <h1 className="text-2xl py-4 text-slate-700 font-semibold">Brand Shop app<span className="text-base text-gray-500">(October-2023)</span></h1>
                        This project is a Hotel Booking Web Application that aims to provide users with a seamless experience in booking hotel accommodations. It offers various features and functionalities that enhance user interaction and ensure a smooth booking process.
                       
                        <div className="md:flex  md:gap-6 py-7 space-y-2 md:space-y-0">
                            <div>
                                <a className="flex px-3 py-1 border hover:bg-[#CCCD34] hover:border-[#CCCD34] hover:text-black  border-red-600  justify-center items-center gap-2 mb-3 hover:scale-105 duration-300"  href="https://brand-shop-af581.web.app/" target="new">
                                <p>Live Demo </p>
                                <FiExternalLink className="inline-flex"></FiExternalLink> 
                                </a>
                            </div>
                            <div>
                                <a className="flex px-3 py-1 border hover:bg-[#CCCD34] hover:border-[#CCCD34] hover:text-black  border-red-600  justify-center items-center gap-2 mb-3 hover:scale-105 duration-300" href='https://github.com/Shamimreza82/brand-shop-client-A10' target='new' >
                                    <p className="hover:text-green-700 ">Client Code</p>
                                    <FaGithub className="inline-flex "></FaGithub> 
                                </a>    
                            </div>
                            <div>
                                <a className="flex px-3 py-1 border hover:bg-[#CCCD34] hover:border-[#CCCD34] hover:text-black  border-red-600  justify-center items-center gap-2 mb-3 hover:scale-105 duration-300" href='https://github.com/Shamimreza82/brand-shop-server-A10' target='new'>
                                    <p className="hover:text-green-700 ">Server Code</p>
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

export default Projects3;