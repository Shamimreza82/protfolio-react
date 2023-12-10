import img from '../../assets/images/about.jpg'


const About = () => {
  return (
    <div id='about' className=' bg-[#CCCD34]'>
    <div className="md:flex md:py-24 max-w-7xl m-auto">
          <div className="md:w-1/2 flex justify-center">
            <img className='rounded-md w-3/4'  src={img} alt="" />
          </div>
          <div className="w-1/2 flex flex-col justify-center ml-7">
            <h1 className=" text-2xl font-bold text-justify">ABOUT ME</h1>
            <h2 className="text-2xl my-2">A dedicated Full Stack Developer(MERN) </h2>
            <p>I'm Shamim Reza, a dedicated MERN Stack developer, seasoned in Full-Stack Development with over 4 successful projects under my belt. Ready to dive into new opportunities, I'm eager to showcase my skills and innovation on Github. Let's connect and explore how my creativity can drive your company's growth through dedicated responsibilities.</p>
          </div>
        </div>
    </div>
    
  );
};

export default About;
