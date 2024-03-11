import React from "react";

const Result = ({ userAnswers, questions, resetQuiz = () => {} }) => {
  const correctAnswers = userAnswers.filter((answer) => answer).length;
  return (
    <div className="results">
      <h2>Results</h2>
      <p>
        You answered {correctAnswers} out of {questions.length} Questions
        <span onClick={resetQuiz}>Click here to Retry</span>
      </p>
      <ul>
        {questions.map((ques, index) => {
          return (
            <li key={index} data-correct={userAnswers[index]}>
              Q{index + 1}.{ques.question}
              <b style={{ color: "green" }}>
                {userAnswers[index]
                  ? ""
                  : `${
                      questions[index].answerOptions.find(
                        (ans) => ans.isCorrect
                      ).text
                    }`}
              </b>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Result;
