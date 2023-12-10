import React from "react";
import homeBack from "../../assets/images/home-back.png";
import play from "../../assets/images/play.png";
import "./home.css";
import MainBtn from "../Button/MainBtn";

const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="home">
          <div className="home-left">
            <h1 className="h1">Work at the speed of thought</h1>
            <p className="p1">
              Tools, tutorials, design and innovation experts, all in one place!
              The most intuitive way to imagine your next user experience.
            </p>
            <div className="links">
              <MainBtn>Get Started</MainBtn>
              <a className="play" href="/">
                <img src={play} alt="" /> <p>Watch the Video</p>
              </a>
            </div>
          </div>
          <div className="home-right">
            <img src={homeBack} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
