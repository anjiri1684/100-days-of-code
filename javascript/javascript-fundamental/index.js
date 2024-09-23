const name = "Vincent";
let age = 24;
const hasHobbies = true;

age = new Date().getFullYear() - 2000;

function summarizedUser(username, userage, userHasHobboy) {
  return `Name: ${username}, Age: ${userage}, Has Hobbies: ${userHasHobboy}`;
}

console.log(summarizedUser(name, age, hasHobbies));
