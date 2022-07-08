import ExperienceWrapper from "./ExperienceWrapper";

const front = [
  {name: "HTML", level: "Advanced"},
  {name: "CSS", level: "Advanced"},
  {name: "Tailwind", level: "Advanced"},
  {name: "React.Js", level: "Advanced"},
  {name: "React Native", level: "Intermediate"},
  {name: "Next.Js", level: "Advanced"},
];
const back = [
  {name: "Node.js", level: "Intermediate"},
  {name: "Express.js", level: "Intermediate"},
  {name: "MongoDB", level: "Intermediate"},
  {name: "MySQL", level: "Intermediate"},
  {name: "Socket.io", level: "Beginner"},
];

const lang = [
  {name: "JavaScript", level: "Advanced"},
  {name: "TypeScript", level: "Intermediate"},
  {name: "Python", level: "intermediate"},
];

function Experience() {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center min-h-screen gap-5"
    >
      <h5 className="text-green-4">What Skills I Have</h5>
      <h2 className="text-3xl text-green-6">My Experience</h2>
      <div className="flex justify-center gap-5 px-5 sm:p-5 md:gap-10 md:flex-col">
        <ExperienceWrapper expreience={"Front-end Development"} list={front} />
        <ExperienceWrapper expreience={"Back-end Development"} list={back} />
        <ExperienceWrapper expreience={"Programming Language"} list={lang} />
      </div>
    </section>
  );
}

export default Experience;
