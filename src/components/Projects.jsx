import SimonGame from "../assets/Images/SimonGame.png";
import PassGen from "../assets/Images/PassGen.png";
import { FaGithub, FaLink } from "react-icons/fa";

function Projects() {
  const data = [
    {
      id: 1,
      name: "Malware Detector",
      image: "https://www.xcitium.com/images/malware-detection.png",
      github: "https://github.com/KunalBhat55/MalwareDetectionML",
      live: "https://malwaredetectionusingml.streamlit.app/",
      description:
        "Enjoy the classic Simon Game brought to life with HTML, CSS, JavaScript, and jQuery. Test your memory and pattern-recognition skills. Can you replicate the ever-growing sequence of colors and sounds? Give it a try!",
    },
    {
      id: 2,
      name: "ForecastX",
      image:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/weather-forecast%2C-forecast-design-template-1b116d584952c0173edd2550f3630243_screen.jpg?ts=1672114084",
      github: "https://github.com/KunalBhat55/LiveWeatherApp",
      live: "https://liveweather-webapp.onrender.com/",
      description:
        "ForecastX is a web application that offers real-time weather updates using data from the OpenWeather API. Built with Node.js, Expressjs, HTML, and CSS, and hosted on Render, it provides a user-friendly interface for tracking weather conditions.",
    },
    {
      id: 3,
      name: "PassGen with CI/CD",
      image: PassGen,
      github: "",
      live: "https://password-gen-app-black.vercel.app/",
      description:
        "PasswordGen is your go-to tool for creating strong and secure passwords build using GitHub Actions CICD. Customize the length and complexity of your passwords. This React-based application allowing you to generate secure passwords effortlessly.",
    },
    {
      id: 4,
      name: "Currency Exchange",
      image: "RealEst",
      github: "https://github.com/KunalBhat55/Currency-Exchange",
      live: "https://currency-exchange-seven-inky.vercel.app/",
      description:
        "Currency Exchange web application, built with React and seamlessly deployed on Vercel. It's your one-stop platform for swift and accurate currency conversions. This app provides real-time exchange rates, ensuring you stay up-to-date when making financial decisions.",
    },
    {
      id: 5,
      name: "Simon Game",
      image: SimonGame,
      github: "https://github.com/KunalBhat55/Simon-Game/",
      live: "https://kunalbhat55.github.io/Simon-Game/",
      description:
        "Enjoy the classic Simon Game brought to life with HTML, CSS, JavaScript, and jQuery. Test your memory and pattern-recognition skills. Can you replicate the ever-growing sequence of colors and sounds? Give it a try!",
    },
  ];
  const project = data;

  return (
    <div name="projects" className="w-full  text-gray-300 mt-36">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#53d6b8]">
            Projects
          </p>
          <p className="py-6 text-xl">Check out some of my work</p>
        </div>

        {/* container for projects */}
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-3 ">
          {/* Grid Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ border: "1px solid #53d6b8" }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div"
            >
              {/* Hover effect for images */}
              <div className="opacity-0 opacity-100 px-2 transition-all duration-450">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {item.name}
                </span>
                <p className="">{item.description}</p>

                <div className=" text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-4
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      <FaGithub />
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      <FaLink />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="explore border-2 text-[#53d6b8] border-[#53d6b8] font-medium text-lg px-4 py-2 my-12 mx-auto flex items-center transition-all rounded-md">
          <a href="https://github.com/KunalBhat55/" rel="noreferrer" target="_blank">Explore More!</a>
        </button>
      </div>
    </div>
  );
}

export default Projects;
