/** @format */

// Identify if a Number is Even or Odd
let num = 6;

if (num % 2 == 0) {
  console.log("Odd");
} else {
  console.log("Even");
}
console.log("//////////////////////////////////////////////////////");

// Filter Expensive Products from an Array :

let Prices = [150, 30, 60, 35, 32, 78, 97, 78];

Prices.forEach((price) => {
  if (price > 50) {
    console.log(price);
  }
});
console.log("//////////////////////////////////////////////////////");

// Find the Oldest Admin

let user: {
  name: string;
  age: number;
  isAdmin: boolean;
}[] = [
  {
    name: "Omar",
    age: 25,
    isAdmin: true,
  },
  {
    name: "Ahmed",
    age: 35,
    isAdmin: false,
  },
  {
    name: "Samer",
    age: 30,
    isAdmin: true,
  },
  {
    name: "Khalid",
    age: 29,
    isAdmin: false,
  },
  {
    name: "Marah",
    age: 49,
    isAdmin: false,
  },
  {
    name: "Dima",
    age: 29,
    isAdmin: true,
  },
];

let olderAdmenAge = user[0].age;
let userName = " ";

user.forEach((oldesAdmin) => {
  if (oldesAdmin.isAdmin == true && oldesAdmin.age > olderAdmenAge) {
    olderAdmenAge = oldesAdmin.age;
    userName = oldesAdmin.name;
  }
});

console.log(olderAdmenAge, userName);
console.log("//////////////////////////////////////////////////////");

//Sum All Elements in an Array

function SumNumbers(...arr: number[]): number {
  let sum = 0;

  arr.forEach((num) => {
    sum += num;
  });

  return sum;
}

console.log(SumNumbers(3, 4, 6, 7, -3, 0));

console.log("//////////////////////////////////////////////////////");
console.log("posirtive number");
//Check if All Elements in Array are Positive
function CheckPositiveNumbers(...arr: number[]): string {
  let states: string = "All Positive";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      states = "Not All Positive";
      break;
    } else {
      console.log(arr[i]);
    }
  }

  return states;
}

console.log(CheckPositiveNumbers(3, 4, 6, 7, 6, 0));
console.log("//////////////////////////////////////////////////////");

// Find the Longest Name in an Array

function LongestName(...arr: string[]): string {
  let length = 0;
  let longestName = "";
  arr.forEach((name) => {
    if (name.length > length) {
      length = name.length;
      longestName = name;
    }
  });

  return longestName;
}

console.log(LongestName("omar", "ahmed", "khalid", "a"));
console.log("//////////////////////////////////////////////////////");

//Count Occurrences of a Character in a String
function NumberOfCharacter(word: string, character: string): number {
  let number = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === character) {
      number++;
    }
  }

  return number;
}

console.log(NumberOfCharacter("ahmmd", "m"));
console.log("//////////////////////////////////////////////////////");
console.log("");
console.log("Day 3 Task");
console.log("");
console.log("//////////////////////////////////////////////////////");

//You are given an object that follows an interface Person with properties name and age. Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."
interface Person {
  name: string;
  age: number;
}

const personOne: Person = {
  name: "Omar",
  age: 24,
};

if (personOne.age > 18) {
  console.log(personOne.name + "is an Adult");
} else {
  console.log(personOne.name + "is an Minor");
}

//You are given an object that follows an interface Teacher with properties name and subjects (an array of subjects). Print all the subjects the teacher teaches.
console.log("");
console.log("//////////////////////////////////////////////////////");

interface Teacher {
  name: string;
  subjects: string[];
}

const teacherOne: Teacher = {
  name: "Omar",
  subjects: ["Programming", "Math"],
};

console.log(teacherOne.subjects);

console.log("");
console.log("//////////////////////////////////////////////////////");

//You are given an array of Product interfaces, where each product has a name, price, and quantity. Write a script to increase the price of each product by 10% if the quantity is greater than 5.

interface Product {
  name: string;
  price: number;
  quantity: number;
}

var productList: Product[] = [
  { name: "Apple", price: 10, quantity: 3 },
  { name: "Orange", price: 100, quantity: 7 },
  { name: "Banana", price: 10, quantity: 3 },
];

productList.forEach((product) => {
  if (product.quantity > 5) {
    product.price = product.price * 0.9;
  }

  console.log(product);
});

console.log("");
console.log("//////////////////////////////////////////////////////");

interface Device {
  start?(): void;
}

let D: Device = {
  start() {
    console.log("Device has start");
  },
};

let D2: Device = {};

if (D.start) {
  console.log("Device a has start function");
} else {
  console.log("Device doesn't have start function");
}

let check2 = D2.start
  ? console.log("Device has a start function")
  : console.log("Device doesn't a have start function");
