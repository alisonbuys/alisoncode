import { useState } from "react";

// function generatePyramid(input: number); PyramidRows[]{
//   const pyramid =[];}
export default function PyramidApp() {
  const [rows, set_rows] = useState("");

  let singleNumber = 1;

  for (let rowNumber = 1; (rowNumber = rows); rowNumber = rowNumber + 1) {
    console.log(`rowNumber is ${rowNumber}`);

    let row_display = "";

    for (let y = 0; y < rowNumber; y = y + 1) {
      row_display = `${row_display} ${singleNumber}`;
      singleNumber = singleNumber + 1;
    }

    console.log(row_display);
  }

  return (
    <>
      <div className="m-5 bg-pink-300 p-10 font-bold text-white">
        PYRAMID SET
        <input
          type="number"
          className=" border-black p-4 text-black"
          value={rows}
          onChange={(event) => {
            set_rows(event.target.value);
          }}
        />
      </div>
      <div className="m-10 bg-rose-300 p-10 "></div>
    </>
  );
}
