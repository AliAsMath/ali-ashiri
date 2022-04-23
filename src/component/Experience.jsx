import { BsPatchCheckFill } from "react-icons/bs";

function Experience() {
  return (
    <section
      id="experience"
      className="h-screen flex flex-col items-center justify-center gap-5"
    >
      <h5 className="text-green-4">What Skills I Have</h5>
      <h2 className="text-green-6 text-3xl">My Experience</h2>
      <div className="flex md:flex-col justify-center gap-5">
        <article className="rounded-xl text-center bg-green-1 border border-green-1 p-7 sm:p-4">
          <h3 className="text-green-6 mb-10 text-2xl sm:text-xl">
            Front-end Development
          </h3>
          <div className="flex gap-24 sm:gap-12 justify-between">
            <div className="flex flex-col gap-10 sm:gap-7">
              <div className="flex items-start gap-4 sm:gap-3">
                <BsPatchCheckFill className="mt-[6px] text-red sm:text-sm" />
                <div className="text-left">
                  <h4 className="text-green-5 text-lg sm:text-base">HTML</h4>
                  <p className="text-green-4 sm:text-sm">Advanceed</p>
                </div>
              </div>
              <div className="flex items-start gap-4 sm:gap-3">
                <BsPatchCheckFill className="mt-[6px] text-red sm:text-sm" />
                <div className="text-left">
                  <h4 className="text-green-5 text-lg sm:text-base">CSS</h4>
                  <p className="text-green-4 sm:text-sm">Advanceed</p>
                </div>
              </div>
              <div className="flex items-start gap-4 sm:gap-3">
                <BsPatchCheckFill className="mt-[6px] text-red sm:text-sm" />
                <div className="text-left">
                  <h4 className="text-green-5 text-lg sm:text-base">
                    Tailwind
                  </h4>
                  <p className="text-green-4 sm:text-sm">Intermediate</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 sm:gap-7">
              <div className="flex items-start gap-4 sm:gap-3">
                <BsPatchCheckFill className="mt-[6px] text-red sm:text-sm" />
                <div className="text-left">
                  <h4 className="text-green-5 text-lg sm:text-base">
                    JavaScript
                  </h4>
                  <p className="text-green-4 sm:text-sm">Intermediate</p>
                </div>
              </div>
              <div className="flex items-start gap-4 sm:gap-3">
                <BsPatchCheckFill className="mt-[6px] text-red sm:text-sm" />
                <div className="text-left">
                  <h4 className="text-green-5 text-lg sm:text-base">
                    React.js
                  </h4>
                  <p className="text-green-4 sm:text-sm">Intermediate</p>
                </div>
              </div>
              <div className="flex items-start gap-4 sm:gap-3">
                <BsPatchCheckFill className="mt-[6px] text-red sm:text-sm" />
                <div className="text-left">
                  <h4 className="text-green-5 text-lg sm:text-base">Next.js</h4>
                  <p className="text-green-4 sm:text-sm">Intermediate</p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="rounded-xl text-center bg-green-1 border border-green-1 p-7 sm:p-4">
          <h3 className="text-green-6 mb-10 text-2xl sm:text-xl">
            Back-end Development
          </h3>
          <div className="flex gap-24 sm:gap-12 justify-between">
            <div className="flex flex-col gap-10 sm:gap-7">
              <div className="flex items-start gap-4 sm:gap-3">
                <BsPatchCheckFill className="mt-[6px] text-red sm:text-sm" />
                <div className="text-left">
                  <h4 className="text-green-5 text-lg sm:text-base">Node.js</h4>
                  <p className="text-green-4 sm:text-sm">Intermediate</p>
                </div>
              </div>
              <div className="flex items-start gap-4 sm:gap-3">
                <BsPatchCheckFill className="mt-[6px] text-red sm:text-sm" />
                <div className="text-left">
                  <h4 className="text-green-5 text-lg sm:text-base">
                    Express.js
                  </h4>
                  <p className="text-green-4 sm:text-sm">Intermediate</p>
                </div>
              </div>
              <div className="flex items-start gap-4 sm:gap-3">
                <BsPatchCheckFill className="mt-[6px] text-red sm:text-sm" />
                <div className="text-left">
                  <h4 className="text-green-5 text-lg sm:text-base">
                    Socket.io
                  </h4>
                  <p className="text-green-4 sm:text-sm">Beginner</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 sm:gap-7">
              <div className="flex items-start gap-4 sm:gap-3">
                <BsPatchCheckFill className="mt-[6px] text-red sm:text-sm" />
                <div className="text-left">
                  <h4 className="text-green-5 text-lg sm:text-base">MongoDB</h4>
                  <p className="text-green-4 sm:text-sm">Intermediate</p>
                </div>
              </div>
              <div className="flex items-start gap-4 sm:gap-3">
                <BsPatchCheckFill className="mt-[6px] text-red sm:text-sm" />
                <div className="text-left">
                  <h4 className="text-green-5 text-lg sm:text-base">MySQL</h4>
                  <p className="text-green-4 sm:text-sm">Intermediate</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Experience;
