import GoalList from "./components/GoalList";
import NewGaol from "./components/NewGaol";

import { useState } from "react";

function App() {
  const [courseGoal, setCourseGoals] = useState([
    { id: "cg1", text: "Learn React and finish the Course" },
    { id: "cg2", text: "Learn Next.js and finish the Course" },
    { id: "cg3", text: "Learn Node.js and finish the Course" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    setCourseGoals((preCourseGoals) => preCourseGoals.concat(newGoal));
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGaol onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoal} />
    </div>
  );
}

export default App;
