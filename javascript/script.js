// this is a single line commnet
/*this
is
a
Multiline
comment*/
//console.log(typeof "Vincent");
//console.log(typeof 42);
//console.log(typeof true);
//let myVariable;
//console.log(typeof myVariable);
//myVariable = "Vincent";
//console.log(typeof myVariable);
//myVariable = 42;
//console.log(typeof myVariable);
//let myNumber = 42;
//console.log(myNumber + 10);
//alert("Hello World");

//strings
//const myVariable = "Mathematics";

//strings methods
/* console.log(myVariable.length);
console.log(myVariable.charAt(6));
console.log(myVariable.indexOf("mat"));
console.log(myVariable.lastIndexOf("a"));
console.log(myVariable.slice(5, 8));
console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());
console.log(myVariable.includes("ma"));
console.log(myVariable.split("")); */

//Numbers
//const myNumber = 42;
//console.log(myNumber);

//const myFloat = 42.01;
//const myString = "42";
//console.log(typeof myFloat);
//console.log(+myString + 24);

//math methods and properties
//console.log(2 + 2);
//console.log(Math.PI);
//console.log(Math.trunc(Math.PI));
//console.log(Math.round(3.5));
//console.log(Math.ceil(3.5));
//console.log(Math.floor(3.5));
//console.log(Math.pow(2, 10));
//console.log(Math.min(2, 8, 1, 8, 4, 7));
//console.log(Math.max(2, 8, 1, 8, 4, 7));
//console.log(Math.random());
//console.log(Math.floor(Math.random() * 10) * 1);

//const MyName = "Vincent";
// const randomLetter = Math.random() * MyName.length;
// console.log(MyName.charAt(randomLetter));
//console.log(MyName.charAt(Math.floor(Math.random() * MyName.length)));
// const names = ["VIncent", "Anjiri", "Judith", "Tabitha", "Muhonja", "Azore"];

// const randomNumber = Math.floor(Math.random() * names.length);

// console.log(
//   `${names[randomNumber]} will be buying and paying food bills in this house`
// );

// //conditionals" if statements

// let customerIsBanned = false;
// let soup = "chicken noodle soup";
// let reply;
// let crackers = true;

// if (customerIsBanned) {
//   reply = "Sorry, you are banned from the restaurant";
// } else if (soup && crackers) {
//   reply = `Here's your order of ${soup} & crackers`;
// } else {
//   reply = `Sorry, we're out of ${soup === undefined ? "chakula" : soup}`;
// }

// console.log(reply);
// let testScore = 30;
// let collageStudent = false;
// let grade;
// if (testScore >= 90) {
//   grade = "A";
// } else if (testScore >= 80) {
//   grade = "B";
// } else if (testScore >= 70) {
//   grade = "C";
// } else if (testScore >= 60) {
//   grade = "D";
// } else {
//   if (collageStudent) {
//     grade = "U";
//   } else {
//     grade = "Fail";
//   }
// }

// console.log(grade);
// let playerOne;
// let computer;

// if (playerOne === computer) {
//   console.log("It's a tie");
// } else if (playerOne === "rock") {
//   if (computer === "paper") {
//     console.log("Computer wins");
//   } else {
//     console.log("Player one wins");
//   }
// } else if (playerOne === "paper") {
//   if (computer === "scissors") {
//     console.log("Computer wins");
//   } else {
//     console.log("Player one wins");
//   }
// } else if (playerOne === "rock") {
//   if (computer === "paper") {
//     console.log("Computer wins");
//   } else {
//     console.log("Player one wins");
//   }
// }

//switch statement
// let winner;
// let playerOne = "rock";
// let computer = "paper";
// switch (winner) {
//   case playerOne === computer:
//     winner = "It's a ties";
//     break;
//   case playerOne === "rock":
//     if (computer === "paper") {
//       winner = "Computer wins";
//     } else {
//       winner = "Player one wins";
//     }
//     break;
//   case playerOne === "paper":
//     if (computer === "scissors") {
//       winner = "Computer wins";
//     } else {
//       winner = "Player one wins";
//     }
//     break;
//   case playerOne === "rock":
//     if (computer === "paper") {
//       winner = "Computer wins";
//     } else {
//       winner = "Player one wins";
//     }
//     break;
//   default:
//     winner = "Invalid input";
// }

// console.log(winner);

// let playerOne = "rock";
// let computer = "paper";
// let winner;

// Define the possible outcomes
// const outcomes = {
//   rock: {
//     rock: "It's a tie",
//     paper: "Computer wins",
//     scissors: "Player one wins",
//   },
//   paper: {
//     rock: "Player one wins",
//     paper: "It's a tie",
//     scissors: "Computer wins",
//   },
//   scissors: {
//     rock: "Computer wins",
//     paper: "Player one wins",
//     scissors: "It's a tie",
//   },
// };

// Check if playerOne and computer are valid inputs
// if (!outcomes[playerOne] || !outcomes[playerOne][computer]) {
//   winner = "Invalid input";
// } else {
//   winner = outcomes[playerOne][computer];
// }

// console.log(winner);

// alert("Hello world");

// confirm("Ok === Truc \nCancel === 'False");

// let myBoolean = confirm("Ok === Truc \nCancel === 'False");

// console.log(myBoolean);

// let name = prompt("Please Enter your name.");
// if (name === "") {
//   console.log("You didn't enter your name.");
// } else {
//   console.log("Hello, " + name);
// }
// // console.log(name);

let myNymber = 0;
// while (myNymber <= 50) {
//   console.log(myNymber);
//   myNymber += 3;
// }

// do {
//   console.log(myNymber);
//   myNymber += 12;
// } while (myNymber <= 50);

// const names = ["VIncent", "Anjiri", "Judith", "Tabitha", "Muhonja", "Azore"];

// let randomBuyer = Math.floor(Math.random() * names.length);

// for (let i = 0; i <= randomBuyer; i++) {
//   console.log(`${names[randomBuyer]} will buy us lunch today`);
// }

//functions
// function greetings(name) {
//   console.log(`Hello, ${name}`);
// }

// greetings("Anjiri");

function sum(a, b) {
  return a + b;
}

console.log(sum(2, 7));
