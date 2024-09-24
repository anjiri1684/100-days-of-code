import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }
  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>
    </div>
  );
}

export default MyComponent;
