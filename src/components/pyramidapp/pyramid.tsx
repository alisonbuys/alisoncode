import { useState } from "react";

type PyramidStep = {
  stepNumber: number;
  bricks: number[];
};

function generatePyramid(input: number): PyramidStep[] {
  const pyramid: PyramidStep[] = [];
  let counter = 1;
  for (let y = 1; y <= y; y++) {
    const newStep: PyramidStep = { stepNumber: y, bricks: [] };
    for (let b = 1; b <= b; b++) {
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
      <div className="bg-rose-300 p-10" />
      <input
        type="number"
        value={rows}
        onChange={(e) => set_rows(e.target.valueAsNumber)}
      />

      {steps.map((step, index) => (
        <div key={step.toString()} className="m-1 flex gap-1 bg-pink-500">
          <div className="mx-auto flex p-2">
            {step.bricks.map((brick) => {
              return (
                <div key={brick.toString()} className="m-4 h-4 bg-red-300">
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
