import { useState } from "react";

type Cube = {
  stepNumber: number;
  bricks: number[];
};

function generatePyramid(input: number): Cube[] {
  const pyramid: Cube[] = [];
  let counter = 1;
  for (let y = 1; y <= input; y++) {
    const newStep: Cube = { stepNumber: y, bricks: [] };
    for (let b = 1; b <= y; b++) {
      newStep.bricks.push(counter), counter++;
    }
    pyramid.push(newStep);
  }
  return pyramid;
}

export default function PyramidApp() {
  const [rows, set_rows] = useState<number>(1);
  const steps = generatePyramid(rows);

  return (
    <>
      <input
        className="mb-4 rounded-lg border-black bg-neutral-300 p-4"
        type="number"
        value={rows}
        onChange={(e) => set_rows(e.target.valueAsNumber)}
      />
      {steps.map((step, index) => (
        <div key={step.toString()} className="m-1  flex gap-1">
          <div className=" mx-auto flex p-2">
            {step.bricks.map((brick) => {
              return (
                <div
                  key={brick.toString()}
                  className="m-0.5 rounded-lg border-4 border-green-600 bg-rose-500 p-5"
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
