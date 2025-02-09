import { useState } from "react";
import { getRolls } from "./utils";
import Button from "./Button";
import Dice from "./Dice";

// Props: numDice (could be any), goal (default 7, could be set to any #), State: dice: [n, ...] (dice array), Event: roll()
// see old version in notes which had a fixed win condition (sum === goal) before we passed in a winCheck function into this component
//ex: Possible game strategy: sum of dice is less than 4 -> function lessThan4(dice) { return sum(dice) < 4;} <LuckyN numDice={3} winCheck={lessThan4} /> 
// Passing a function as a prop - This is a very powerful idea! Now our LuckyN component is about the view of our app, and it can take configurable logic

function LuckyN({ title = "Dice Game", numDice = 2, winCheck }) {
  const [dice, setDice] = useState(getRolls(numDice));
  const isWinner = winCheck(dice);
  const roll = () => setDice(getRolls(numDice));
  return (
    <main className="LuckyN">
      <h1>
        {title} {isWinner && "You Win!"}
      </h1>
      <Dice dice={dice} />
      <Button clickFunc={roll} label="Re-Roll" />
    </main>
  );
}
export default LuckyN;
