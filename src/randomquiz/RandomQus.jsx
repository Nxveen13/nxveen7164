import React, { useState, useMemo } from "react";
import quizData from "../data/quizData";
import "./randomqus.css";

const RandomQus = ({ category }) => {
  // Memoize the shuffled quiz data so it doesn't change on re-renders
  const shuffledQuizData = useMemo(() => quizData.sort(() => Math.random() - 0.5), []);

  // Select the first 10 questions after shuffling
  const selectedQuestions = shuffledQuizData.slice(0, 10);
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
      {selectedQuestions.map((question, index) => {
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

            {!submitted ? (
              <></>
            ) : (
              <>
                <p className="correctanswer">
                  correct answer : <span>{question.correctAnswer}</span>
                </p>
              </>
            )}
          </div>
        );
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

export default RandomQus;
