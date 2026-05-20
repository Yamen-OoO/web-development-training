// data types
// variables
// Concatenation
// conditions
// switch statment
// loops
// functions , spread operator



// تشغيل js
// تنزيل npm , node
// npm --version
// node --version


// Nodemon is a command-line tool that helps develop Node.js applications by automatically 
// restarting the Node application when file changes in the directory are detected.

// npm install -g nodemon
// nodemon index.js




// البدء:

// ********************DATA TYPES***************************
// js is lossly typle programming language , we dont need to specifiy the type of the variables

// let value = "Hello";

// console.log(typeof value); // "string"
// console.log(typeof 42); // "number"
// console.log(typeof true); // "boolean"
// console.log(typeof undefined); // "undefined"
// console.log(typeof null); // "object" (be careful!)
// console.log(typeof {a: 1}); // "object"
// console.log(typeof [1, 2, 3]); // "object"






//*******************************VARIABLES*********************************

// 1. let - Modern, Block-Scoped Variable
// javascript

// let name = "Alice";  // Declare and assign
// let age;            // Declare without value (undefined)
// age = 25;           // Assign value later

// console.log(name);  // "Alice"
// console.log(age);   // 25

// // Can be reassigned
// name = "Bob";
// console.log(name);  // "Bob"

// // Block scope example
// {
//   let message = "Hello";  // Only exists inside { }
//   console.log(message);   // "Hello"
// }
// // console.log(message);   // ERROR! message doesn't exist here




// ======================================================================================================
// 2. const - Constant (Cannot be Changed)
// javascript
// const PI = 3.14159;  // Must assign immediately
// const APP_NAME = "MyApp";

// console.log(PI);     // 3.14159

// // PI = 3.14;        // ERROR! Cannot reassign

// // const objects can have properties changed
// const person = {
//   name: "John",
//   age: 30
// };
// person.age = 31;     // OK! The object can be modified
// // person = {};      // ERROR! Cannot reassign variable



// ==========================================================================================================
// 3. var - Old Way (Avoid in Modern Code)

// javascript
// var score = 100;     // Function-scoped, not block-scoped
// score = 200;         // Can be reassigned

// you can redelcare
// var a = 1
// var a =2

// you can log var before delcare (hositing)
// console.log(x) // undfiened || let , const cant access before declration
// var x = 5

// // Avoid var - use let/const instead



// =============================================================================================================
// Variable Naming Rules
// javascript
// // ✅ GOOD names
// let userName = "John";
// let user_age = 25;
// let $price = 99.99;
// let _private = "secret";
// let firstName = "Jane";

// ❌ BAD names
// let 123name = "test";      // Cannot start with number
// let user-name = "test";    // No hyphens
// let let = "reserved";      // Cannot use keywords

// CASE SENSITIVE!
// let name = "Alice";
// let Name = "Bob";     // Different variable!
// let NAME = "Charlie"; // Another different variable!



// =============================================================================================================
// Declaring Multiple Variables
// javascript
// // One line, multiple variables
// let a = 1, b = 2, c = 3;
// ================================================================================================

// Common Mistakes to Avoid
// javascript
// 1. Forgetting to declare
// total = price * quantity;  // ERROR if not declared (in strict mode)

// 2. Using undeclared variable
// console.log(unknownVar);   // ERROR

// 3. Reassigning const
// const MAX_SIZE = 100;
// MAX_SIZE = 200;            // ERROR

// 4. Variable hoisting confusion
// console.log(test);           // undefined (not an error with var)
// var test = "value";

// console.log(test2);          // ERROR (with let/const)
// let test2 = "value";

// ---=================================================================================================
// Best Practices
// javascript
// // 1. Use const by default
// const API_KEY = "abc123";       // Things that won't change
// const DEFAULT_COLOR = "#000";

// // 2. Use let only when you need to reassign
// let counter = 0;                // This will change
// let isProcessing = false;       // This might change

