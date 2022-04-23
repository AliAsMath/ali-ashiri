import { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServerLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { GiRibbonMedal } from "react-icons/gi";

function Nav() {
  const { hash } = window.location;
  const [isActive, setIsActive] = useState(hash.slice(1));
  const [isShow, setIsShow] = useState(false);
  let timer;

  const enterHandler = () => {
    clearTimeout(timer);

    setIsShow(true);
  };

  const leaveHandler = () => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      setIsShow(false);
      console.log("clear");
    }, 3000);
  };

  return (
    <div
      onMouseEnter={enterHandler}
      onMouseLeave={leaveHandler}
      onTouchStart={enterHandler}
      onTouchEnd={leaveHandler}
      className={`flex gap-3 text-green-5 rounded-r-full rounded-l-full bg-black bg-opacity-30 text-2xl py-2 px-5 fixed z-10 left-1/2 -translate-x-1/2 bottom-8 backdrop-blur-lg transition-opacity duration-500 ${
        isShow ? "" : "opacity-10"
      }`}
    >
      <a
        href="#header"
        onClick={() => setIsActive("header")}
        className={`p-3 rounded-full ${
          isActive === "header" ? "bg-green-5 bg-opacity-40" : ""
        }`}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setIsActive("about")}
        className={`p-3 rounded-full ${
          isActive === "about" ? "bg-green-5 bg-opacity-40" : ""
        }`}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setIsActive("experience")}
        className={`p-3 rounded-full ${
          isActive === "experience" ? "bg-green-5 bg-opacity-40" : ""
        }`}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setIsActive("portfolio")}
        className={`p-3 rounded-full ${
          isActive === "portfolio" ? "bg-green-5 bg-opacity-40" : ""
        }`}
      >
        <RiServerLine />
      </a>
      <a
        href="#certificates"
        onClick={() => setIsActive("certificates")}
        className={`p-3 rounded-full ${
          isActive === "certificates" ? "bg-green-5 bg-opacity-40" : ""
        }`}
      >
        <GiRibbonMedal />
      </a>
      <a
        href="#contact"
        onClick={() => setIsActive("contact")}
        className={`p-3 rounded-full ${
          isActive === "contact" ? "bg-green-5 bg-opacity-40" : ""
        }`}
      >
        <BiMessageSquareDetail />
      </a>
    </div>
  );
}

export default Nav;
