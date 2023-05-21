// <======== chp 21  (Changing Case) =========>

// ===== Task 1 ===== //

/* Type the characters that are missing from this code. var allLower = userInput.toLowerCase; 
Note: Correct this statement by yourself.*/

var userInput = "HELLO WORLD";
var allLower = userInput.toLowerCase();
console.log(allLower);

// ===== Task 2 ===== //

/* Convert the string represented by x to lower-case and assign the result to the same variable. */

var x = "KARACHI";
x = x.toLowerCase();
console.log(x);

// ===== Task 3 ===== //

/* Convert the string represented by y to upper-case and assign the result to the same variable */

var y = "pakistan";
y = y.toUpperCase();
console.log(y);

// ===== Task 4 ===== //

/* Convert the string represented by a variable to lower-case and assign the result to a second variable that hasn't been declared beforehand. */

var x = "KARACHI";
var y = x.toLowerCase();
console.log(y);

// ===== Task 5 ===== //

/* Convert the string represented by an array element to lower-case and assign it to a variable that hasn't been declared beforehand. */

var arr = ["ISLAMABAD"];
var arrLower = arr[0].toLowerCase();
console.log(arrLower);

// ===== Task 6 ===== //

/* Display in an alert the upper-case version of the string represented by a variable. */

var x = "australia";
x = x.toUpperCase();
// alert(x);

// ===== Task 7 ===== //

/* var cityName = “kaRacHi”;
Convert the string represented by a cityName in Capitalisation is the writing of a word with its first letter in uppercase and the remaining letters in lowercase. */

var cityName = "kaRacHi";
var firstLetter = cityName.slice(0, 1).toUpperCase();
var otherwords = cityName.slice(1).toLowerCase();
console.log(firstLetter + otherwords);

// <======== chp 22-25 (Strings) =========>

// ===== Task 1 ===== //

/* "captain" has been assigned to variable “sameWords”. You want to slice "ap" out of it. */

var sameWords = "captain";
var letters = sameWords.slice(1, 3);
console.log(letters);

// ===== Task 2 ===== //

/*  */

// ===== Task 3 ===== //

/* The string "elephant" has been assigned to the variable animal. Slice the four middle characters out of the string and assign it to the variable seg, which hasn't been declared beforehand. */

var animal = "elephant";
var seg = animal.slice(2, 6);
console.log(seg);

// ===== Task 4 ===== //

/* Find the number of characters in the string represented by a variable and assign the number to a second variable. */

var a = "Shahzaib";
var b = a.length;
console.log(b);

// ===== Task 5 ===== //

/* In a first statement measure how many characters there are in a string represented by a variable. In a second statement slice all but the first character and last 3 characters of the string and assign it to a second variable that hasn't been declared beforehand. */

var name = "Arsalan";
var chars = name.length;
var nameFirtLetter = name.slice(0, 1);
var nameLastLetter = name.slice(4, 7);
var result = nameFirtLetter + nameLastLetter;
console.log("Lenght of the name " + chars);
console.log(result);

// ===== Task 6 ===== //

/* var text = "To be or not to be.";
var indx = text.indexOf("be");
What is the value of indx? */

var text = "To be or not to be.";
var indx = text.indexOf("be");
console.log(indx); // index is 3

// ===== Task 7 ===== //

/* var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
What is the value of indx?
 */

var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
console.log(indx); // index is 16

// ===== Task 8 ===== //

/* Find the index of the first character of the last instance of "go" in the string represented by the variable text and assign the number to the variable indx, which hasn't been declared beforehand. */

var text =
  "I have to go to the class today and after that I will go to eat the dinner with my friends";
var indx = text.lastIndexOf("go");
console.log(indx); // index is 54;

// ===== Task 9 ===== //

/* Code the first line of an if statement that tests whether a segment with an index represented by indexNum exists in a string. */

var arr = ["Apple", "Orange", "Banana"];
var check = arr.indexOf("Apple");
if (check > -1) {
  console.log("Found");
} else {
  console.log("Not Found");
}

// ===== Task 10 ===== //

/* In this string "abcde", what character is at index 2? (Use charAt) */

var word = "abcde";
var check = word.charAt(2);
console.log(check);

// ===== Task 11 ===== //

