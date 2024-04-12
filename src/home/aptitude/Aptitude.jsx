import React from "react";
import { Link } from "react-router-dom";
import "./aptitude.css";

const Aptitude = () => {
  return (
    <div className="aptitude">
      <div className="aptitude_box box1">
      <h1 class="content-h1">Arithmetic</h1>
      <Link to="/ProblemsOnTrains">problem on train</Link>
      <Link to="/HeightAndDistance">height and distance</Link>
      <Link to="/SimpleInterest">Simple Interest</Link>
      <Link to="/Profit And Loss">Profit And Loss</Link>
      <Link to="/Percentage">Percentage</Link>
      </div>
      <div className="aptitude_box box2">
      <h1 class="content-h1">Verbal Ability</h1>
      <Link to="#">Spotting Errors</Link>
      <Link to="#">Spellings</Link>
      <Link to="#">Ordering of Words</Link>
      <Link to="#">Sentence Improvement</Link>
      <Link to="#">Antonyms</Link>
      </div>
      <div className="aptitude_box box1">
      <h1 class="content-h1">Logical</h1>
      <Link to="#">Number Series</Link>
      <Link to="#">Verbal Classification</Link>
      <Link to="#">Analogies</Link>
      <Link to="#">Matching Definitions</Link>
      <Link to="#">Verbal Reasoning</Link>
      </div>
      <div className="aptitude_box box2">
      <h1 class="content-h1">Arithmetic</h1>
      <Link to="/TimeAndDistance">Time And Distance</Link>
      <Link to="/TimeAndWork">Time And Work</Link>
      <Link to="/CompoundInterest">Compound Interest</Link>
      <Link to="/Partnership">Partnership</Link>
      <Link to="/ProblemsOnAges">Problems On Ages</Link>

      </div>
      <div className="aptitude_box box1">
      <h1 class="content-h1">Verbal Ability</h1>
      <Link to="#">Synonyms</Link>
      <Link to="#">Selecting Words</Link>
      <Link to="#"> Sentence Formation</Link>
      <Link to="#"> Sentence Correction</Link>
      <Link to="#">Completing Statements</Link>

      </div>
      <div className="aptitude_box box2">
      <h1 class="content-h1">Logical</h1>
      <Link to="#">Letter and Symbol Series</Link>
      <Link to="#">Essential Part</Link>
      <Link to="#">Artificial Language</Link>
      <Link to="#">Making Judgments</Link>
      <Link to="#">Logical Problems</Link>
      </div>
    </div>
  );
};

export default Aptitude;
