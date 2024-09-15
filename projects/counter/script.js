let count = 0;
const counter = document.getElementById("counter");
const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");

decrement.addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

increment.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
