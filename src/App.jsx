import { useState } from "react";
import "./App.css";
import Question from "./components/question";
import questions from "./constants/questions.json";
import Result from "./components/Result";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCorrect]);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };

  return (
    <>
      <div className="App">
        <h1>
          Welcome to Bipin{" "}
          <span style={{ color: "green" }}>THA TANTHA HELI</span> APP
        </h1>
        {currentQuestion < questions.length ? (
          <Question
            question={questions[currentQuestion]}
            onAnswerClick={handleNextQuestion}
          />
        ) : (
          <h1>DONE!!!!</h1>
        )}
        {currentQuestion === questions.length && (
          <Result
            userAnswers={userAnswers}
            questions={questions}
            resetQuiz={resetQuiz}
          />
        )}
      </div>
    </>
  );
}

export default App;
