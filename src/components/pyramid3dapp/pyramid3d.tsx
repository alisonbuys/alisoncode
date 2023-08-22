import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import Cube from "./cube";
import { OrbitControls } from "@react-three/drei";

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
     <div className="h-screen bg-gradient-to-b from-sky-200 from-30% via-pink-300 via-70% to-amber-300 to-90%">
      <input
        className="m-5 rounded-lg border-black bg-neutral-100 p-4"
        type="number"
        value={rows}
        onChange={(e) => set_rows(e.target.valueAsNumber)}
      />
     Change row count here !
        <Canvas camera={{ position: [0, 0, 4], fov: 40 }}>
          <OrbitControls />
          <directionalLight position={[1, 2, 3]} intensity={1.5} />
          <ambientLight intensity={0.5} />

          {steps.map((step) => (
            <>
              {step.bricks.map((brick, bricknum) => {
                return (
                  <Cube
                    key={brick}
                    position={[
                      0,
                      -step.stepNumber,
                      (step.stepNumber - bricknum * 2) / 2,
                    ]}
                  />
                );
              })}
            </>
          ))}
        </Canvas>
      </div>
    </>
  );
}
