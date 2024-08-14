import { Axe, Flash, Gold } from "@/assets/images";
import React from "react";

function ScoreBoard() {
  const [ores, setOres] = React.useState(19823);
  const [flash, setFlash] = React.useState(98);
  const [axe, setAxe] = React.useState(20);

  return (
    <div className="flex mt-[45px] w-full pl-[48px] pr-[35px] justify-content items-center">
      <div className=" w-full flex justify-between">
        <div className="relative py-2 flex justify-end items-center gap-[10px] pl-6 pr-4 bg-darkTone border border-[#b2d9171a] rounded-[4px]">
          <img
            src={Gold}
            alt="Gold"
            className="absolute -left-[20%] -top-[4px] h-10"
          />
          <p className="text-white text-center text-2xl leading-6 font-normal font-game">
            {ores}
          </p>
        </div>
        <div className="relative py-2 flex justify-end items-center gap-[10px] pl-6 pr-4 bg-darkTone border border-[#b2d9171a] rounded-[4px]">
          <img
            src={Flash}
            alt="Gold"
            className="absolute -left-[23%] w-8 h-10 -top-1"
          />
          <p className="text-[#D1FA2D] text-center text-2xl leading-6 font-normal font-game">
            {flash}
          </p>
        </div>
        <div className="relative py-2 flex justify-end items-center gap-[10px] pl-6 pr-4 bg-darkTone border border-[#b2d9171a] rounded-[4px]">
          <img
            src={Axe}
            alt="Gold"
            className="absolute -left-[15%] -top-[3.7px]  h-[37px]"
          />
          <p className="text-[#FF4238] text-center text-2xl leading-6 font-normal font-game">
            {axe}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ScoreBoard;
