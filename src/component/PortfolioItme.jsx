import React from "react";

function PortfolioItme({ title, image, githubLink, liveLink }) {
  return (
    <div className="w-fit flex flex-col gap-2 p-4 rounded-xl bg-green-1 hover:bg-green-3">
      <img className=" rounded-t-xl h-36" src={image} alt="" />
      <h3 className="text-green-5">{title}</h3>
      <div className="flex gap-2 justify-start">
        <a
          href={githubLink}
          className="p-1 rounded border text-xs border-green-5 hover:bg-green-1"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          href={liveLink}
          className="p-1 rounded border text-xs text-black border-green-1 bg-green-5 hover:bg-green-4"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default PortfolioItme;
