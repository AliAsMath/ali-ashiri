import ExperienceWrapper from "./ExperienceWrapper";

const front = [
  { name: "HTML", level: "Advanced" },
  { name: "CSS", level: "Advanced" },
  { name: "Tailwind", level: "Intermediate" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "React.Js", level: "Intermediate" },
  { name: "Next.Js", level: "Intermediate" },
];
const back = [
  { name: "Node.js", level: "Intermediate" },
  { name: "Express.js", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "MySQL", level: "Intermediate" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "Socket.io", level: "Beginner" },
];

function Experience() {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center h-screen gap-5"
    >
      <h5 className="text-green-4">What Skills I Have</h5>
      <h2 className="text-3xl text-green-6">My Experience</h2>
      <div className="flex justify-center gap-5 px-20 sm:p-5 md:flex-col">
        <ExperienceWrapper expreience={"Front-end Development"} list={front} />
        <ExperienceWrapper expreience={"Back-end Development"} list={back} />
      </div>
    </section>
  );
}

export default Experience;
