import { useState } from "react";

function MyComponent() {
  const [car, setcar] = useState({
    brand: "Toyota",
    model: "Camry",
    year: 2024,
  });

  function handleYearChange(e) {
    setcar({ ...car, year: e.target.value });
  }

  function handleBrandChange(e) {
    setcar({ ...car, brand: e.target.value });
  }

  function handleModelChange(e) {
    setcar({ ...car, model: e.target.value });
  }

  return (
    <div>
      <p>
        Your Favorite Car is: {car.year} {car.model} {car.brand}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />{" "}
      <br />
      <input type="text" value={car.brand} onChange={handleBrandChange} />
      <br />
      <input type="text" onChange={handleModelChange} value={car.model} />
    </div>
  );
}

export default MyComponent;
