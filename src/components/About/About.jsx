import React from "react";
import FooterLink from "../FooterLink/FooterLink";
import Header from "../Header/Header";
import aboutVector from "./../../assets/about_vector.png";
import "./About.css";
import aboutAnime from "./../../assets/about_anime.gif";

const About = () => {
  return (
    <div className="section-container">
      <Header
        heading="About Me."
        details="Programmer |  Blogger |  Coder | Full Stack Developer "
      />

      <div className="about-main">
        <div className="about-main-left">
          {/* Sub section 1 */}
          <h3 className="about-sub-head">Tech enthusiast</h3>
          <p className="about-details">
            I am the one who loves technology and playing with the latest
            gadgets and Learn new things daily
          </p>

          {/* Sub section 2 */}
          <h3 className="about-sub-head">Blogger</h3>
          <p className="about-details">
            I've been writing blogs from around 1.2 years now.
          </p>

          {/* Sub section 3 */}
          <h3 className="about-sub-head">Full Stack Developer</h3>
          <p className="about-details">
            I m a MERN stack developer and also having a good expertise in java.
          </p>
        </div>

        <div className="about-main-right">
          <img src={aboutAnime} alt="animation" className="about-anime" />
        </div>
      </div>

      <FooterLink
        phrase="Check out my "
        link="projects!"
        toAdress="/projects"
      />
      {/* Vector Frame! */}
      <div className="vector-frame">
        <img src={aboutVector} className="about-vector" alt="about" />
      </div>
    </div>
  );
};

export default About;
