console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
console.log("****** Question 2 ********")

function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log('Test - should say "Hello (name)!"', helloName("Forrest"));
let fullName = "Forrest Nelson"
console.log('Test - should say "Hello (name)!"', helloName(fullName));


// 3. Function to add two numbers together & return the result
console.log("****** Question 3 ********")

function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

console.log(addNumbers(3, 4)); //should log 7
console.log('The sum of 12 and 5 are:', addNumbers(12, 5)) //should log 17


// 4. Function to multiply three numbers & return the result
console.log("****** Question 4 ********")

function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3;
}

console.log(multiplyThree(3, 4, 5)); //should log 60
console.log('Multiplying 3, 2, and 6 together:', multiplyThree(3, 2, 6)); //should log 36


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
console.log("****** Question 5 ********")

function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
console.log("****** Question 6 ********")

function getLast(array) {
  if (array == []) {
    return undefined;
  }
  else {
    return array[array.length - 1];
  }
}

let myArray = [];
console.log("Returning last item of array:", getLast(myArray)); //should log undefinied
myArray = ['snap', 'crackle', 'pop'];
console.log("Returning last item of array:", getLast(myArray)); //should log 'pop'

//but it doesn't seem to need a conditional since an empty array would be undefined either way:

myOtherArray = [];

function getLastAgain(array) {
  return array[array.length - 1];
}
console.log("other way without conditional:");
console.log("Returning last item of array:", getLastAgain(myOtherArray)); //should log undefined
console.log("Returning last item of array:", getLastAgain(myArray)); //should log pop

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

console.log("****** Question 7 ********")

function find(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return true;
    }
  }
  return false;
}

const testArrayOne = ['cat', 'dog', 'parrot'];
const testArrayTwo = [10, 45, 300];
const testArrayThree = [];
console.log("Is the value in the array?", find('cat', testArrayOne)); //should be true
console.log("Is the value in the array?", find('zebra', testArrayOne)); //should be false
console.log("Is the value in the array?", find(45, testArrayTwo)); //should be true
console.log("Is the value in the array?", find('cat', testArrayThree)); //should be false

//took me a while but I realized I needed return false; to be OUTSIDE of the loop since it would otherwise just look at the first value only, and the function(empty loop) would return as undefined.

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
console.log("****** Question 8 ********")

function isFirstLetter(letter, string) {
  if (string[0] == letter) {
    return true;
  } else {
    return false;
  }
}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('p', 'apple'));

// 9. Function to return the sum of all numbers in an array
console.log("****** Question 9 ********")

function sumAll(arr) {
  let sum = 0;
  // TODO: loop to add items
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  // TODO: return the sum
  return sum;
}

const sumArrayOne = [1, 2, 3, 4, 5]; //should equal 15
const sumArrayTwo = [1, 10, 100, 1000, 10000, 100000]; //should equal 111111

console.log("The sum of all numbers in array 1:", sumAll(sumArrayOne));
console.log("The sum of all numbers in array 2:", sumAll(sumArrayTwo));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
console.log("****** Question 10 ********")

function allPositive(arr) {
  let positiveArray = [];
  for (let value of arr) {
    if (value > 0) {
      positiveArray.push(value); //here if the value of an array passed through this function is positive it will push onto the positiveArray array, and if it's <= 0 it will not be added
    }
  }
  return positiveArray;
}

positiveTestArrayOne = [-500, 34, -98, 5, -39, 47, 0];
positiveTestArrayTwo = [3, 4, 5, 6];
positiveTestArrayThree = [-4, -3, -9];

console.log("The positive values of array 1:", allPositive(positiveTestArrayOne)); //should be [34, 5, 47]
console.log("The positive values of array 2:", allPositive(positiveTestArrayTwo)); //should be the same since they're all positive
console.log("The positive values of array 3:", allPositive(positiveTestArrayThree)); //should be []


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
console.log("****** Question 11 ********")

//This was a new one for me! I've never heard of split, substring, or join, but I learned a bit based on doing some research. I tried the first one that came up on CodeWars and used an article on freeCodeCamp and MDN to understand how they all work.  https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
//Note: My answer seems to work just fine when I test it here, but it didn't work as a solution on CodeWars.. I'm not sure what the issue was but I think it's referring to my usage of .split ?

//Problem: Capitalize the first letter of each word in a multi-word string (like Jaden Smith, son of Will Smith, apparently did with his tweets)

//Description: Starting with a string of words, we will first need to figure out how we can isolate each word of that string. I know how to capitalize using toUpperCase, and how to choose a specific letter in a string (string[0] being the first).
// 1 - we create a function called jadenCase with an argument str
// 2 - we use the string method .split to break out each word of the string str into an array of one-word strings (which I assigned to the variable words)
// 3 - using a loop, we can go through each word in the array and figure out how to capitalize the first letter of each those one-word strings.  Note: The loop uses i as the index (starting at 0) to identify which word of the words array we're referring to in a given loop, and goes through index 0 through the last word (words.length - 1) of the array by incrementing by 1 index every loop.
// 4 - we want to update each word by saying words[i] = the first letter of words[i] but upper-cased + the rest of words[i] (substring(1) means to return a part of the string from the start index of 1 to the end of the string)
// 5 - now that we have every word capitalized as an array, we want to bring them back together into one long string - we do that using the array method .join which creates a new string by concatenating all the elements in an array.  then we return that resulting string at the end of the function.
// 6 - quick summary using the example string
// a) the string "How can mirrors be real if our eyes aren't real" goes into the jadenCase function, is split into an array ["How", "can", "mirrors",..., "real"]
// b) then the first letter of each string is capitalized be redefining each word (words[0] = H + ow, words[1] = C + an, words[2] = M + irrors,...) to result in ["How", "Can", "Mirrors",..., "Real"]
// c) then we join the array to create one long string "How Can Mirrors...Real" and return that resulting string at the end of the function
// d) so when a string is passed through the function jadenCase( ), like jadenCase( string ), it will go through each of these steps in the function and return the resulting updated string.

jadenString = "How can mirrors be real if our eyes aren't real"

console.log("Jaden tweet (traditional):", jadenString)

function jadenCase(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    //console.log(words[i]);
  }
  //console.log(words);
  return words.join(" "); //the space here adds a space between each element of the array when joined
};

console.log("Jaden tweet (Jaden-Case):", jadenCase(jadenString));


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}