import React from "react";
import { BsGithub } from "react-icons/bs";
import { FcWorkflow } from "react-icons/fc";
import "../css/herosection.css";

const Herosection = () => {
  return (
    <>
      {/* HeroSection */}
      <main>
        <div className="container_heroSection">
          <h1>
            <span className="h1__top">
              Hello, I'm <span className="highlight">Lokesh Debnath</span>.
            </span>
            <br />
            <span className="h1__bottom">I'm a front-end web developer.</span>
          </h1>
        </div>
        <div className="link-button">
          <a
            href="https://github.com/Programmerlokesh"
            target="_github"
            className="fa github"
          >
            <BsGithub />
          </a>
          <a href="#" className="fa projects">
            <FcWorkflow />
          </a>
        </div>
      </main>
    </>
  );
};

export default Herosection;