/* Find the 10th character in the string represented by text and assign it to the variable cha, which hasn't been declared beforehand. */

var text = "Hello World";
var check = text.charAt(10);
console.log(check);

// ===== Task 12 ===== //

/* Find the last character in the string represented by str and assign it to x, which hasn't been declared beforehand. */

var str = "Hellow World";
var x = str.charAt(str.length - 1);
console.log(x);

// ===== Task 13 ===== //

/* Find the the 5th character in a string represented by input and assign it to cha, which hasn't been declared beforehand. */

var str = "Hellow World";
var cha = str.charAt(5);
console.log(cha);

// ===== Task 14 ===== //

/* Code the first line of an if statement that tests whether the 3rd character of a string represented by a variable is a particular character */

var text = "Shahzaib";
var check = text.charAt(2);
if (check == "a") {
  console.log("Character Found");
} else {
  console.log("Character Not Found");
}

// ===== Task 15 ===== //

/* Code a for loop that cycles through all the characters of a string represented by a variable and assigns each character to an element of an array that has been declared beforehand. */

var name = "Shahzaib";
var arr = [];
for (var i = 0; i < name.length; i++) {
  arr[i] = name[i];
  console.log(arr);
}

// ===== Task 16 ===== //

/* In the string represented by reply replace the first instance of "no" with "yes" and assign the revised string to revisedReply, which hasn't been declared beforehand. */

var para = "Do you want to go to the washroom, Yes";
var x = para.replace("Yes", "no");
console.log(x);

// ===== Task 17 ===== //

/* If you want all instances replaced, enter 3 characters that need to appear in this statement. 
var y = x.replace("a", "z"); */

var y = x.replace(/a/g, "z");

// <======== chp 26 (Rounding Numbers) =========>

// ===== Task 1 ===== //

/* Form a statement that rounds a number to the nearest integer. */

var a = 0.6;
a = Math.round(a);
console.log(a);

// ===== Task 2 ===== //

/* Round up a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand. */

var origNum = 0.3;
var roundNum = Math.ceil(origNum);
console.log(roundNum);

// ===== Task 3 ===== //

/* Round down a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand. */

var origNum = 0.8;
var roundNum = Math.floor(origNum);
console.log(roundNum);

// ===== Task 4 ===== //

/* Round a number represented by a variable and assign the result to a second variable that hasn't been declared beforehand. */

var origNum = 0.8;
origNum = Math.round(origNum);
var roundNum = origNum;
console.log(roundNum);

// ===== Task 5 ===== //

/* Round .5 to 0 and assign it to a variable that hasn't been declared beforehand. */

var origNum = 0.5;
origNum = Math.floor(origNum);
var roundNum = origNum;
console.log(roundNum);

// <======== chp 27 (Random Numbers) =========>

// ===== Task 1 ===== //

/* Convert a random number generated by JavaScript to a number in the range 1 to 50 */

var a = Math.random() * 50;
console.log(a);

// ===== Task 2 ===== //

/* Generate a random number and assign it to a variable that hasn't been declared beforehand. */

var a = Math.random();
var b = a;
console.log(b);

// ===== Task 3 ===== //

/* You have to create a dice in JavaScript with the use of pseudo-random number. */

var dice = Math.random() * 6 + 1;
var dice = dice.toFixed(0);
console.log(dice);

// ===== Task 4 ===== //

/* You have to create a toss (head/tail) in JavaScript with the use of pseudo-random number. */

var toss = Math.random() * 1;
toss = toss.toFixed(0);
if (toss == 1) {
  console.log("Heads");
} else {
  console.log("Tails");
}

// <======== chp 28, 29 (Converting Strings) =========>

// ===== Task 1 ===== //

/* How do you convert a string to an integer in JavaScript? */

var str = "10";
var num = parseInt(str);
console.log(str);
console.log(num);

// ===== Task 2 ===== //

/* Write a JavaScript function to convert the string "123" to an integer. */

function int(str) {
  var num = parseInt(str);
  console.log(num);
}

int("30");

// ===== Task 3 ===== //

/* How can you convert a string containing a decimal number to a floating-point number in JavaScript? */

var str = "10.50";
var Num = parseFloat(str);
console.log(Num);

// ===== Task 4 ===== //

