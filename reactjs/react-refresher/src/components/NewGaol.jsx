/* eslint-disable react/prop-types */
import { useState } from "react";

function NewGaol(props) {
  const [enteredText, setEnteredText] = useState("");
  const addGoalHandler = (e) => {
    e.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: enteredText,
    };

    console.log(newGoal);

    setEnteredText("");

    props.onAddGoal(newGoal);
  };

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default NewGaol;
