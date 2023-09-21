import Image from "next/image";
import {FaSignal} from "react-icons/fa"
import {MdOutlineWifi} from "react-icons/md"
import {BsBatteryFull} from "react-icons/bs"
import { useState } from "react";



export function K53Questions (){
    // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

type Question = {
    id: string;
    text: string;
    answer: number;
    options: { id: number; text: string }[]
}

  const questions: Question[] = [
    {
        id: "asdasd",

      text: "What is the capital of America?",
      answer: 3,
      options: [
        { id: 0, text: "New York City",  },
        { id: 1, text: "Boston",  },
        { id: 2, text: "Santa Fe",  },
        { id: 3, text: "Washington DC",  },
      ],
    },
    {
        id: "2",
      text: "What year was the Constitution of America written?",
      answer: 0,
      options: [
        { id: 0, text: "1787" },
        { id: 1, text: "1776" },
        { id: 2, text: "1774" },
        { id: 3, text: "1826" },
      ],
    },
    {
        id: "3",
      text: "Who was the second president of the US?",
      answer: 0,
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect: boolean) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>K53 Test 🇺🇸</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart Test</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  className="border p-2 border-neutral-500 gap-2 flex"
                  // onClick={() => optionClicked(option.isCorrect)}
                >
                  <input type="checkbox" onChange={(e) => {
                    console.log("user clicked", questions[currentQuestion], option, e.target.checked)
                  }} />
                  {option.text}
                </li>
              );
            })}
          </ul>

          <button className="bg-sky-500 text-white p-2">NEXT</button>
        </div>
      )}
    </div>
  );
}