/* How can you check if a string can be successfully converted to an integer or decimal in JavaScript before performing the conversion? */

var str = "10";
var intNum = parseInt(str);
var floatNum = parseFloat(str);
if (!isNaN(intNum)) {
  console.log("It is an Integar");
} else if (!isNaN(floatNum)) {
  console.log("It is a decimal Number");
} else {
  console.log("It is a string");
}

// ===== Task 5 ===== //

/* How can you convert a number to a string in JavaScript? */

var num = 10;
var str = num.toString(); // To covert a number to a string we use toString();
console.log(str);

// ===== Task 6 ===== //

/* Write a JavaScript function to convert the number 42 to a string. */

function no(num) {
  var str = num.toString();
  console.log("This is a string " + str);
}

no(10);

// ===== Task 7 ===== //

/* Can you convert a string representing a decimal number (e.g., "3.14") to an integer in JavaScript? If so, how? */

var str = "3.14";
var intNum = parseInt(str); // To conver a string representing a decimal number we use parseFloat to the convert it to an integar
console.log(intNum);

// <======== chp 30 (Controlling the length of decimals) =========>

// ===== Task 1 ===== //

/* Code a statement that rounds a number represented by num to 4 places, converts it to a string, and assigns it to newNum, which hasn't been declared beforehand. */

var num = 10.5234231;
var newNum = num.toFixed(4);
console.log(newNum);

// ===== Task 2 ===== //

/* In a single statement round a number represented by a variable to 2 places, convert it to a string, convert it back to a number, and assign it to the same variable. */

var num = 10.5123243;
var newNum = num.toFixed(2);
newNum = Number(newNum);
console.log(newNum);

// ===== Task 3 ===== //

/* Code the first line of an if statement that tests whether the number represented by num, rounded to 2 digits and converted to a string, has more than 4 characters in it. */

var num = 10.512345;
var newNum = num.toFixed(2);
if (newNum.length > 4) {
  console.log("It has more than 4 characters");
} else {
  console.log("It doesn't have more than 4 characters");
}

// ===== Task 4 ===== //

/* Assign a number with many decimal places to a variable. Code an alert that displays the number rounded to 2 decimal places and converted to a string. */

var num = 10.512345;
var newNum = num.toFixed(2);
// alert(newNum);

// ===== Task 5 ===== //

// <======== chp 31 - 34 (Date & Time) =========>

// ===== Task 1 ===== //

/* Code a statement that creates a new Date object and assigns it to dObj, which hasn't been declared beforehand. */

var dObj = new Date();
console.log(dObj);

// ===== Task 2 ===== //

/* Code a statement that creates a new Date object, converts it to a string, and assigns the string to dStr, which hasn't been declared beforehand. */

var dObj = new Date();
var dStr = dObj.toString();
console.log(dStr);

// ===== Task 3 ===== //

/* Code a statement that extracts the day of the week from a Date object represented by d and assigns it to day, which hasn't been declared beforehand. */

var dObj = new Date();
var d = dObj.getDay();
console.log(d); // By the getDay function we get the index number of the days and it starts with 0(Sunday) to 6(Saturday).

// ===== Task 4 ===== //

/* The day has been extracted from the Date object and assigned to d. The names of the days of the week have been assigned to the array dayNames. Alert the current day with array index. */

var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
var dObj = new Date();
var d = dObj.getDay();
var today = days[d];
console.log(today);

// ===== Task 5 ===== //

/* Extract all parts of the Date and Time and assign it to the variable which has not been declared beforehand. */

var date = new Date();

var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDay();
var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var miliSeconds = date.getMilliseconds();

console.log(
  year +
    " " +
    month +
    " " +
    day +
    " " +
    hour +
    " " +
    minutes +
    " " +
    seconds +
    " " +
    miliSeconds
);

// ===== Task 6 ===== //

/* Code a statement that creates a Date object for the last day of the last month of 2020 and assigns it to later, which hasn't been declared beforehand. */

var later = new Date(2020, 11, 31);
console.log(later);

// ===== Task 7 ===== //

/* Create a Date object for the second day of the second month of 1992 and assign it to a variable that hasn't been declared beforehand. */

var later = new Date(1992, 01, 02);
console.log(later);

// ===== Task 8 ===== //

