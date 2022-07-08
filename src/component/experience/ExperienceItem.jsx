import {BsPatchCheckFill} from "react-icons/bs";

function ExperienceItem({name, level}) {
  return (
    <div className="flex items-start w-1/2 gap-4 sm:gap-3">
      <BsPatchCheckFill className="mt-[6px] text-red sm:text-sm" />
      <div className="text-left">
        <h4 className="text-lg text-green-5 sm:text-base">{name}</h4>
        <p className="text-green-4 sm:text-sm">{level}</p>
      </div>
    </div>
  );
}

export default ExperienceItem;
