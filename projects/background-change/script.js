const btn = document.getElementById("btn");
const main = document.querySelector("main");
const body = document.querySelector("body");

function randomNum(number) {
  return Math.floor(Math.random() * number) + 1;
}

btn.addEventListener("click", () => {
  const randomColor = `rgb(${randomNum(255)} ${randomNum(255)} ${randomNum(
    255
  )})`;
  console.log(randomColor);
  main.style.backgroundColor = randomColor;
  main.style.display = "flex";
  main.style.height = "100vh";
  main.style.justifyContent = "center";
  main.style.alignItems = "center";
  main.style.flexDirection = "column";
  btn.style.padding = "20px";
  btn.style.backgroundColor = randomColor;
  btn.style.border = "none";
  btn.style.color = "#fff";
  body.style.margin = 0;
  body.style.padding = 0;
  body.style.fontSize = "16px";
  body.style.fontFamily = "cursive";
  btn.style.fontFamily = "inherit";
});
