import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import Cube from "~/components/pyramid3dapp/cube";

type Brick = {
  id: string;
  x: number;
  y: number;
};

type PyramidStep = {
  stepNumber: number;
  bricks: Brick[];
};

export function generatePyramidStep(input: number): PyramidStep[] {
  const pyramid: PyramidStep[] = [];
  let counter = 1;

  for (let y = 1; y <= input; y++) {
    const newStep: PyramidStep = { stepNumber: y, bricks: [] };
    for (let x = 1; x <= input; x++) {
      let id = "test";
      id = crypto.randomUUID();
      newStep.bricks.push({ x, y, id }), counter++;
    }
    pyramid.push(newStep);
  }

  return pyramid;
}

export default function PyramidApp() {
  const [rows, set_rows] = useState<number>(10);
  const blocks = generatePyramidStep(rows);

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

          {blocks.map((block, index) => (
            <>
              {block.bricks.map((brick, bricknum) => {
                return (
                  <Cube
                    key={brick}
                    position={[
                      0,
                      -block.stepNumber,
                      (block.stepNumber - bricknum * 2) / 2,
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
