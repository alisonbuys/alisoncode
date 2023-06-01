import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";

export default function Pyramid3dApp() {
  return <Canvas></Canvas>;
  // type PyramidStep = {
  //     stepNumber: number;
  //     bricks: number[];
  //   };

  //   function generatePyramid(input: number): PyramidStep[] {
  //     const pyramid: PyramidStep[] = [];
  //     let counter = 1;
  //     for (let y = 1; y <= input; y++) {
  //       const newStep: PyramidStep = { stepNumber: y, bricks: [] };
  //       for (let b = 1; b <= y; b++) {
  //         newStep.bricks.push(counter), counter++;
  //       }
  //       pyramid.push(newStep);
  //     }
  //     return pyramid;
  //   }

  //    function PyramidApp() {
  //     const [rows, set_rows] = useState<number>(5);
  //     const steps = generatePyramid(rows);

  //     return (
  //       <>
  //         <input
  //           className="mb-4 rounded-lg border-black bg-neutral-300 p-4"
  //           type="number"
  //           value={rows}
  //           onChange={(e) => set_rows(e.target.valueAsNumber)}
  //         />
  //         {steps.map((step, index) => (
  //           <div key={step.toString()} className="m-1  flex gap-1">
  //             <div className="mx-auto flex p-2">
  //               {step.bricks.map((brick) => {
  //                 return (
  //                   <div
  //                     key={brick.toString()}
  //                     className="m-0.5 rounded-lg border border-rose-500 bg-rose-400 p-5"
  //                   >
  //                     {brick}
  //                   </div>
  //                 );
  //               })}
  //             </div>
  //           </div>
  //         ))}
  //       </>
  //     );
  //   }
}
