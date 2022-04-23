import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";

function Footer() {
  return (
    <footer className="flex flex-col items-center gap-5 p-10 pb-28 text-green-1 bg-green-5">
      <h1 className="text-4xl">Ali Ashiri</h1>
      <ul className="flex justify-center flex-wrap content-center gap-5">
        <li>
          <a className="hover:text-green-4" href="#header">
            Home
          </a>
        </li>
        <li>
          <a className="hover:text-green-4" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="hover:text-green-4" href="#experience">
            Experience
          </a>
        </li>
        <li>
          <a className="hover:text-green-4" href="#portfoli">
            Portfoli
          </a>
        </li>
        <li>
          <a className="hover:text-green-4" href="#certificates">
            Certificates
          </a>
        </li>
        <li>
          <a className="hover:text-green-4" href="#contact">
            Contact
          </a>
        </li>
      </ul>
      <ul className="flex justify-center gap-5 text-green-5">
        <li>
          <a
            href="https://github.com/AliAsMath"
            className="p-3 block bg-green-1 rounded hover:bg-green-4"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ali-ashiri-3456171ab/"
            className="p-3 block bg-green-1 rounded hover:bg-green-4"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://api.whatsapp.com/send?phone=+989373846277"
            className="p-3 block bg-green-1 rounded hover:bg-green-4"
            target="_blank"
            rel="noreferrer"
          >
            <BsWhatsapp />
          </a>
        </li>
        <li>
          <a
            href="https://telegram.me/ali_as72"
            className="p-3 block bg-green-1 rounded hover:bg-green-4"
            target="_blank"
            rel="noreferrer"
          >
            <BsTelegram />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
