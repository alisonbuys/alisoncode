import { useState } from "react";
import { type Question } from "./question_data";
import Image from "next/image";

export function QuestionSingle({
  question,
  currentQuestion,
  onNext,
}: {
  question: Question;
  currentQuestion: number;
  onNext: () => void;
}) {
  const [picked, setPicked] = useState<number>();

  // check if correct or wrong

  const isCorrect = picked === question.answer;

  return (
    <div className="question-card rounded-xl bg-white p-4">
      {/* Current Question  */}
      <h2 className="pb-2 text-xl">Question {currentQuestion + 1}</h2>
      <h3 className="question-text mx-1 text-neutral-700">{question.text}</h3>
      <div className="">
        {question.imageSrc && (
          <Image
            src={question.imageSrc}
            alt={question.imageAlt ?? ""}
            width={200}
            height={200}
            className="pt-2"
          />
        )}
      </div>

      <hr className="mb-2 mt-4" />

      {/* <pre>{JSON.stringify({ isCorrect, picked, question }, null, 2)}</pre> */}

      {/* List of possible answers  */}
      <ul>
        {question.options.map((option) => {
          return (
            <li
              key={option.id}
              className="my-2 flex gap-2 rounded-md border bg-stone-100 p-2"
              // onClick={() => optionClicked(option.isCorrect)}
            >
              <input
                type="checkbox"
                checked={option.id === picked}
                onChange={(e) => {
                  console.log(
                    "user clicked",
                    question,
                    option,
                    e.target.checked
                  );
                  setPicked(option.id);
                }}
              />
              {option.text}
            </li>
          );
        })}
      </ul>

      {isCorrect ? (
        <button
          className="mt-2 rounded bg-green-500 p-2 px-4 text-white transition hover:bg-green-600"
          onClick={() => {
            onNext();
          }}
        >
          NEXT
        </button>
      ) : (
        <div className="text-red-500">WRONG ANSWER</div>
      )}
    </div>
  );
}

// {isCorrect ? (
//     <div className="text-green-500">CORRECT!!</div>
//   ) : (
//     <div className="text-red-500">WRONG ANSWER</div>
//   )}
/* image 53 */
