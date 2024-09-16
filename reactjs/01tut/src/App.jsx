import classes from "./app.module.css";

function App() {
  const names = [
    "Ava",
    "Liam",
    "Sofia",
    "Noah",
    "Isabella",
    "Mason",
    "Mia",
    "Elijah",
    "Emma",
    "Oliver",
  ];
  const randNum = Math.floor(Math.random() * 4);
  return (
    <div className={classes.container}>
      <h1>My name is {names[randNum]}</h1>
    </div>
  );
}

export default App;
