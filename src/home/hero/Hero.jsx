import React from "react";
import "./hero.css";
import hero_img from "../../data/images/logo (3).jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_col_left">
        <img src={hero_img} alt="" />
      </div>
      <div className="hero_col_right">
      <h4 class="home-h4">ONLINE LEARNING</h4>
            <h1 class="home-h1"><span class="home-span">Learn </span>Everyday</h1>
            <p class="home-p">Online QUIZZ are popular form of enterainment for web sufers.Online QUIZZ are generally free to play and for enterainment purpose and at same time gaining 
                knowledge by palying the QUIZZ.
            </p>
            <Link to="/RandomQus"><button className="hero_btn">QuiZon</button></Link>
      </div>
    </div>
  );
};

export default Hero;