// // 3. Use meaningful names
// // BAD:
// let x = 10;
// let y = 20;

// GOOD:
// let width = 10;
// let height = 20;

// // 4. Initialize variables when declaring
// let username = "";      // Better than declaring then assigning
// let items = [];
// ========================================================================================================




//*******************************Concatenation*********************************

// What is Concatenation?
// Concatenation means joining strings together. Think of it like connecting train cars to make a longer train!

// 2 Ways to Concatenate Strings


// 1. Using the + Operator (Most Common)
// javascript

// let firstName = "John";
// let lastName = "Doe";

// // Basic concatenation
// let fullName = firstName + " " + lastName;
// console.log(fullName); // "John Doe"

// // Multiple concatenations
// let greeting = "Hello, " + firstName + " " + lastName + "!";
// console.log(greeting); // "Hello, John Doe!"



// 2. Template Literals (Modern & Best!)
// Use backticks ` and ${} for variables:

// javascript
// let product = "Apple";
// let price = 1.25;
// let quantity = 3;

// // Much cleaner than using +
// let receipt = `You bought ${quantity} ${product}s for $${price * quantity}`;
// console.log(receipt); // "You bought 3 Apples for $3.75"

// // Multi-line strings
// let email = `
// Dear User,
// Thank you for purchasing ${quantity} ${product}s.
// Total: $${price * quantity}

// Sincerely,
// The Store
// `;
// console.log(email);
// ============================================================================

// Concatenation with Different Data Types
// Strings + Numbers
// javascript
// // Automatic conversion to string
// let result1 = "Age: " + 25;      // "Age: 25"
// let result2 = "Score: " + 95.5;  // "Score: 95.5"
// let result3 = "Total: " + (10 + 5); // "Total: 15"

// console.log(result1);
// console.log(result2);
// console.log(result3);




// Numbers + Strings (Watch the Order!)
// javascript
// console.log(10 + 20);        // 30 (both numbers = addition)
// console.log("10" + 20);      // "1020" (string + number = concatenation)
// console.log(10 + "20");      // "1020" (number + string = concatenation)
// console.log("10" + "20");    // "1020" (both strings = concatenation)
// console.log(10 + 20 + "30"); // "3030" (10+20=30, then 30+"30"="3030")
// console.log("10" + 20 + 30); // "102030" ("10"+20="1020", then "1020"+30="102030")




// Common Mistakes & Tips
// Mistake 1: Forgetting Spaces
// javascript
// // ❌ WRONG - No space between words
// let fullName = "John" + "Doe";
// console.log(fullName); // "JohnDoe"

// // ✅ CORRECT - Add space manually
// let fullNameCorrect = "John" + " " + "Doe";
// console.log(fullNameCorrect); // "John Doe"
// Mistake 2: Complex + Operations
// javascript
// // ❌ Hard to read
// let message = "Hello " + firstName + ", you have " + items + " items in your cart totaling $" + total + " with tax of $" + tax;

// // ✅ Much cleaner with template literals
// let messageBetter = `Hello ${firstName}, you have ${items} items in your cart totaling $${total} with tax of $${tax}`;





//*******************************Arthmatic Operations*********************************
// // Addition
// console.log(5 + 3);     // 8

// // Subtraction  
// console.log(10 - 4);    // 6

// // Multiplication
// console.log(6 * 7);     // 42

// // Division
// console.log(15 / 3);    // 5

// // Remainder (Modulus)
// console.log(10 % 3);    // 1

// // Exponentiation
// console.log(2 ** 3);    // 8


// examples
// c.l(1+"1") // "11" string
// c.l(1-"1") // 0 number 
// c.l(1* "1") //1
// c.l(1 / "1") // 0.5
// c.l(1+'yamen") 1yamen
// c.l(1- "yamen") NaN

// ====> only adding operation dosen't work


