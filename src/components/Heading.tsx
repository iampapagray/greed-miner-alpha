import React, { useEffect } from "react";

function Heading({ score, round }: { score: number, round: number }) {

  const [msg, setMsg] = React.useState("Tap on blocks to mine");

  useEffect(() => {
    if (score > 0) {
      setMsg(`Round ${round}: ${score}`);
    } else {
      setMsg("Tap on blocks to mine");
    }
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
