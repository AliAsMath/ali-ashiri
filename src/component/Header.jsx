import React from "react";
import {BsGithub, BsLinkedin} from "react-icons/bs";

function Header() {
  return (
    <header
      id="header"
      className="flex flex-col justify-center min-h-screen gap-1 overflow-hidden leading-7 text-center sm:gap-5 "
    >
      <h5 className="text-green-4">Hello I'm</h5>
      <h1 className="text-4xl text-green-5">Ali Ashiri</h1>
      <h5 className="text-green-4">Fullstack Developer</h5>
      <div className="flex justify-center gap-5">
        <a
          href="/assets/pdf/cvresume.pdf"
          className="p-2 border rounded w-36 border-green-1 hover:bg-green-4"
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="p-2 text-black border rounded w-36 border-green-1 bg-green-5 hover:bg-green-4"
        >
          Let's Talk
        </a>
      </div>
      <div className="flex justify-around sm:justify-center sm:gap-5">
        <a href="https://github.com/AliAsMath" target="_blank" rel="noreferrer">
          <BsGithub className="text-green-5 text-7xl sm:text-xl hover:text-green-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/ali-ashiri-3456171ab/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="text-green-5 text-7xl sm:text-xl hover:text-green-4" />
        </a>
      </div>
      <img
        src={"/assets/image/developing.png"}
        className="h-[20rem] w-1/3 sm:w-2/3 self-center px-10 bg-gradient-to-t from-green-2 to-green-1 rounded-t-full pt-20 object-cover"
        alt=""
      />
    </header>
  );
}

export default Header;
