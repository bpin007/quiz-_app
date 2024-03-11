import React from "react";

const Question = ({ question, onAnswerClick }) => {
  return (
    <div className="questions">
      <h2>{question.question}</h2>
      <ul className="options">
        {question.answerOptions.map((options) => {
          return (
            <li key={options.text}>
              <button onClick={() => onAnswerClick(options.isCorrect)}>
                {options.text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Question;