// // Increment/Decrement
// post Increment : after logging it inceases the value
// value still the same till we print it again
// let x = 5;
// x++;   // 5                 
// x--;                    

// pre Increment : increases/dreases the value then someaction such as logging
// value change immeditlity
// let x = 5;
// ++x;      //6              
// --x;                    
// ==================================================================================
// What are Unary Operators?
// Unary operators work with only ONE operand (value). 
// 1. Unary Plus +
// Converts a value to a number.


// // With numbers (does nothing)
// console.log(+5);        // 5
// console.log(+3.14);     // 3.14

// // With strings (converts to number)
// console.log(+"10");     // 10 (number)
// console.log(+"3.14");   // 3.14 (number)
// console.log(+"100px");  // NaN (can't convert)

// // With booleans
// console.log(+true);     // 1
// console.log(+false);    // 0

// // With null and undefined
// console.log(+null);     // 0
// console.log(+undefined); // NaN

// // Useful for quick conversion
// let userInput = "25";
// let age = +userInput;   // Convert string to number
// console.log(age + 5);   // 30 (not "255")
// ======================================================
// 2. Unary Negation -
// Negates a value (makes it positive/negative) AND converts to number.

// // With numbers
// console.log(-5);        // -5
// console.log(-(-10));    // 10 (double negative)

// // With strings (converts THEN negates)
// console.log(-"10");     // -10
// console.log(-"3.14");   // -3.14

// // With booleans
// console.log(-true);     // -1
// console.log(-false);    // -0 (shows as 0)

// // Changing sign of a variable
// let temperature = 25;
// let negativeTemp = -temperature; // -25
// console.log(negativeTemp);

// ==================================================

// 3. Logical NOT ! (Bonus Unary Operator)
// Inverts a boolean value.

// javascript
// console.log(!true);     // false
// console.log(!false);    // true

// // With truthy/falsy values
// console.log(!0);        // true (0 is falsy)
// console.log(!1);        // false (1 is truthy)
// console.log(!"hello");  // false (non-empty string is truthy)
// console.log(!"");       // true (empty string is falsy)

// // Double NOT (!!) converts to boolean
// console.log(!!"hello"); // true (converts to boolean)
// console.log(!!0);       // false
// console.log(!!null);    // false


// ===============================================================
// Assigment operators
// let a = 10
// a = a + 20 // 30
// a = a + 50 // 100

// shorthand
// let x = 10
// x+ = 100 // 110
// x- = 10 // 100
// x* = 3 // 300
// x/ = 2 // 150

















///////////////////////////////////////////////////////soon//////////////////////////////////////////////////
// Practical Examples
// Example 1: Calculator with Input Validation
// javascript
// function addNumbers(num1, num2) {
//     // Convert inputs to numbers using unary plus
//     let converted1 = +num1;
//     let converted2 = +num2;
    
//     // Check if conversion was successful
//     if (isNaN(converted1) || isNaN(converted2)) {
//         return "Invalid input! Please enter numbers.";
//     }
    
//     return converted1 + converted2;
// }

// console.log(addNumbers("10", "5"));   // 15
// console.log(addNumbers("3.14", "2")); // 5.14
// console.log(addNumbers("10", "abc")); // "Invalid input!"












//*******************************Conditions*********************************

// What are Conditions?
// Conditions allow your code to make decisions and execute different code based on different situations.

// 1. Basic if Statements

// let age = 18;

// if (age >= 18) {
//     console.log("You are an adult");
// }

// =======================================
// if...else Statement
// javascript
// let temperature = 25;

// if (temperature > 30) {
//     console.log("It's hot outside");
// } else {
//     console.log("It's not too hot");
// }
// =======================================

// if...else if...else Statement

// let score = 85;

// if (score >= 90) {
//     console.log("Grade: A");
// } else if (score >= 80) {
//     console.log("Grade: B"); // This runs (85 >= 80)
// } else if (score >= 70) {
//     console.log("Grade: C");
// } else {
//     console.log("Grade: F");
// }
// =============================================================================================

