import React, { useState } from "react";
import quizData from "../data/quizData";
import"./quizapp.css";

const QuizApp = ({ category }) => {
  const [answers, setAnswers] = useState(Array(quizData.length).fill(""));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let newScore = 0;
    for (let i = 0; i < quizData.length; i++) {
      if (answers[i] === quizData[i].correctAnswer) {
        newScore++;
      }
    }
    setScore(newScore);
    setSubmitted(true);
  };

  return (
    <div className="quiz_app">
      <p className="root">Home : {category}</p>
      <h1 className="quiz_head">{category}</h1>
      {quizData.map((question, index) => {
        if (question.title.toLowerCase() === category.toLowerCase()) {
          return (
            <div key={index} className="quizBox">
              <h3>{question.question}</h3>
            
                {question.options.map((option, optionIndex) => (
                  <p key={optionIndex} className="option">
                    <input
                      type="radio"
                      id={`question${index}_option${optionIndex}`}
                      name={`question${index}`}
                      value={option}
                      checked={answers[index] === option}
                      onChange={() => handleAnswerChange(index, option)}
                    />
                    <label htmlFor={`question${index}_option${optionIndex}`}>
                      {option}
                    </label>
                  </p>
                ))}
           
           {!submitted?<></>:<><p className="correctanswer">correct answer : <span>{question.correctAnswer}</span></p></> }  
            </div>
          );
        } else {
          return null;
        }
      })}
      {!submitted && <button onClick={handleSubmit}>Submit</button>}
      {submitted && (
        <div>
          <p className="score">Quiz submitted! Your score is: {score}</p>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
