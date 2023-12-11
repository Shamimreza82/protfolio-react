import img from "../../assets/images/about.jpg";

const About = () => {
  return (
    <div id="about" className=" bg-[#CCCD34]">
      <div className="md:flex md:py-28 py-12 max-w-7xl m-auto">
        <div className="md:w-1/2 flex justify-center" data-aos="zoom-in">
          <img className="rounded-md w-3/4" src={img} alt="" />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center ml-7">
          <h1
            className="text-2xl font-bold md:text-justify text-center md:py-6 "
            data-aos="zoom-in"
          >
            ABOUT ME
          </h1>
          <h2 className="text-2xl my-2" data-aos="flip-up">
            A dedicated Full Stack Developer(MERN)
          </h2>
          <p>
            I'm Shamim Reza, a dedicated MERN Stack developer, seasoned in
            Full-Stack Development with over 4 successful projects under my
            belt. Ready to dive into new opportunities, I'm eager to showcase my
            skills and innovation on Github. Let's connect and explore how my
            creativity can drive your company's growth through dedicated
            responsibilities.
          </p>
          <h2 className="py-3 font-bold">Education</h2>
          Bachelor of Arts (BA) <br /> Moheshpur Govt. degree college <br /> (March 2016 -
          April-2020)
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default About;
