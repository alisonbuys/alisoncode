import { useState } from "react";
import { questions } from "./question_data";
import { QuestionSingle } from "./question_single";

export function K53Questions() {
  // Properties
  // const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [score, setScore] = useState(0);

  // Helper Functions

  return (
    <>
      <div className="h-screen w-screen bg-indigo-100 p-5">
        <div className="lg:p-10 container mx-auto h-fit rounded-3xl border-2 border-black bg-gradient-to-b from-blue-200 from-10% via-blue-400 via-70% to-blue-600 to-90% p-5 sm:p-10 md:p-10 ">
          {/* 1. Header  */}
          <h1 className="mx-3 pb-6 font-serif text-4xl text-white">K53 Test</h1>

          {/* 2. Current Score  */}
          {/* <h2 className="mx-4 py-3 text-lg text-blue-900">Score: {score} /68</h2> */}

          {/* 3. Show results or show the question game  */}
          <QuestionSingle
            question={questions[currentQuestion]!}
            onNext={() => {
              setCurrentQuestion(currentQuestion + 1);
            }}
            currentQuestion={currentQuestion}
          />
        </div>
      </div>
    </>
  );
}
