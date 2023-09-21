import Image from "next/image";
import { FaSignal } from "react-icons/fa";
import { MdOutlineWifi } from "react-icons/md";
import { BsBatteryFull } from "react-icons/bs";
import { useState } from "react";
import { questions } from "./question_data";
import { QuestionSingle } from "./question_single";

export function K53Questions() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
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
    <div className="container mx-auto h-fit rounded-3xl border-2 border-black bg-gradient-to-b from-blue-200 from-10% via-blue-400 via-70% to-blue-600 to-90% p-10 ">
      {/* 1. Header  */}
      <h1 className="mx-3 font-serif text-4xl text-white">K53 Test</h1>

      {/* 2. Current Score  */}
      <h2 className="mx-4 py-3 text-lg text-blue-900">Score: {score} /68</h2>

      {/* 3. Show results or show the question game  */}
      <QuestionSingle
        question={questions[currentQuestion]!}
        onNext={() => {
          setCurrentQuestion(currentQuestion + 1);
        }}
        currentQuestion={currentQuestion}
      />
    </div>
  );
}
