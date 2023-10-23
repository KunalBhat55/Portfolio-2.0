

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen flex flex-col justify-center items-center p-4 mt-20"
    >
      <div className="pb-8 flex flex-col justify-center items-center">
        <p className="text-4xl font-bold inline border-b-4 border-[#53d6b8] text-gray-300">
          Contact
        </p>
        <p className="text-gray-300 py-4 w-8/12 text-center text-xl">
          Let's Connect! Feel free to reach out to me via email. I'm always
          excited to chat about projects, opportunities, and ideas. Looking
          forward to hearing from you.
        </p>
      </div>
      <a
        href="mailto:kunalbhat6767@gmail.com"
        className=" getintouch border-2 text-[#53d6b8] border-[#53d6b8] font-medium text-lg px-4 py-3 my-8 mx-auto flex items-center transition-all rounded-md"
      >
        Get In Touch!
      </a>
    </div>
  );
}

export default Contact