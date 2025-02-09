import LuckyN from "./LuckyN";
import { sum } from "./utils";
import BoxGrid from "./BoxGrid";
function lessThan4(dice) {
  return sum(dice) < 4;
}

function allSameValue(dice) {
  return dice.every((v) => v === dice[0]);
}

function App() {
  return (
    <>
      {/* <BoxGrid /> */}
      <LuckyN winCheck={lessThan4} title="Roll less than 4" />
      <LuckyN
        winCheck={allSameValue}
        numDice={3}
        title="Roll the same number"
      />
    </>
  );
}

export default App;


/*

REQUIREMENTS:
1) Play a dice game with numDice number of dice
2) Show a win message when total = goal
3) Roll again button that re-rolls all the dice


Component Hierarchy: App -> LuckyN -> Dice -> Die (several of these)


STATE DESIGN PRINCIPLE 
Lift state as high as needed - but no higher
Where should dice roll state live? 
(X) App: Doesnt need it, so shouldn't lift it
(v) LuckyN: This is the game itself!
(X) Dice: Should just be about showing a hand
(X) Die: Need to know roll total; not just for one

DECOUPLING LOGIC FROM PRESENTATION
Generally, aim to have components be one of two types:
1) Presentational - Doesn't have state; is primarily about appearance/UI
2) Logical - Has state or related logic; isn't about a specific UI
*/
