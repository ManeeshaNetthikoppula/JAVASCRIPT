//Operators in JavaScript=>Arithmetic(+,-,*,/,%),
// //Adding Two Nums(+)
/*let num1 = 5;
let num2 = 7;
let sum = num1 + num2;
console.log("sum :", sum);*/

//using function
/*Syntax =>function additionFunction(a,b){
    return  a + b;
}*/
//Using arrow function
//let addition = (a,b) =>a + b;
/*let num1 = 5;
let num2 = 7;
let sum = addition(num1,num2);
console.log("Sum of given numbers is: ",sum);*/
//Substraction(-)
/*let num1 = 10;
let num2 = 1;
let result = num1 - num2;
console.log("Result: ",result);*/


//Multiplication of two numbers(*)
/*let num1 = 5;
let num2 = 6;
let result = num1*num2;
console.log("Result :",result);*/
//Division(/)
/*let num1 = 20;
let num2 = 30;
let result = num1 / num2;
console.log("Division:", result);*/
//percentile(%)
/*let num1 = 100;
let num2 = 10;
let result = (10 % 100);
console.log("percentile:",result);*/


//Data Types
// 1. Number
/*let age = 20;
let price  = 99.99;
console.log(age);
console.log(price);
console.log(typeof age);*/
 //2.String
/*let name = "Maneesha";
let message = "Welcome to JavaScript";
console.log(name);
console.log(message);
console.log(typeof name);*/
 // 3. Boolean
/*let isStudent = true;
let isLoggedIn = false;
console.log(isStudent);
console.log(typeof isStudent);*/

// 4. Undefined
/*let result;
console.log(result);
console.log(typeof result);*/

// 5. Null
/*let data = null;
console.log(data);
console.log(typeof data);*/

// 6.BigInt
/*let bigNumber = 12345678901234567890n;
console.log(bigNumber);
console.log(typeof bigNumber);*/
// 7.symbol
/*let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2);
console.log(typeof id1);*/
// 8.Object 
/*let student = {
    name:"Maneesha",
    age : 20,
    isStudent: true
};
console.log(student.name);
console.log(typeof student);*/
// 9.Array
/*let marks = [85,90,78,92];
console.log(marks[0]);
console.log(typeof marks);*/
 // 10.Function
/*function greet(){
    console.log("Hello");
}
greet();
console.log(typeof greet);*/

// control flow
// 1. if statement
/*let num = 10;
if(num > 0){
    console.log("Number is Positive");
}*/
// 2. if else
/*let number =7;
if(number % 2 ===0){
console.log("Even number");
}else{
    console.log("odd number");
}*/
// 3.if else if else
/*let a = 10, b = 25, c = 15;
if(a > b && a > c){
    console.log("A is largest");
} else if(b > a && b > c){
    console.log("B is largest");
} else{
    console.log("C is largest");
}*/

// 4. Switch Statement
/*let day = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console("Invalid day");
}*/

// 5. for loop
/*for(let i = 1; i <= 5; i++){
    console.log(i);
}*/
// 6. while Loop
/*let i =5;
while(i >= 1);{
console.log(i);
i--;
}*/
// 7.do while loop
/*let i = 1;
do {
    console.log(i);
    i++;
}
while(i <=5);*/

// 8. break Statement
/*for(let i = 1; i <= 5; i++){
    if(i ===3){
        break;
    }
    console.log(i);
}*/

// 9. continue statement
/*for(let i = 1;i <=5;i++){
    if(i === 3){
        continue;
    }
    console.log(i);
}*/
// 10. Nested loop
/*for( let i =1;i <= 3; i++){
    let row = "";
    for(let j = 1;j <= i; j++){
        row += "*";
    }
    console.log(row);
}*/
// FUNCTIONS
// 1.Simple Function(No Parameters)
/*function sayHello(){
    console.log("Hello! Welcome to JS");
}
sayHello();*/
// Function with Parameters
/*function greet(name){
    console.log ("Hello " + name);
}
greet("Maneesha");
greet("Akshaya");*/
// 3. Function with Return Value
/*function add(a,b){
return a + b;
}
let result = add(5,3);
console.log("Sum is :",result);*/
// i> Find Square of a Number
function square(num){
    return num *num;
}
console.log(square(4));