// 2. Comparison Operators
// Equal vs Strict Equal

// let num = 5;
// let str = "5";

// //value and types
// console.log(num == str);   // true (loose equality - converts types)
// console.log(num === str);  // false (strict equality - checks type too)
// console.log(num != str);   // false (loose not equal)
// console.log(num !== str);  // true (strict not equal)
// All Comparison Operators
// javascript
// console.log(10 > 5);   // true (greater than)
// console.log(10 < 5);   // false (less than)
// console.log(10 >= 10); // true (greater than or equal)
// console.log(10 <= 5);  // false (less than or equal)
// =========================================================================
// 3. Logical Operators
// AND && (Both must be true)

// let username = "admin";
// let password = "1234";

// if (username === "admin" && password === "1234") {
//     console.log("Login successful");
// }

// ================================
// OR || (At least one must be true)
// let day = "Saturday";

// if (day === "Saturday" || day === "Sunday") {
//     console.log("It's weekend!");
// }
// ================================
// // Checking multiple conditions
// let isMember = false;
// let hasCoupon = true;

// if (isMember || hasCoupon) {
//     console.log("You get a discount!");
// }


// ===================================
// NOT ! (Reverse the condition)

// let isRaining = false;

// if (!isRaining) {
//     console.log("Let's go outside!");
// }

// // Checking if something is NOT equal
// let role = "user";

// if (role !== "admin") {
//     console.log("You don't have admin access");
// }

// ========================================
// 4. Ternary Operator ? :
// A shortcut for simple if...else statements.

// Basic Syntax
// javascript
// // Syntax: condition ? valueIfTrue : valueIfFalse

// let age = 20;
// let canVote = age >= 18 ? "Yes" : "No";
// console.log(canVote); // "Yes"
// ===========================================

// Practical Examples
// javascript
// // Example 1: Check if number is even or odd
// let number = 7;
// let result = number % 2 === 0 ? "Even" : "Odd";
// console.log(`${number} is ${result}`); // "7 is Odd"

// // Example 2: Price discount
// let price = 100;
// let isMember = true;
// let finalPrice = isMember ? price * 0.9 : price; // 10% discount for members
// console.log(`Final price: $${finalPrice}`); // "$90"

// // Example 3: Multiple conditions (nested ternary)
// let score = 85;
// let grade = score >= 90 ? "A" :
//             score >= 80 ? "B" :
//             score >= 70 ? "C" :
//             score >= 60 ? "D" : "F";
// console.log(`Grade: ${grade}`); // "Grade: B"
// ======================================================




//*******************************Switch Statement*********************************


// What is a Switch Statement?
// Think of a switch statement as a menu or multiple-choice question

// Basic Idea
// javascript
// let fruit = "apple";

// switch(fruit) {
//     case "apple":
//         console.log("Red fruit");
//         break;
//     case "banana":
//         console.log("Yellow fruit");
//         break;
//     case "orange":
//         console.log("Orange fruit");
//         break;
//     default:
//         console.log("Unknown fruit");
// }




// Example 2: Simple Calculator
// javascript
// let operation = "add";
// let a = 10;
// let b = 5;
// let result;

// switch(operation) {
//     case "add":
//         result = a + b;
//         break;
//     case "subtract":
//         result = a - b;
//         break;
//     case "multiply":
//         result = a * b;
//         break;
//     case "divide":
//         result = a / b;
//         break;
//     default:
//         result = "Invalid operation";
// }

// console.log(result); // 15





// Switch vs If-Else
// Switch is cleaner when checking ONE value against MANY possibilities:

// javascript
// // WITH IF-ELSE (messy)
// if (color === "red") {
//     console.log("Stop");
// } else if (color === "yellow") {
//     console.log("Ready");
// } else if (color === "green") {
//     console.log("Go");
// } else {
//     console.log("Invalid");
// }