/* Code a single statement that displays in an alert the milliseconds that elapsed between the reference date and the beginning of 1980. */

var date = new Date();
var beforeDate = new Date(1980, 0, 01);
var elapsedMiliseconds = date.getTime() - beforeDate.getTime();
console.log(elapsedMiliseconds);

// ===== Task 9 ===== //

/* How do you change the year of a date in JavaScript? */

var date = new Date();
var year = date.setFullYear(2001); // We can change the year of a date in JavaScript using the .setFullYear() function.
console.log(date);

// ===== Task 10 ===== //

/* Write a JavaScript function to change the month of a given date to January. */

function changeMonth(month) {
  var date = new Date();
  month = parseInt(month);
  month = date.setMonth(month);
  console.log(date);
}

changeMonth(0);

// ===== Task 11 ===== //

/* What is the method to change the day of the week for a specific date in JavaScript? */

var date = new Date();
var d = date.setDate(06); // We can change the day of the week for a specific date in JavaScript using the .setDate() function.
console.log(date);

// ===== Task 12 ===== //

/* Write a JavaScript function to change the minutes of a given time to a specific value. (Value by prompt) */

// function time() {
//   var date = new Date();
//   var minutes = prompt("Enter the specific minutes value:");
//   minutes = parseInt(minutes);
//   date.setMinutes(minutes);
//   console.log("Desired Time", date);
// }

// time();

// ===== Task 13 ===== //

/* Write a JavaScript function to add a specific number of hours to a given time. */

function addHours(hours) {
  var time = new Date(); // Create a new Date object from the given time
  time.setHours(time.getHours() + hours);
  console.log(time);
}

addHours(10);

// ===== Task 14 ===== //

/* You have to create a age calculator in JavaScript. */

var dob = new Date("10-06-2001");

dob = dob.getTime();

var current = new Date();

current = current.getTime();

var b = current - dob;

var c = b / (1000 * 60 * 60 * 24 * 365);

console.log(c.toFixed(0));

// <======== chp 35 - 37 (Functions) =========>

// ===== Task 1 ===== //

/* Code the first line of a function displayAlert. */

// function hello(){
//   alert("Hello This is a function runing");
// }

// hello();

// ===== Task 2 ===== //

/* Code a function named askName that prompts the user to "Enter name" and assigns the answer to userName, which hasn't been declared beforehand. */

// function askName(name){
//   var userName = name;
//   console.log(userName);
// }

// askName(prompt("Enter your name"));

// ===== Task 3 ===== //

/* Code a function that calls 2 other functions. */

function foo1() {
  foo2();
}

function foo2() {
  foo3();
}

function foo3() {
  console.log("All functions worked");
}

foo1();

// ===== Task 4 ===== //

/* Code a function that displays a prompt, "Enter name" and then displays the name in an alert. Call the function. */

// function askName(){
//   var name = prompt("Enter name");
//   console.log(name);
// }

// askName();

// ===== Task 5 ===== //

/* Code the first line of a function named concat that has 3 parameters, the first three letters of the alphabet. Call that takes a variable, a string, and a number as arguments. */

function concat(a, b, c) {
  console.log("It is a variable " + a);

  b = b.toString();
  console.log("It is a string " + b);

  c = parseInt(c);
  console.log("It is a number " + c);
}

concat("foo", "hello", 22);

// ===== Task 6 ===== //

/* Code a function that has 2 parameters. Concatenate them and assign the result to a variable that hasn't been declared beforehand. */

function add(name, age) {
  var result = "My name is " + name + " and my age is " + age;
  console.log(result);
}

add("Shahzaib", 21);

// ===== Task 7 ===== //

/* Code a function that has three parameters. Multiply them and assign them to a variable that hasn't been declared yet. */

function multiple(x, y, z) {
  var multiple = x * y * z;
  console.log(multiple);
}

multiple(2, 2, 2);

// ===== Task 8 ===== //

/* Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers. */

function calculate(numbers) {
  var sum = 0;
  var count = numbers.length;

  for (var i = 0; i < count; i++) {
    sum += numbers[i];
  }

  var average = sum / count;

  return average;
}

var numbers = [6, 3, 9, 1, 10, 12];
var average = calculate(numbers);

console.log("Average:", average);

