import Die from "./Die";
import "./Dice.css";

// Props: dice: [n,...] (any number), State: None! Events: None! Just renders a bunch of die components based on how many dice it gets.
// Generally don't use the array index as a unique key in the real world but its OK for this case
function Dice({ dice, color }) {
  return (
    <section className="Dice">
      {dice.map((v, i) => (
        <Die key={i} val={v} color={color} />
      ))}
    </section>
  );
}
export default Dice;

[3, 4, 2];
