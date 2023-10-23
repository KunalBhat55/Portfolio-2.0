import {
  FaGithub,
  FaLinkedin,
  FaTwitter,

} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Logo from "../assets/Images/Mylogo2.png";
import Hashnode from "../assets/Images/HashnodeLogo.png";
import { Link } from "react-scroll";
import { useState } from "react";

function Navbar() {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img
          className="h-16 w-16 mt-2 bg-transparent"
          src={Logo}
          alt="Logo Image"
        />
      </div>

      {/* menu */}
      <ul className="hidden md:flex text-lg">
        <li className="Nav-li transition-all">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="Nav-li transition-all">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="Nav-li transition-all">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="Nav-li transition-all">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="Nav-li transition-all">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 cursor-pointer transition-all"
      >
        {!nav ? (
          <button className="hamburger" id="hamburgerBtn">
            <span className="bar bar1"></span>
            <span className="bar bar2"></span>
            <span className="bar bar3"></span>
          </button>
        ) : (
          <button className="hamburger" id="hamburgerBtn">
            <span className="bar transform -rotate-45 translate-x-17 translate-y-3"></span>
            <span className="bar invisible"></span>
            <span className="bar transform rotate-45 -translate-x-17 -translate-y-2"></span>
          </button>
        )}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden transform transition-all"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center menu transform transition-all"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-lg">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/kunal-bhat55/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-lg">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/KunalBhat55/"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#c71610] rounded-lg">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:kunalbhat6767@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#00acee] rounded-lg">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://twitter.com/Mr_Kunal_Bhat"
            >
              Twitter <FaTwitter size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#181F49] rounded-lg">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://kunalbhat.hashnode.dev/"
            >
              Hashnode
              <img className="w-8" src={Hashnode} alt="Hashnode logo" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
