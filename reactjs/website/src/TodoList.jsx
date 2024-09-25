import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([
    "Eat Break first",
    "Start Coding",
    "Take a walk",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") setTasks((t) => [...t, newTask]);
    setNewTask("");
  }

  function deleteTask(index) {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTask = [...tasks];
      const task = updatedTask.splice(index, 1);
      updatedTask.splice(index - 1, 0, task[0]);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTask = [...tasks];
      const task = updatedTask.splice(index, 1);
      updatedTask.splice(index + 1, 0, task[0]);
    }
  }

  return (
    <div className="todo-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => {
          tasks.length > 0 ? (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>
                Move Up
              </button>
              <button
                className="move-button"
                onClick={() => moveTaskDown(index)}
              >
                Move Down
              </button>
            </li>
          ) : (
            <p>
              No task at the momement.. Click add task button to add your tasks
            </p>
          );
        })}
      </ol>
    </div>
  );
}

export default TodoList;
