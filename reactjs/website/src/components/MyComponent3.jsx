import { useState } from "react";

function MyComponent() {
  const [foods, setFoods] = useState([
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Grape",
  ]);

  function handleAddfood(e) {
    e.preventDefault();
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods((foods) => [...foods, newFood]);
  }

  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>My Favourite Foods</h1>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddfood}>Add Food</button>
    </div>
  );
}

export default MyComponent;
