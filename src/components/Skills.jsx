

function Skills() {
    const frontend = [
      "HTML", "CSS", "JavaScript",
      "React", "Redux","TailwindCSS"
    ];
    const backendSkills = [
      "Node.js", "Express.js",
      "REST API", "MongoDB", "MySQL",
    ]

    const cloudSkills = [
      "AWS",
      "Docker", "Kubernetes",
      "CI/CD","Networking" 
    ];

    const programmingSkills = ["Python", "C++", "Java"];

    const toolsSkills = ["Git GitHub", "Jenkins", "GitHub Actions" ];
  return (
    <div name="skills" className="w-full h-screen  text-gray-300">
      <div className="skillList max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <h2 className="text-4xl font-bold py-2 my-2 border-[#53d6b8] border-b-4 w-fit">
          Skills
        </h2>
        <div className="mt-4 ">
          <h1 className="text-2xl font-semibold">Frontend</h1>
          <div className="Tech flex flex-wrap py-2 my-4 w-[80%] ">
            {frontend.map((skill, index) => (
              <li
                key={index}
                className="list-none p-2 border m-1 bg-slate-950 rounded-lg"
              >
                {skill}
              </li>
            ))}
          </div>
          <h1 className="text-2xl font-semibold">Backend</h1>
          <div className="Tech flex flex-wrap py-2 my-4 w-[80%]">
            {" "}
            {backendSkills.map((skill, index) => (
              <li
                key={index}
                className="list-none p-2 border m-1 bg-slate-950 rounded-lg"
              >
                {skill}
              </li>
            ))}
          </div>
          <h1 className="text-2xl font-semibold">Cloud & DevOps</h1>
          <div className="flex flex-wrap py-2 my-4">
            {cloudSkills.map((skill, index) => (
              <li
                key={index}
                className="list-none p-2 border m-1 bg-slate-950 rounded-lg"
              >
                {skill}
              </li>
            ))}
          </div>
        </div>

        <h1 className="text-2xl font-semibold">Programming Languages</h1>
        <div className="flex py-2 my-4">
          {programmingSkills.map((skill, index) => (
            <li
              key={index}
              className="list-none p-2 border m-1 bg-slate-950 rounded-lg"
            >
              {skill}
            </li>
          ))}
        </div>

        <h1 className="text-2xl font-semibold">Tools</h1>
        <div className="flex py-2 my-4">
          {toolsSkills.map((skill, index) => (
            <li
              key={index}
              className="list-none p-2 border m-1 bg-slate-950 rounded-lg"
            >
              {skill}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills