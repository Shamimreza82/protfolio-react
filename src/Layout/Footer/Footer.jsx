const Footer = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl m-auto md:flex justify-center py-16 gap-16 px-5">
        <div className="space-y-4">
          <h1 className="text-3xl text-white font-semibold">
            {" "}
            Let’s Build web application <br />
   
          </h1>
          <button className="text-white border hover:text-black duration-500 border-red-600 px-4 py-2 hover:bg-[#CCCD34] hover:border-none">Contact</button>
        </div>
        <div>
          <h1 className="text-3xl text-white font-semibold">
            {" "}
            You can find me on <span className="text-[#CCCD34]">
              Social
            </span>{" "}
            <br />
            <span className="text-[#CCCD34]">media</span>:
          </h1>
          <div className="my-14 space-y-5">
            <a href="https://www.linkedin.com/in/shamim--reza/" target="blank">
            <h2 className="text-white tracking-wider hover:tracking-[8px] mb-3 hover:text-[#CCCD34] duration-700">
              Linkedin
            </h2>
            </a>
           <a href="https://www.facebook.com/rezshamim67/" target="blank">
           <h2 className="text-white tracking-wider hover:tracking-[8px] mb-3 hover:text-[#CCCD34] duration-700">
              Facebook
            </h2>
           </a>
            <a href="https://twitter.com/ShamimR72892503" target="blank">
            <h2 className="text-white tracking-wider hover:tracking-[8px] mb-3 hover:text-[#CCCD34] duration-700">
              Twitter
            </h2>
            </a>
            <a href="https://github.com/Shamimreza82" target="blank">
            <h2 className="text-white tracking-wider hover:tracking-[8px] mb-3 hover:text-[#CCCD34] duration-700">
              Github
            </h2>
            </a>
            <h2 className="text-white tracking-wider hover:tracking-[8px] hover:text-[#CCCD34] duration-700">
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-24">
        <small className="text-white">Copyright © 2023 reza.dev. All rights reserved</small>
      </div>
    </div>
  );
};

export default Footer;
