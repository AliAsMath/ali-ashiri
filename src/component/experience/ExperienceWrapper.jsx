import ExperienceItem from "./ExperienceItem";

function ExperienceWrapper({ expreience, list }) {
  return (
    <article className="md:flex-1 md:w-auto w-5/12 text-center border rounded-xl bg-green-1 border-green-1 py-7 sm:py-4">
      <h3 className="mb-10 text-2xl text-green-6 sm:text-xl">{expreience}</h3>
      <div className="flex flex-wrap justify-between gap-y-12 xsm:gap-y-6 px-7 sm:px-4">
        {list.map((item, index) => (
          <ExperienceItem key={index} {...item} />
        ))}
      </div>
    </article>
  );
}

export default ExperienceWrapper;
