import ExperienceWrapper from "./ExperienceWrapper";

const front = [
  { name: "React.Js", level: "Advanced" },
  { name: "React Native", level: "Intermediate" },
  { name: "Next.Js", level: "Advanced" },
  { name: "Tailwind", level: "Advanced" },
  { name: "Styled Component", level: "Intermediate" },
  { name: "Material UI", level: "Intermediate" },
];
const back = [
  { name: "Node.js", level: "Intermediate" },
  { name: "Express.js", level: "Intermediate" },
  { name: "Nest.js", level: "Intermediate" },
];

const db = [
  { name: "MongoDB", level: "Intermediate" },
  { name: "MySQL", level: "Intermediate" },
  { name: "TypeORM", level: "Beginner" },
  { name: "Redis", level: "Beginner" },
];

const lang = [
  { name: "HTML", level: "Advanced" },
  { name: "CSS", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "Python", level: "intermediate" },
];

const architecture = [
  { name: "Rest API", level: "Intermediate" },
  { name: "graphQL", level: "Intermediate" },
  { name: "webRTC", level: "Intermediate" },
  { name: "webSocket", level: "intermediate" },
  { name: "Microservice", level: "Beginner" },
  { name: "CQRS", level: "Beginner" },
];

const tools = [
  { name: "Git and Github", level: "Intermediate" },
  { name: "Webpack", level: "Intermediate" },
  { name: "Postman", level: "Intermediate" },
  { name: "Test", level: "Intermediate" },
  { name: "Docker", level: "Beginner" },
  { name: "RabitMQ", level: "Beginner" },
  { name: "Agile & Scrum & Jira", level: "Beginner" },
];
const frameWorkAndLibrary = [
  { name: "Socket.io", level: "Intermediate" },
  { name: "Redux", level: "Intermediate" },
  { name: "Electron", level: "Beginner" },
];

function Experience() {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center min-h-screen gap-5"
    >
      <h5 className="text-green-4">What Skills I Have</h5>
      <h2 className="text-3xl text-green-6">My Experience</h2>
      <div className="flex flex-wrap justify-center gap-5 px-5 sm:p-5 md:gap-10 md:flex-col">
        <ExperienceWrapper expreience={"Programming Language"} list={lang} />
        <ExperienceWrapper expreience={"Front-end Development"} list={front} />
        <ExperienceWrapper expreience={"Back-end Development"} list={back} />
        <ExperienceWrapper expreience={"Database"} list={db} />
        <ExperienceWrapper expreience={"Architecture"} list={architecture} />
        <ExperienceWrapper expreience={"Tools"} list={tools} />
        <ExperienceWrapper
          expreience={"Other framework and library"}
          list={frameWorkAndLibrary}
        />
      </div>
    </section>
  );
}

export default Experience;