// // WITH SWITCH (cleaner)
// switch(color) {
//     case "red": console.log("Stop"); break;
//     case "yellow": console.log("Ready"); break;
//     case "green": console.log("Go"); break;
//     default: console.log("Invalid");
// }



// Mistake 1: Forgetting break
// javascript
// // ❌ WRONG
// let number = 1;
// switch(number) {
//     case 1: console.log("One");
//     case 2: console.log("Two");
// }
// // Output: "One" AND "Two"!

// // ✅ CORRECT
// switch(number) {
//     case 1: console.log("One"); break;
//     case 2: console.log("Two"); break;
// }
// // Output: "One" only

// let 
// Mistake 2: Using comparisons in cases
// javascript
// // ❌ CAN'T DO THIS
// let score = 85;
// switch(score) {
//     case > 90:  // ERROR! Can't use comparisons
//         console.log("A");
//         break;
// }

// // ✅ USE IF-ELSE INSTEAD
// if (score > 90) {
//     console.log("A");
// }

//*******************************Loops*********************************

// What are Loops?
// Loops make your code repeat things. Like telling someone: "Do this 10 times!"


// for (START; CONDITION; STEP) {
//     // Code to repeat
// }	




// // Count from 1 to 5
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// // Output: 1, 2, 3, 4, 5


// // Even numbers from 2 to 10
// for (let i = 2; i <= 10; i += 2) {
//     console.log(i);
// }



// // Simple times table
// for (let i = 1; i <= 5; i++) {
//     console.log(`${i} × 3 = ${i * 3}`);
// }
// // Output: 
// // 1 × 3 = 3
// // 2 × 3 = 6
// // 3 × 3 = 9
// // 4 × 3 = 12
// // 5 × 3 = 15

// ================================================
// 2. WHILE LOOP - "Keep doing while true"
// Basic While Loop

// // Count from 1 to 5
// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;  // IMPORTANT! Don't forget this!
// }
// // Output: 1, 2, 3, 4, 5	




// // FOR LOOP (when you know how many times)
// for (let i = 0; i < 5; i++) {
//     console.log("Hello");
// }

// // WHILE LOOP (when you DON'T know how many times)
// let userInput = "";
// while (userInput !== "quit") {
//     userInput = prompt("Type 'quit' to exit");
//     console.log("You typed: " + userInput);
// }

// ===============================================================
// 3. FOR vs WHILE - When to Use?
// Use FOR loop when:

// You know exactly how many times to repeat

// Counting (1 to 10, etc.)

// Going through arrays/lists

// Use WHILE loop when:

// You don't know how many times

// Waiting for something to happen

// User input (keep asking until...)


// ===============================================================
// 4. NESTED LOOPS - "Loop inside a loop"
// Basic Nested Loop
// javascript
// // Outer loop
// for (let i = 1; i <= 3; i++) {
//     console.log("Outer loop: " + i);
    
//     // Inner loop
//     for (let j = 1; j <= 2; j++) {
//         console.log("  Inner loop: " + j);
//     }
// }
// ===================================================================
// BREAK - "Stop the loop now!"
// javascript
// // Stop when we find number 5
// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         break;  // Stop the loop immediately
//     }
//     console.log(i);
// }
// // Output: 1, 2, 3, 4 (stops before 5)


