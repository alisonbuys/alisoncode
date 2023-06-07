import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import Cube from "./cube";
import { OrbitControls } from "@react-three/drei";
import { type } from "os";

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

// function addPyramids(){
//   let rows=
// }
export default function PyramidApp() {
  const [rows, set_rows] = useState<number>(10);
  const steps = generatePyramid(rows);
  // const blocks = addPyramids();

  return (
    <>
      <input
        className="ml-5 rounded-lg border-black bg-neutral-300 p-4"
        type="number"
        value={rows}
        onChange={(e) => set_rows(e.target.valueAsNumber)}
      />
      <div className="h-screen bg-gray-500">
        <Canvas camera={{ position: [0, 0, 4], fov: 40 }}>
          <OrbitControls />
          <directionalLight position={[1, 2, 3]} intensity={1.5} />
          <ambientLight intensity={0.5} />

          {steps.map((step, step_number) => (
            <>
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
            </>
          ))}
        </Canvas>
      </div>
    </>
  );
}
