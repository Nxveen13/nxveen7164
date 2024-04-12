import React from "react";
import "./about.css";
import about_img from "../../data/images/logo (1).jpg";
const About = () => {
  return (
    <div className="about">
      <div className="about_col_left">
        <img src={about_img} alt="" />
      </div>
      <div className="about_col_right">
        <h2>About</h2>
        <p>
          Welcome to our quiz app! This app is designed to test your knowledge
          on various topics. Whether you're a trivia enthusiast or just looking
          to learn something new, our quiz app has something for everyone.
        </p>
        <p>
          Choose from a wide range of categories including history, science,
          literature, sports, and more. Each quiz consists of multiple-choice
          questions to challenge your understanding and keep you engaged.
        </p>
        <p>
          Track your progress as you complete quizzes and strive for the top of
          the leaderboard. Compete with friends or challenge yourself to beat
          your own high score.
        </p>
        <p>
          Ready to get started? Select a quiz category from the menu and let the
          learning begin!
        </p>
        <p>
          If you have any questions, suggestions, or feedback, we'd love to hear
          from you. Feel free to contact us via email or social media.
        </p>
      </div>
      
    </div>
  );
};

export default About;
