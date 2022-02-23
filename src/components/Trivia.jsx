import { useEffect, useState } from "react";

export default function Trivia({
  data,
  setStop,
  questionNumber,
  setQuestionNumber,

}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);


  const delay = (duration, callback) => {
    setStop(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    setTimeout(function () {
      setClassName(a.correct ? "answer correct" : "answer wrong");
      if (a.correct) {
        setTimeout(function () {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        }, 8000)
      } else {
        setTimeout(function () {
          setStop(true);
        }, 8000);
      }
    }, 1000);


  };
  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => !selectedAnswer && handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}