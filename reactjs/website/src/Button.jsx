import { useState } from "react";

function Button() {
  let [count, setCount] = useState(0);
  const [response, setResponse] = useState("");

  const handleClick = (name) => {
    if (count < 3) {
      setCount(count++);
      setResponse(`${name} you clicked me ${count} time/s`);
    } else {
      setResponse(`${name} Stop clicking me`);
    }
  };

  const handleClick2 = (e) => {
    e.target.innerHTML = "Ouch! 🤕";
  };

  return (
    <div>
      <h1>{response}</h1>
      <button onClick={() => handleClick("Vincent")}>Click me</button>

      <button onClick={handleClick2}>Click me</button>
    </div>
  );
}

export default Button;
