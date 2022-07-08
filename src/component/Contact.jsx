import {MdOutlineEmail} from "react-icons/md";
import {BsWhatsapp} from "react-icons/bs";
import {BsTelegram} from "react-icons/bs";
import {BsFillTelephoneFill} from "react-icons/bs";
import emailjs from "emailjs-com";
import {useRef} from "react";

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
      className="flex flex-col justify-center min-h-screen gap-5 text-center sm:pb-4"
    >
      <h5 className="text-green-4">Get In Touch</h5>
      <h2 className="text-3xl text-green-6">Contact Me</h2>
      <div className="flex justify-center gap-20 sm:flex-col md:gap-10 sm:gap-5">
        <div className="flex justify-end flex-1 sm:justify-center">
          <div className="flex flex-col gap-5 ">
            <a
              href="mailto:ashiri.ali.72@gmail.com"
              className="flex flex-col items-center gap-2 p-3 bg-green-1 rounded-xl hover:bg-green-3"
            >
              <MdOutlineEmail className="text-xl text-green-6" />
              <h4 className="text-lg text-green-6">Email</h4>
              <h5 className="text-green-4">ashiri.ali.72@gmail.com</h5>
            </a>
            <a
              href="tel:+989373846277"
              className="flex flex-col items-center gap-2 p-3 bg-green-1 rounded-xl hover:bg-green-3"
            >
              <BsFillTelephoneFill className="text-xl text-green-6" />
              <h4 className="text-lg text-green-6">tel</h4>
              <h5 className="text-green-4">09373846277</h5>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=+989373846277"
              className="flex flex-col items-center gap-2 p-3 bg-green-1 rounded-xl hover:bg-green-3"
            >
              <BsWhatsapp className="text-xl text-green-6" />
              <h4 className="text-lg text-green-6">WhatsApp</h4>
            </a>
            <a
              href="https://telegram.me/ali_as72"
              className="flex flex-col items-center gap-2 p-3 bg-green-1 rounded-xl hover:bg-green-3"
            >
              <BsTelegram className="text-xl text-green-6" />
              <h4 className="text-lg text-green-6">Telegram</h4>
            </a>
          </div>
        </div>
        <form
          onSubmit={sendEmailHandler}
          ref={formRef}
          className="flex flex-col items-start flex-1 gap-5 sm:items-center"
        >
          <input
            name="name"
            className="w-4/5 p-2 border rounded outline-none border-green-6 bg-green-2 text-green-6 placeholder:text-green-6 placeholder:text-xs"
            type="text"
            placeholder="Your Full Name"
            required
          />
          <input
            name="email"
            className="w-4/5 p-2 border rounded outline-none border-green-6 bg-green-2 text-green-6 placeholder:text-green-6 placeholder:text-xs"
            type="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            className="w-4/5 p-2 border rounded outline-none border-green-6 bg-green-2 text-green-6 placeholder:text-green-6 placeholder:text-xs"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            className="p-2 text-xs text-black border rounded border-green-1 bg-green-5 hover:bg-green-4"
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
