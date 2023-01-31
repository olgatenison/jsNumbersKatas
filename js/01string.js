/* 5 Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty. 

function capitalizeWord(word) {
  word[0].toUpperCase();
  return word;
}
*/
function capitalizeWord(word) {
  word = word[0].toUpperCase() + word.substring(1);
  return word;
}
/* 6 We need a function that can transform a number (integer) into a string.
What ways of achieving this do you know?
Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"

function numberToString(num) {
  // Return a string of the number here!
}
*/

function numberToString(num) {
  return num.toString();
}

/* 7
DESCRIPTION:
Note: This kata is inspired by Convert a Number to a String!. Try that one too.
Description
We need a function that can transform a string into a number. What ways of achieving this do you know?
Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7

const stringToNumber = function(str){
  // put your code here
  return null;
}
 */

const stringToNumber = function (str) {
  return Number(str);
  // return parseInt(str);
};

function toBinary(n) {
  return Number(n.toString(2));
}

//Return the type of the sum of the two arguments

function typeOfSum(a, b) {
  let sum = a + b;
  let result = typeof sum;
  return result;
}
/*After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d). */
function rentalCarCost(d) {
  let result;
  let costPerDay = 40;
  if (d >= 7) {
    result = d * costPerDay - 50;
  } else if (d >= 3 && d <= 7) {
    result = d * costPerDay - 20;
  } else {
    result = d * costPerDay;
  }
  return result;
}

/*You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
For example, when the input is green, output should be yellow.*/

function updateLight(current) {
  switch (current) {
    case "green":
      return "yellow";
      break;
    case "yellow":
      return "red";
      break;
    default:
      return "green";
  }
}

/*DESCRIPTION:
When provided with a number between 0-9, return it in words.
Input :: 1
Output :: "One".
If your language supports it, try using a switch statement.*/

function switchItUp(number) {
  switch (number) {
    case 0:
      return "Zero";
      break;
    case 1:
      return "One";
      break;
    case 2:
      return "Two";
      break;
    case 3:
      return "Three";
      break;
    case 4:
      return "Four";
      break;
    case 5:
      return "Five";
      break;
    case 6:
      return "Six";
      break;
    case 7:
      return "Seven";
      break;
    case 8:
      return "Eight";
      break;
    case 9:
      return "Nine";
      break;
    default:
      return "Not a valid number";
      break;
  }
}

/*Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
Examples:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false*/

function solution(str, ending) {
  return str.endsWith(ending);
}

/*It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.*/

function removeChar(str) {
  return str.slice(1, -1);
}

//const removeChar = str => str.slice(1,-1)
//return str.substring(1, str.length-1);

/*Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"*/

function repeatStr(n, s) {
  return s.repeat(n);
}