// CONTINUE - "Skip this one, go to next"
// javascript
// // Skip odd numbers
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 !== 0) {  // If odd
//         continue;  // Skip to next iteration
//     }
//     console.log(i);
// }

// ====================================================================
// 6. DO-WHILE LOOP - "Do once, then check"
// Basic Do-While
// javascript
// // Runs AT LEAST once
// let i = 1;
// do {
//     console.log("Count: " + i);
//     i++;
// } while (i <= 3);
// // Output: Count: 1, Count: 2, Count: 3



// Do-While vs While
// javascript
// // WHILE - checks first
// let x = 10;
// while (x < 5) {
//     console.log("This won't run at all");
// }

// // DO-WHILE - runs once, then checks
// let y = 10;
// do {
//     console.log("This runs once!");  // Runs once
// } while (y < 5);

// ===============================================================

// Common Mistakes
// Mistake 1: Infinite Loop!
// javascript
// // ❌ INFINITE LOOP - Never stops!
// let i = 0;
// while (i < 5) {
//     console.log("Help! I'm stuck!");
//     // Forgot i++ !!!
// }

// // ✅ FIX - Add i++
// let i = 0;
// while (i < 5) {
//     console.log("This will stop");
//     i++;  // Don't forget this!
// }
// Mistake 2: Wrong Loop Conditions
// javascript
// // ❌ Loops 0 times
// for (let i = 10; i < 5; i++) {
//     console.log("This never runs");
// }

// // ❌ Loops forever
// for (let i = 0; i >= 0; i++) {
//     console.log("Infinite loop!");
// }


//*******************************functions , spread operator*********************************

// function greet(){
//     console.log('hello')
// }
// greet()


// function sayHello(name , age){
//     console.log('hello' , name , 'my age is' , age)
//     return 'function is worked'
// }

// sayHello('yamen' , 24)

// console.log(sayHello('yamen' , 24))

// let message = sayHello('yamen', 24)
// console.log(mees)


// function area(length = 1 , width = 1){
//     let area = length * width
//     return area
// }
// area(2,2)
// console.log(area(1,2))
// console.log(area(1))
// console.log(area())


// let greet = function(name){
//     return 'hello'+" " + name
// }

// greet('yamen')
// console.log(greet('yamen'))


// let multiple = function(x,y){
//     return x*y
// }
// multiple(2,3)
// console.log(multiple(3,3))



// sayBye('yamen')
// let sayBye = function(name){
//     console.log('Bye' , name)
// }

// sayHi('majd')
// function sayHi(name){
//     console.log('hello' , name)
// }


// // function add(a,b){
// //     console.log(a+b)
// // }
// let add = (a,b)=>{
//     console.log(a + b)
// }

// add(2,3)

// let sub = (a)=>{
//     console.log(a -2)
// }
// sub(4)

// let multli = ()=>{
//     console.log(1*4)
// }
// multli()

// let div = (a,b)=> console.log(a/b)
// div(10,2)

// let name = (name) => name


// name('yamen')
// console.log(name('yamen'))

// let calculate = (a,b,c)=>{
//     let sum = a + b
//     let product = sum * c
//     console.log(product)
// }
// calculate(2,3,5)


// spread operator, in case we dont know the number of the parameters

// function sum2(...numbers){
//     console.log(numbers)
//     let total = 0
//     for(let i =0 ; i<numbers.length ; i++){
//         total += numbers[i]
//     }
//     return total
// }

// console.log(sum2(1,2))
// console.log(sum2(1,2,3,5,6,3,4,2,6,2,3))


// function greet2(greeting , ...names){
//     let result = []
//     for(let i =0 ; i<names.length ; i++){
//         result.push(greeting + " " + names[i])
//     }
//     return result
// }

// console.log(greet2('hello' , 'yamen' , 'sara' ,'sannen','naila'))



// function avrage(...numbers){
//     if(numbers.length === 0) return 0

//     let sum = 0
//     for(let i =0 ; i<numbers.length ; i++){
//         sum += numbers[i]
//     }
//     return sum / numbers.length
// }


// console.log(avrage(1,2,3))
// console.log(avrage(1,2,3,3,5,6,7,4).toFixed())


// function findmax(...numbers){
//     if(numbers.length === 0) return undefined

//     let max = numbers[0]
//     for(let i = 1 ; i <numbers.length ; i++){
//         if(numbers[i] > max){
//             max = numbers[i]
//         }
//     }
//     return max
// }


// console.log(findmax(12,13,1,4,5))

