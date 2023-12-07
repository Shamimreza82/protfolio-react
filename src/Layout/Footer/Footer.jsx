const Footer = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl m-auto flex justify-center py-16 gap-16 ">
        <div className="space-y-4">
          <h1 className="text-3xl text-white font-semibold">
            {" "}
            Let’s Build web application <br />
            together?
          </h1>
          <button className="btn">Contact</button>
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
          <div className="my-14 space-y-2">
            <h2 className="text-white tracking-wider hover:tracking-[8px] hover:text-[#CCCD34] duration-700">
              Linkedin
            </h2>
            <h2 className="text-white tracking-wider hover:tracking-[8px] hover:text-[#CCCD34] duration-700">
              Facebook
            </h2>
            <h2 className="text-white tracking-wider hover:tracking-[8px] hover:text-[#CCCD34] duration-700">
              Twitter
            </h2>
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
