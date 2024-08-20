import { useState } from "react";
import { useAsyncInitialize } from "./useAsyncInitialize";

export function useGamePlay() {
  const buttonNumbers = Array.from({ length: 25 }, (_, i) => i + 1);
  const [round, rsetRound] = useState(1);
  const [tapped, setTapped] = useState<number[]>([]);
  const [blockValues, setBlockValues] = useState<number[]>([]);
  const [score, setScore] = useState(0);

  const generateBlockValues = () => {
    const result = [];
    for (let i = 0; i < 25; i++) {
      const randomValue = Math.random();
      let number;

      if (randomValue < 0.4) {
        number = Math.floor(Math.random() * 2); // 0 to 1 (40% chance)
      } else if (randomValue < 0.7) {
        number = Math.floor(Math.random() * 4) + 2; // 2 to 5 (30% chance)
      } else if (randomValue < 0.95) {
        number = Math.floor(Math.random() * 2) + 6; // 6 to 7 (25% chance)
      } else {
        number = Math.floor(Math.random() * 2) + 8; // 8 to 9 (5% chance)
      }

      result.push(number);
    }
    return result;
  };

  const getBlockValue = (number: number, index: number) => {
    if (tapped.includes(number)) {
      return blockValues[index];
    }
    return 0;
  };

  const tapBlock = (number: number, index: number) => {
    if (tapped.filter((n) => n === number).length > 4) {
      return;
    } else if (tapped.filter((n) => n === number).length === 3) {
      setTapped([...tapped, number]);
      const value = getBlockValue(number, index);
      setScore(score + value);
      console.log("score", score);
    } else {
      setTapped([...tapped, number]);
    }
  };

  const isMaxTapped = (number: number) => {
    return tapped.filter((n) => n === number).length === 4;
  };

  useAsyncInitialize(async () => {
    setBlockValues(generateBlockValues());
    console.log("Game started");
  }, []);

  const getScore = () => {
    return score;
  };

  return {
    round,
    tapped,
    score,
    buttonNumbers,
    getScore,
    isMaxTapped,
    getBlockValue,
    tapBlock,
  };
}
