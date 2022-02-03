import React from "react";
import { BiTachometer } from "react-icons/bi";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import { SiDynamics365 } from "react-icons/si";
import "../css/Services.css";

const Services = () => {
  return (
    <>
      <div className="services_container">
        <h3 className="services_heading">Services</h3>
        <span className="small_dash"></span>

        <div className="strongpoint_section">
          <div className="fast">
            <BiTachometer className="fast_icon" />
            <h4>Fast</h4>
            <p>
              Faster load times and lag
              <br /> free design with raw code.
            </p>
          </div>
          <div className="responsive">
            <FaLaptopCode className="responsive_icon" />
            <h4>Responsive</h4>
            <p>
              Get the same awesome experience <br />
              in any device samll or big.
            </p>
          </div>
          <div className="semantic">
            <FaCode className="semantic_icon" />
            <h4>Semantic</h4>
            <p>
              Semantic HTML coding <br />
              for high ranking SEO
            </p>
          </div>
          <div className="dynamic">
            <SiDynamics365 className="dynamic_icon" />
            <h4>Dynamic</h4>
            <p>
              Dynamic sites are fun. <br />I love making pages come to life.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
