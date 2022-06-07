import ExperienceItem from "./ExperienceItem";

function ExperienceWrapper({ expreience, list }) {
  return (
    <article className="text-center border rounded-xl bg-green-1 border-green-1 p-7 sm:p-4">
      <h3 className="mb-10 text-2xl text-green-6 sm:text-xl">{expreience}</h3>
      <div className="flex flex-wrap justify-between gap-12 xsm:gap-6">
        {list.map((item, index) => (
          <ExperienceItem key={index} {...item} />
        ))}
      </div>
    </article>
  );
}

export default ExperienceWrapper;
