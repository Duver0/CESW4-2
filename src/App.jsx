/* import logo from './logo.svg'; */
import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Start from "./components/Start";
import Navbar from "./components/Navbar";
import API from "./services/api";
import Logout from "./components/Logout";

function App() {
  const [username, setUsername] = useState(null);
  const [category, setCategory] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const [data, setData] = useState([]);

  useEffect(() => {
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }

      return array;
    }
    const getQuestionsAction = async () => {
      try {
        const oRespose = await API.getQuestions(10, category, difficulty);
        if (oRespose.status === 200) {
          console.log(oRespose.data);

          if (oRespose.data.results.length > 0) {
            const mappedResults = oRespose.data.results.map((q) => {
              const r = {
                question: q.question,
                answers: [],
              };
              let answers = q.incorrect_answers.map((a) => {
                return { text: a, correct: false };
              });
              answers = [...answers, { text: q.correct_answer, correct: true }];
              r.answers = shuffleArray(answers);
              return r;
            });

            setData(mappedResults);
            return mappedResults;
          }

          return [];
        }
      } catch (error) {
        console.log("hay un error", error);
      }
    };

    getQuestionsAction();
  }, [category, difficulty]);

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100.000" },
        { id: 2, amount: "$ 200.000" },
        { id: 3, amount: "$ 300.000" },
        { id: 4, amount: "$ 400.000" },
        { id: 5, amount: "$ 500.000" },
        { id: 6, amount: "$ 600.000" },
        { id: 7, amount: "$ 700.000" },
        { id: 8, amount: "$ 800.000" },
        { id: 9, amount: "$ 900.000" },
        { id: 10, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);
  return (
    <>
      <Navbar username={username} difficulty={difficulty} earned={earned} />

      <div className="app">
        {username ? (
          <>
            <Logout
              setUsername={setUsername}
              setCategory={setCategory}
              setDifficulty={setDifficulty}
              setData={setData}
              setQuestionNumber={setQuestionNumber}
              setStop={setStop}
              setEarned={setEarned}
            />
            <div className="main">
              {stop ? (
                <h1 className="endText">Usted ganó: {earned}</h1>
              ) : (
                <>
                  <div className="top">
                    <div className="timer">
                      <Timer
                        setStop={setStop}
                        questionNumber={questionNumber}
                      />
                    </div>
                  </div>
                  <div className="bottom">
                    <Trivia
                      data={data}
                      setStop={setStop}
                      questionNumber={questionNumber}
                      setQuestionNumber={setQuestionNumber}
                    />
                  </div>
                </>
              )}
            </div>
            <div className="pyramid">
              <ul className="moneyList">
                {moneyPyramid.map((m) => (
                  <li
                    className={
                      questionNumber === m.id
                        ? "moneyListItem active"
                        : "moneyListItem"
                    }
                  >
                    <span className="moneyListItemNumber">{m.id}</span>
                    <span className="moneyListItemAmount">{m.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <Start
            setUsername={setUsername}
            setCategory={setCategory}
            setDifficulty={setDifficulty}
          />
        )}
      </div>
    </>
  );
}

export default App;
