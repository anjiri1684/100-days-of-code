import classes from "./content.module.css";
const Content = () => {
  const handleNameChange = () => {
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
      "Olive",
    ];
    const randomPos = Math.floor(Math.random() * names.length);
    return names[randomPos];
  };
  return (
    <div className={classes.content}>
      <main>
        <p>Hello {handleNameChange()}</p>
      </main>
    </div>
  );
};

export default Content;
