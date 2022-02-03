import React from "react";
import { FcCalendar } from "react-icons/fc";
import { GrReactjs } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoSass } from "react-icons/io";
import { RiCss3Fill } from "react-icons/ri";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import "../css/About.css";

const About = () => {
  return (
    <>
      <main className="container_about">
        <div className="about">
          <figure className="about_name">
            <img className="lokesh_img" src="profile.jpeg" alt="" />
            <figcaption className="lokesh_name">Lokesh Debnath</figcaption>
          </figure>
          <h2 className="about_job">Web Developer</h2>
          <div className="about_bio">
            <h3 className="about_info">
              <FcCalendar className="calender_icon" />
              Februrary 28, 2001
            </h3>
            <h3 className="about_info">
              <HiLocationMarker className="location_icon" />
              Basirhat, India
            </h3>
          </div>
          <a href="#">Contact me</a>
        </div>

        <div className="about_skills">
          <div className="about_me">
            <h3 className="about_description">About me</h3>
            <span className="small_dash"></span>
            <p>
              I would describe myself as a quick learner. I love solving
              problems usuing simple and scaleable solution & clean coding is my
              number one priority.
            </p>
          </div>

          <div className="skills">
            <h3 className="working_skills">Skills</h3>
            <span className="small_dash_skills"></span>
          </div>

          <div className="working_skillsbar">
            <div className="skill_levelbox">
              <span className="html">
                <ImHtmlFive />
              </span>
              <span className="progress_html">90%</span>
            </div>
            <div className="skill_levelbox">
              <span className="css">
                <RiCss3Fill />
              </span>
              <span className="progress_css">70%</span>
            </div>
            <div className="skill_levelbox">
              <span className="sass">
                <IoLogoSass />
              </span>
              <span className="progress_sass">70%</span>
            </div>
            <div className="skill_levelbox">
              <span className="javascript">
                <SiJavascript />
              </span>
              <span className="progress_js">70%</span>
            </div>

            <div className="skill_levelbox">
              <span className="tailwind">
                <SiTailwindcss />
              </span>
              <span className="progress_tailwind">45%</span>
            </div>
            <div className="skill_levelbox">
              <span className="react">
                <GrReactjs />
              </span>
              <span className="progress_react">60%</span>
            </div>
          </div>
        </div>
      </main>
      
    </>
  );
};

export default About;
