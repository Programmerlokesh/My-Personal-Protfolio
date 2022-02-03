import React from "react";
import { FcCalendar } from "react-icons/fc";
import { HiLocationMarker } from "react-icons/hi";
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
            {/* <span className="small_dash"></span> */}
          </div>
        </div>
      </main>
      <hr />
    </>
  );
};

export default About;
