import { CleanBtn, Crack1, Crack2, Crack3, Right, Top } from "@/assets/images";
import { useGamePlay } from "@/hooks/useGamePlay";
// import React, { useEffect } from "react";

function Pit() {
  // get all necessary data from useGamePlay hook
  const { buttonNumbers, tapped, tapBlock, isMaxTapped, getBlockValue } =
    useGamePlay();

  const getBackground = (number: number, index: number) => {
    if (tapped.includes(number)) {
      const tapCount = tapped.filter((n) => n === number).length;
      switch (tapCount) {
        case 1:
          return Crack1;
        case 2:
          return Crack2;
        case 3:
          return Crack3;
        default:
          return getBlockValue(number, index).toString();
      }
    }
    return CleanBtn;
  };

  return (
    <div className="relative w-full hfull">
      <div className="w-full h-full ">
        <img src={Top} className="w-full h-10" />
        <div className="flex min-h-fit">
          <div className="w-fit h-full bg-[url('/src/assets/images/left.svg')] bg-center bg-no-repeat bg-contain" />
          <img src={Right} className="w-10 h-full" />
          <div className="flex-1 ">
            <div className="h-full w-full grid grid-cols-5 grid-rows-5 ">
              {buttonNumbers.map((number, i) => (
                <button
                  key={i}
                  className="rounded-lg flex justify-center items-center"
                  onClick={() => tapBlock(number, i)}
                >
                  {isMaxTapped(number) ? (
                    <p className="font-game text-white text-3xl">
                      {getBackground(number, i)}
                    </p>
                  ) : (
                    <img
                      src={getBackground(number, i)}
                      className="w-full h-full"
                    />
                  )}
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
