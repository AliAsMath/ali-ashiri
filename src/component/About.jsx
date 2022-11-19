import { BiBrain, BiInfinite } from "react-icons/bi";
import { FcElectronics } from "react-icons/fc";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center gap-5 justify-center"
    >
      <h5 className="text-green-4">Get To Know</h5>
      <h2 className="text-green-5 text-3xl mb-7">About Me</h2>
      <div className="flex justify-center md:flex-col md:gap-10">
        <div className="flex-1 md:flex-[0]">
          <div className=" bg-green-4 rounded-3xl w-fit mx-auto">
            <img
              className="h-80 sm:h-40 object-cover rotate-12 hover:rotate-0 transition-transform duration-300 bg-green-1 rounded-3xl"
              src="/assets/image/aboutMe.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex-1 pr-7 md:pl-7 flex flex-col justify-between text-sm sm:text-xs text-green-6 gap-7">
          <div className="flex sm:flex-col sm:items-center sm:gap-5 justify-between ">
            <article className="bg-green-1 rounded p-5 sm:p-1 sm:w-1/2 leading-7 sm:leading-none text-center hover:bg-green-3">
              <h3 className="text-green-5 text-base sm:text-sm">Education</h3>
              <div className="flex items-center justify-center gap-7">
                <h4>PGD in:</h4>
                <BiInfinite className="text-red text-xl sm:text-base" />
              </div>
              <h4>Mathematics & Physics</h4>
            </article>
            <article className="bg-green-1 rounded p-5 sm:p-1 sm:w-1/2 leading-7 sm:leading-none text-center hover:bg-green-3">
              <h3 className="text-green-5 text-base sm:text-sm">Education</h3>
              <div className="flex items-center justify-center gap-7">
                <h4>BSc in:</h4>
                <FcElectronics className="text-red text-xl sm:text-base" />
              </div>
              <h4>Electronic Engineering</h4>
            </article>
            <article className="bg-green-1 rounded p-5 sm:p-1 sm:w-1/2 leading-7 sm:leading-none text-center hover:bg-green-3">
              <h3 className="text-green-5 text-base sm:text-sm">Education</h3>
              <div className="flex items-center justify-center gap-7">
                <h4>MSc in:</h4>
                <BiBrain className="text-red text-xl sm:text-base" />
              </div>
              <h4>Artificial Intelligence</h4>
            </article>
          </div>
          <p className=" text-justify">
            My intense interest in mathematics and physics led me to mathematics
            & physics and then to engineering. At university, I became
            interested in computers and programming, and for my senior year I
            was looking for a field that covered both math and programming, and
            I became acquainted with artificial intelligence.
          </p>
          <a
            href="#contact"
            className="p-2 w-fit rounded border text-black border-green-1 bg-green-5 hover:bg-green-4 md:self-center"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
