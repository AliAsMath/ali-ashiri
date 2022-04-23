import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import emailjs from "emailjs-com";
import { useRef } from "react";

function Contact() {
  const formRef = useRef();

  const sendEmailHandler = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_3lhy3tg",
      "template_0hcb65m",
      formRef.current,
      "OxmVv9aXCWEkxcN44"
    );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="flex flex-col justify-center gap-5 sm:pb-4 text-center min-h-screen"
    >
      <h5 className="text-green-4">Get In Touch</h5>
      <h2 className="text-green-6 text-3xl">Contact Me</h2>
      <div className="flex sm:flex-col justify-center gap-20 md:gap-10 sm:gap-5">
        <div className="flex-1 flex flex-col gap-5 items-end sm:items-center">
          <a
            href="mailto:ashiri.ali.72@gmail.com"
            className="flex flex-col items-center gap-2 w-fit p-3 bg-green-1 rounded-xl hover:bg-green-3"
            target="_blank"
            rel="noreferrer"
          >
            <MdOutlineEmail className="text-xl text-green-6" />
            <h4 className="text-lg text-green-6">Email</h4>
            <h5 className="text-green-4">ashiri.ali.72@gmail.com</h5>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=+989373846277"
            className="flex flex-col items-center gap-2 w-fit p-3 bg-green-1 rounded-xl hover:bg-green-3"
            target="_blank"
            rel="noreferrer"
          >
            <BsWhatsapp className="text-xl text-green-6" />
            <h4 className="text-lg text-green-6">WhatsApp</h4>
            <h5 className="text-green-4">ashiri.ali.72@gmail.com</h5>
          </a>
          <a
            href="https://telegram.me/ali_as72"
            className="flex flex-col items-center gap-2 w-fit p-3 bg-green-1 rounded-xl hover:bg-green-3"
            target="_blank"
            rel="noreferrer"
          >
            <BsTelegram className="text-xl text-green-6" />
            <h4 className="text-lg text-green-6">Telegram</h4>
            <h5 className="text-green-4">ashiri.ali.72@gmail.com</h5>
          </a>
        </div>
        <form
          onSubmit={sendEmailHandler}
          ref={formRef}
          className="flex-1 flex flex-col items-start gap-5 sm:items-center"
        >
          <input
            name="name"
            className="w-4/5 p-2 border border-green-6 bg-green-2 text-green-6 rounded placeholder:text-green-6 placeholder:text-xs outline-none"
            type="text"
            placeholder="Your Full Name"
            required
          />
          <input
            name="email"
            className="w-4/5 p-2 border border-green-6 bg-green-2 text-green-6 rounded placeholder:text-green-6 placeholder:text-xs outline-none"
            type="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            className="w-4/5 p-2 border border-green-6 bg-green-2 text-green-6 rounded placeholder:text-green-6 placeholder:text-xs outline-none"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            className="p-2 rounded border text-xs text-black border-green-1 bg-green-5 hover:bg-green-4"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
