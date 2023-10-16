import { useState } from "react";
import { BackButton } from "../BackButton";

type PyramidStep = {
  stepNumber: number;
  bricks: number[];
};

function generatePyramid(input: number): PyramidStep[] {
  const pyramid: PyramidStep[] = [];
  let counter = 1;
  for (let y = 1; y <= input; y++) {
    const newStep: PyramidStep = { stepNumber: y, bricks: [] };
    for (let b = 1; b <= y; b++) {
      newStep.bricks.push(counter), counter++;
    }
    pyramid.push(newStep);
  }
  return pyramid;
}

export default function PyramidApp() {
  const [rows, set_rows] = useState<number>(10);
  const steps = generatePyramid(rows);

  return (
    <>
      <input
        className=" m-5 rounded-lg border-black bg-neutral-100 p-4"
        type="number"
        value={rows}
        onChange={(e) => set_rows(e.target.valueAsNumber)}
      />
      Change row count here !
      {steps.map((step) => (
        <div key={step.toString()} className="m-1 flex gap-1">
          <div className=" mx-auto flex p-2">
            {step.bricks.map((brick) => {
              return (
                <div
                  key={brick.toString()}
                  className=" m-0.5 rounded-md bg-white p-4 "
                >
                  {brick}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}
