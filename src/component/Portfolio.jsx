import React from "react";
import PortfolioItme from "./PortfolioItme";

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="flex flex-col items-center justify-center min-h-screen gap-5 p-14 sm:p-7"
    >
      <h5 className="text-green-4">My Recent Works</h5>
      <h2 className="text-3xl text-green-6">Portfolio</h2>
      <div className="flex flex-wrap justify-center gap-5">
        <PortfolioItme
          title="Discord WebApp"
          image="/assets/image/discord.png"
          githubLink="https://github.com/AliAsMath/discord-front"
          liveLink="https://discord-front-psi.vercel.app/"
        />
        <PortfolioItme
          title="E-Commerce Website"
          image="/assets/image/monaco.png"
          githubLink="https://github.com/AliAsMath/Monaco"
          liveLink="https://monaco-watch.vercel.app/"
        />
        <PortfolioItme
          title="Social App"
          image="/assets/image/zagros-social.jpg"
          githubLink="https://github.com/AliAsMath/socialZagros-client"
          liveLink="https://social-zagros-client.vercel.app/"
        />
        <PortfolioItme
          title="Admin Panel"
          image="/assets/image/admin-panel.png"
          githubLink="https://github.com/AliAsMath/Admin-panel"
          liveLink="https://admin-panel-seven-ivory.vercel.app/"
        />

        <PortfolioItme
          title="Netflix Clone"
          image="/assets/image/netflix-clone.jpg"
          githubLink="https://github.com/AliAsMath/Netflix-clone"
          liveLink="https://netflix-clone-opal-omega.vercel.app/"
        />
        <PortfolioItme
          title="Netflix CMS"
          image="/assets/image/netflix-cms.png"
          githubLink="https://github.com/AliAsMath/Netflix-CMD"
          liveLink="https://netflix-cmd.vercel.app/"
        />
      </div>
    </section>
  );
}

export default Portfolio;
