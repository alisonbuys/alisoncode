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

  for (let y = 1; y < input; y++) {
    const newStep: PyramidStep = { stepNumber: y, bricks: [] };
    for (let x = 1; x < input; x++) {
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
      <div>
        <Canvas></Canvas>
      </div>
      {blocks.map((block, index) => (
        <div key={block.toString()} className="m-1 flex gap-1">
          <div className=" mx-auto flex p-2">
            {block.bricks.map((brick) => {
              return (
                <div
                  key={brick.toString()}
                  className=" m-0.5 rounded-md bg-pink-400 p-2"
                >
                  <pre>
                    [{brick.x},{brick.y}]
                  </pre>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}