// ===== Task 9 ===== //

/* Write a JavaScript function that takes two parameters and returns their sum. */

function addition(a, b) {
  var sum = a + b;
  return sum;
}

var result = addition(2, 3);
console.log("Sum of 2 and 3 is " + result);

// ===== Task 10 ===== //

/* Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers. */

function calculate(numbers) {
  var sum = 0;
  var count = numbers.length;

  for (var i = 0; i < count; i++) {
    sum += numbers[i];
  }

  var average = sum / count;

  return average;
}

var numbers = [6, 3, 9, 1, 10, 12];
var average = calculate(numbers);

console.log("Average:", average);

// ===== Task 11 ===== //

/* You have to capture the returned value from a function and store it in a variable? */

function value(a) {
  var value = a;
  return value;
}

var output = value("This is a Returned Value");
console.log(output);

// ===== Task 12 ===== //

/* Write a function which tells letter counts of (word). */

function toCount(letters) {
  var count = letters.length;
  console.log(count);
}

toCount("Shahzaib Khan");

// ===== Task 13 ===== //

/* Write a function to set (year) in date object. */

function setYear(year) {
  var date = new Date();
  date.setFullYear(year);
  console.log(date);
}

setYear(2001);

// ===== Task 14 ===== //

/* Write a function which tells the age of a person who Born on (dateOfBirth) */

function dateOfBirth(dateOfBirth) {
  dateOfBirth = dateOfBirth.getTime();

  var current = new Date();

  current = current.getTime();

  var b = current - dateOfBirth;

  var c = b / (1000 * 60 * 60 * 24 * 365);

  console.log(c.toFixed(0));
}

dateOfBirth(new Date("10-06-2001"));

// ===== Task 15 ===== //

/* Write a function which tells the presense of (word) in an array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima'] result should be in true or false */

function checkArray(word) {
  var arr = [
    "zaid",
    "haris",
    "raza",
    "abubakar",
    "hassan",
    "hussain",
    "fatima",
  ];
  var i = arr.indexOf(word);
  if (i > -1) {
    console.log(true);
  } else {
    console.log(false);
  }
}

checkArray("haris");

// ===== Task 16 ===== //

/* Write a function which repeat (letter) 10 times.
Hint: "abcde" str.repeat(10) */

function abc(word) {
  word = word.repeat(10);
  console.log(word);
}

abc(" Shahzaib ");

// ===== Task 17 ===== //

/* write a function which reverse array = ['a','b','c','d','e']
Hint: arr.reverse() */

function revert(arr) {
  var list = arr.reverse();
  console.log(list);
}

revert(["a", "b", "c", "d", "e"]);

// <======== chp 38 (Local vs. Global Variables) =========>

// ===== Task 1 ===== //

/* Write a JavaScript function that demonstrates the usage of a local variable. */

function local(variable) {
  var localvariable = variable; // This is a local variable which is kept inside the scope of a function and can't be used outside the scope.
  console.log("My name is " + variable);
}

local("Shahzaib Khan");

// ===== Task 2 ===== //

/* How can you access a global variable inside a function in JavaScript? */

var a = "This is a globle variable that can be accessed from anywhere";

function global() {
  console.log(a);
}

global();

// <======== chp 39, 40 (Switch Statements) =========>

// ===== Task 1 ===== //

/* Write a JavaScript switch statement that checks the value of a variable and performs different actions based on different cases. */

var day = "Saturday";

switch (day) {
  case "Friday":
    console.log("Finally");
    break;
  case "Saturday":
    console.log("Hurrah!");
    break;
  case "Sunday":
    console.log("Last day of holiday :(");
    break;
  default:
    console.log("Want holiday");
    break;
}

// ===== Task 2 ===== //

/* Write a JavaScript switch statement that check whether cityName given by user check the cityName if match alert the user and break the statement, if not default message will be shown to user. */

var cityName = prompt("Enter a city name:");

switch (cityName) {
  case "Karachi":
    alert("Karachi found!");
    break;
  case "Islamabad":
    alert("Islamabad found!");
    break;
  case "Lahore":
    alert("Lahore found!");
    break;
  case "Multan":
    alert("Multan found!");
    break;
  default:
    alert("City not found");
    break;
}

// <======== THE END =========>