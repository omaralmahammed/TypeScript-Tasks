"use strict";
/** @format */
// Identify if a Number is Even or Odd
let num = 6;
if (num % 2 == 0) {
    console.log("Odd");
}
else {
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
let user = [
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
function SumNumbers(...arr) {
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
function CheckPositiveNumbers(...arr) {
    let states = "All Positive";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            states = "Not All Positive";
            break;
        }
        else {
            console.log(arr[i]);
        }
    }
    return states;
}
console.log(CheckPositiveNumbers(3, 4, 6, 7, 6, 0));
console.log("//////////////////////////////////////////////////////");
// Find the Longest Name in an Array
function LongestName(...arr) {
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
function NumberOfCharacter(word, character) {
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
const personOne = {
    name: "Omar",
    age: 24,
};
if (personOne.age > 18) {
    console.log(personOne.name + "is an Adult");
}
else {
    console.log(personOne.name + "is an Minor");
}
//You are given an object that follows an interface Teacher with properties name and subjects (an array of subjects). Print all the subjects the teacher teaches.
console.log("");
console.log("//////////////////////////////////////////////////////");
const teacherOne = {
    name: "Omar",
    subjects: ["Programming", "Math"],
};
console.log(teacherOne.subjects);
console.log("");
console.log("//////////////////////////////////////////////////////");
var productList = [
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
//# sourceMappingURL=index.js.map