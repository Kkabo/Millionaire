import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Which continent is Kosovo located on?",
      answers: [
        {
          text: "Europe",
          correct: true,
        },
        {
          text: "Asia",
          correct: false,
        },
        {
          text: "Africa",
          correct: false,
        },
        {
          text: "South America",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "What is the holy book of Islam?",
      answers: [
        {
          text: "Torah",
          correct: false,
        },
        {
          text: "Bible",
          correct: false,
        },
        {
          text: "Vedas",
          correct: false,
        },
        {
          text: "Quran",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who painted the Mona Lisa?",
      answers: [
        {
          text: "Vincent van Gogh",
          correct: false,
        },
        {
          text: "Leonardo da Vinci",
          correct: true,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Michelangelo",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which famous playwright wrote Romeo and Juliet?",
      answers: [
        {
          text: "William Shakespeare",
          correct: true,
        },
        {
          text: "Charles Dickens",
          correct: false,
        },
        {
          text: "Jane Austen",
          correct: false,
        },
        {
          text: "Mark Twain",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What is the capital city of the United States of America?",
      answers: [
        {
          text: "New York City",
          correct: false,
        },
        {
          text: "Washington D.C.",
          correct: true,
        },
        {
          text: "Los Angeles",
          correct: false,
        },
        {
          text: "Chicago",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which animal is known as the 'King of the Jungle'?",
      answers: [
        {
          text: "Elephant",
          correct: false,
        },
        {
          text: "Tiger",
          correct: false,
        },
        {
          text: "Gorilla",
          correct: false,
        },
        {
          text: "Lion",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "What is the chemical symbol for gold?",
      answers: [
        {
          text: "Au",
          correct: true,
        },
        {
          text: "Ag",
          correct: false,
        },
        {
          text: "Fe",
          correct: false,
        },
        {
          text: "Pb",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "What is the primary language spoken in Brazil?",
      answers: [
        {
          text: "Spanish",
          correct: false,
        },
        {
          text: "English",
          correct: false,
        },
        {
          text: "Portuguese",
          correct: true,
        },
        {
          text: "French",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "What is the capital city of Canada?",
      answers: [
        {
          text: "Toronto",
          correct: false,
        },
        {
          text: "Montreal",
          correct: false,
        },
        {
          text: "Ottawa",
          correct: true,
        },
        {
          text: "Vancouver",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "What is the predominant religion in Kosovo?",
      answers: [
        {
          text: "Islam",
          correct: true,
        },
        {
          text: "Orthodox Christianity",
          correct: false,
        },
        {
          text: "Catholicism",
          correct: false,
        },
        {
          text: "Hinduism",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question:
        "Which famous Albanian footballer is known for his successful career at clubs like Bayern Munich and Barcelona, as well as the Albanian national team?",
      answers: [
        {
          text: "Lorik Cana",
          correct: false,
        },
        {
          text: "Lorik Loshi",
          correct: false,
        },
        {
          text: "Xherdan Shaqiri",
          correct: true,
        },
        {
          text: "Andriy Shevchenko",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question:
        "In object-oriented programming, what is the concept of 'inheritance'?",
      answers: [
        {
          text: "The ability to create instances of classes",
          correct: false,
        },
        {
          text: "The process of hiding the internal implementation details of a class",
          correct: false,
        },
        {
          text: "The ability of a class to acquire the properties and behavior of another class",
          correct: true,
        },
        {
          text: "The process of creating multiple objects from a single class",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question:
        "Which UFC fighter is famously known by the nickname 'No Love'?",
      answers: [
        {
          text: "Conor McGregor",
          correct: false,
        },
        {
          text: "Dominick Cruz",
          correct: false,
        },
        {
          text: "Nate Diaz",
          correct: false,
        },
        {
          text: "Cody Garbrandt",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "Which player is known as 'The Answer'?",
      answers: [
        {
          text: "Allen Iverson",
          correct: true,
        },
        {
          text: "Shaquille O'Neal",
          correct: false,
        },
        {
          text: "Tim Duncan",
          correct: false,
        },
        {
          text: "Tracy McGrady",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
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
      )}
    </div>
  );
}

export default App;
