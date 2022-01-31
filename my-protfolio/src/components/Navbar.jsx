import React, { useState } from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import "../sass/navbar.css";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <nav className="main-nav">
        {/* First logo part */}
        <div className="logo">
          <h2>
            <span>L</span>okesh
            <span>D</span>ebnath
          </h2>
        </div>

        {/* Second menu part */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Protfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        {/* Social media link */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.facebook.com/lo.kesh.35513"
                target="_facebook"
              >
                <BsFacebook className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/lokesh.2001/"
                target="_instagram"
              >
                <BsInstagram className="instagram" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/LokeshDebnath18" target="_twitter">
                <BsTwitter className="twitter" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="faBars-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <FaBars />
            </a>
          </div>
        </div>
      </nav>

      {/* HeroSection */}
      <section className="hero-section">
        <h1>
          <span className="h1__top">
            Hello, I'm <span className="highlight">Lokesh Debnath</span>.
          </span>
          <br />
          <span className="h1__bottom">I'm a front-end web developer.</span>
        </h1>
      </section>
    </>
  );
};

export default Navbar;
