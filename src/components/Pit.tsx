import { Bottom, Left, MineBackground, Right, Top } from "@/assets/images";
import React from "react";

function Pit() {
  const buttonNumbers = Array.from({ length: 25 }, (_, i) => i + 1);

  return (
    <div className="relative h-full w-full">
      <div className="w-full h-full ">
        <img src={Top} className="w-full h-10" />
        <div className="flex min-h-fit">
          <div className="w-fit h-full bg-[url('/src/assets/images/left.svg')] bg-center bg-no-repeat bg-contain" />
          <img src={Right} className="w-10 h-full" />
          <div className="flex-1 ">
            <div className="h-full w-full grid grid-cols-5 grid-rows-5 gap-1 ">
              {buttonNumbers.map((number, i) => (
                <button
                  key={i}
                  className="bg-amber-950 border border-amber-900 rounded-lg flex justify-center items-center"
                >
                  {number}
                </button>
              ))}
            </div>
          </div>
          <img src={Right} className="w-10 h-full" />
        </div>
        <img src={Top} className="w-full h-10 rotate-180" />
      </div>
    </div>
  );
}

export default Pit;
