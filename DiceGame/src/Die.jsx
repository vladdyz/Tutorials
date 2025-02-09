import "./Die.css";

// Props: Val (numbeR), State: None! Events: None! This component is purely presentational

function Die({ val, color = "slateblue" }) {
  return (
    <div className="Die" style={{ backgroundColor: color }}>
      {val}
    </div>
  );
}

export default Die;
