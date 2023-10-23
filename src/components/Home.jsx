import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import HashnodeWhite from "../assets/Images/HashnodeWhite.png";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#53d6b8] ml-1">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Kunal Bhat
        </h1>
        {/* <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2> */}
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a tech enthusiast with a passion for mastering the worlds of
          Cloud Engineering, building things for the Web, and DevOps. With a
          focus on creating seamless and innovative digital experiences. <br />
          <span className="text-lg">
            “Crafting Code, Shaping Clouds, Transforming Ideas.”
          </span>
        </p>
        <div className="mobileViewSocial flex items-center w-full ">
          <a
            className="text-gray-300 pr-1 transition-all hover:-translate-y-1 hover:text-blue-500"
            href="https://www.linkedin.com/in/kunal-bhat55/"
          >
            <FaLinkedin size={35} />
          </a>
          <a
            className="text-gray-300 px-2 transition-all hover:-translate-y-1 hover:text-[#171515]"
            href="https://github.com/KunalBhat55/"
          >
            <FaGithub size={35} />
          </a>
          <a
            className="px-2 transition-all hover:-translate-y-1 hover:text-[#171515]"
            href="https://kunalbhat.hashnode.dev/"
          >
            <img
              className="w-8 text-gray-700 "
              src={HashnodeWhite}
              alt="Hashnode logo"
            />
          </a>
          <a
            className="text-gray-300 px-2 transition-all hover:-translate-y-1 hover:text-[#00acee]"
            href="https://twitter.com/Mr_Kunal_Bhat"
          >
            <FaTwitter size={35} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home