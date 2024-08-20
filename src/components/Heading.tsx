import { useGamePlay } from "@/hooks/useGamePlay";
import React, { useEffect } from "react";

function Heading() {
  const { score, tapped, getScore } = useGamePlay();
  const [msg, setMsg] = React.useState("Tap on blocks to mine");

  useEffect(() => {
    console.log("Score changed:", score);

    if (score > 100) {
      console.log("High score achieved!");
    }

    // If you want to call a function when the score changes:
    // handleScoreChange(score);
  }, [score]);

  return (
    <div className="">
      <p className="text-white text-center text-[1.75rem] leading-7 font-normal font-game">
        {msg}
      </p>
    </div>
  );
}

export default Heading;
