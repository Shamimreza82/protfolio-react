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
            <h2 className="text-2xl my-2">A dedicated Front-end Developer <br /> based in Dhaka, Bangladesh </h2>
            <p>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
          </div>
        </div>
    </div>
    
  );
};

export default About;
