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



  // let singleNumber = 1;

  // for (let rowNumber = 1; (rowNumber = row); rowNumber = rowNumber + 1) {
  //   console.log(`rowNumber is ${rowNumber}`);

  //   let row_display = "";

  //   for (let y = 0; y < rowNumber; y = y + 1) {
  //     row_display = `${row_display} ${singleNumber}`;
  //     singleNumber = singleNumber + 1;
  //   }

  //   console.log(row_display);
  // }

  return (
    <>
      <div className="m-5 bg-pink-300 p-10 font-bold text-white">
        PYRAMID SET
        <input
          type="number"
          className=" border-black p-4 text-black"
          value={rows}
          onChange={(event) => {
            set_rows(event.target.valueAsNumber);
          }}
        />
      </div>
      <div className="m-10 bg-rose-300 p-10 "></div>
      {steps.map((step,index)=>{
        <div key={step.toString()}>
          <div className=" mx-auto flex p-2">
            (step.bricks.map((brick)=> {
              return(
                <div key={brick.toString()}
              )
            }
          </div>
        </div>
      }
      )}
    </>
  );
}
