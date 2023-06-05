import { useState } from "react";
import { Canvas } from "@react-three/fiber";

type PyramidSteps = {
  stepNumber: number;
  cubes: number[];
};

function generatePyramid(input: number): PyramidSteps[] {
  const pyramid: PyramidSteps[] = [];
  let counter = 1;
  for (let y = 1; y <= input; y++) {
    const newStep: PyramidSteps = { stepNumber: y, cubes: [] };
    for (let b = 1; b <= y; b++) {
      newStep.cubes.push(counter), counter++;
    }
    pyramid.push(newStep);
  }
  return pyramid;
}
// Add Cube
export function Cube() {
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [3, 2, 6],
      }}
    >
      <Cube />
    </Canvas>
  );
}

export default function Pyramid3dApp() {
  const [rows, set_rows] = useState<number>(10);
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
            {step.cubes.map((cube) => {
              return <div key={cube.toString()}>{cube}</div>;
            })}
          </div>
        </div>
      ))}
    </>
  );
}
