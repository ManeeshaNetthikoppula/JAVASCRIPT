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
// i) Find Square of a Number
/*function square(num){
    return num *num;
}
console.log(square(4));*/
// ii) Check Even or odd
/*function isEven(num){
    if(num % 2 === 0){
        return "Even";
    }
    else{
        return "Odd";
    }
}
console.log(isEven(10));
console.log(isEven(7));*/

// iii) Find Largest of Two Numbers
/*function findMax(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}
console.log(findMax(10,25));*/
// 7. Function to calculate Factorial
 /*function factorial(n){
    let fact = 1;
    for(let i = 1;i <= n; i++){
        fact *= i;
    }
    return fact;
 }
 console.log(factorial(5));*/
 // 8. Arrow Function
 /*const multiply = (a,b) => {
    return a * b;
 };
 console.log(multiply(4,6));*/
 // 9. Function to count Vowels in a String
 /*function countVowels(str){
    let count = 0;
    let vowels = "aeiouAEIOU";
    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
 }
console.log(countVowels("Maneesha"));*/
// 10. Function calling Another Function
/*function double(num){
    return num * 2;
}
function triple(num){
    return num * 3;
}
function calculate(num){
    console.log("Double:",double(num));
    console.log("Triple:", triple(num));
}
calculate(5);*/

// 11. convert the celsius to fahrenheit
/*function celsiusToFahrenheit(c){
    return(c * 9/5)+32;
}
console.log(celsiusToFahrenheit(30));*/
// 12. reverse a String
/*function reverseString(str){
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));*/
// check palindrome
/*function isPalindrome(str){
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));*/
// Find Sum of Array Elements
/*function sumArray(arr){
    let sum = 0;
    for(let num of arr){
        sum +=num;
    }
    return sum;
}
console.log(sumArray([1,2,3,4]));*/
// Find Largest number in an Array
/*function findLargest(arr){
    return Math.max(...arr);
}
console.log(findLargest([10,45,2,99,23]));*/
// count words in a sentence
/*function countWords(sentence){
    return sentence.trim().split(" ").length;
}
console.log(countWords("JavaScript is very powerful"));*/
// Generate Random number between two values
/*function randomBetween(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomBetween(1,10));*/
// Check is a number is Prime
/*function isPrime(num){
    if(num <= 1) return false;
    for(let i = 2; i<num; i++){
        if(num%i ===0) return false;
    }
    return true;
}
console.log(isPrime(7));
console.log(isPrime(10));*/
// Find Factorial using Recursion
/*function factorial(n){
    if(n===0) return 1;
    return n * factorial(n-1);
}
console.log(factorial(5));*/
// Capitalize first letter of each word
/*function CapitalizeWords(str){
    return str
    .split(" ")
    .map(word=>word.charAt(0).toUpperCase()+word.slice(1))
    .join(" ");
}
console.log(CapitalizeWords("javascript is fun"));*/
// Remove Duplicates from an Array
/*function removeDuplicates(arr){
    let result = [];
    for (let i = 0;i < arr.length;i++){
        if(!result.includes(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(removeDuplicates([1,2,2,3,4,4]));*/
//Check Two Strings are Anagrams
/*function areAnagrams(str1,str2){
    let s1 = str1.toLowerCase().split("").sort().join("");
    let s2 = str2.toLowerCase().split("").sort().join("");
    return s1 === s2;
}
console.log(areAnagrams("listen","silent"));*/
// Fibonacci Series
/*function fibonacci(n){
    let series = [0,1];
    for(let i =2; i < n; i++){
        series[i] = series[i-1]+ series[i - 2];
    }
    return series.slice(0,n);
}
console.log(fibonacci(7));*/
//Count Frequency of elements in Array
/*function frequencyCount(arr){
    let freq = {};
    for(let item of arr){
        freq [item] = (freq[item] || 0) + 1;
    }
    return freq;
}
console.log(frequencyCount([1,2,2,3,3,3]));*/
/* function findMissing(arr,n){
    let expectedSum = (n *(n+1))/2;
    let actualSum = arr.reduce((a,b) => a +b,0);
    return expectedSum - actualSum;
}
console.log(findMissing([1,2,4,5],5));*/
// Group array of objects by property
/*function groupByCategory(items){
    return items.reduce((acc,item) =>{
        if(!acc[item.category]){
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
        },{});
    }
    const products = [
        {name:"shirt",category:"Clothes"},
        {name: "Jeans",category: "Clothes"},
        {name: "Mobile", category: "Electronics"}
    ];
    console.log(groupByCategory(products));*/
// Debounce function
/*function Debounce(func,delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func.apply(this,args);
        },delay);
    };
}*/
// 9 Flattened Nested Arrray
/*function flattenArray(arr){
    return arr.flat(Infinity);
}
console.log(flattenArray([1,[2,[3,4]],5]));*/
// Deep Clone an Object
/* function deepClone(obj){
    return JSON.parse(JSON.stringify(obj));
}
let original = {name: "Maneesha",details: { age:21}};
let copy = deepClone(original);
console.log(copy);*/
// Find first non repeating character
/*function firstNonRepeating(str){
    let freq = {};
    for (let char of str){
        freq[char] = (freq[char] || 0) + 1;
    }
    for (let char of str){
        if(freq[char] === 1){
            return char;
        }
    }
    return null;
}
console.log(firstNonRepeating("aabbcdde"));*/
// Rotate Array by K Positions
/*function rotateArray(arr,k){
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}
console.log(rotateArray([1,2,3,4,5],2));*/
// Longest word in a Sentence
/*function longestWord(sentence){
    let words = sentence.split(" ");
    let longest = "";
    for(let word of words){
        if(word.length > longest.length){
            longest = word;
        }
    }
    return longest;
}
console.log(longestWord("JavaScript is very powerful language"));*/
// Check Balanced Paranthesis
/*function isBalanced(str){
    let stack = [];
    for(let char of str){
        if(char === "("){
            stack.push(char);
        }
        else if( char === ")"){
            if(stack.length === 0) return false;
            stack.pop();
        }
    }
    return stack.length === 0;
}
console.log(isBalanced("((()))"));
console.log(isBalanced("(()"));*/
// Find Intersection of Two Arrays
/*function intersection(arr1,arr2){
    return arr1.filter(value => arr2.includes(value));
}
console.log(intersection([1,2,3,4],[3,4,5,6]));*/
//Find Duplicate Numbers in Array
/*function findDuplicates(arr){
    let seen = new Set();
    let duplicates = new Set();
    for(let num of arr){
        if(seen.has(num)){
            duplicates.add(num);
        }
        else {
            seen.add(num);
        }
    }
    return [...duplicates];
}
console.log(findDuplicates([1,2,3,2,4,5,1]));*/
// Move all Zeroes to End
/*function moveZeros(arr){
    let nonZeros = arr.filter(num => num !==0);
    let zeros = arr.filter(num => num ===0);
    return [...nonZeros, ...zeros];
}
console.log(moveZeros([0,1,0,3,12]));*/
// 8. Find Power Without Using Math.pow()
/*function power(base,exp){
    let result = 1;
    for(let i = 0;i < exp;i++){
        result *= base;
    }
    return result;
}
console.log(power(2,5));*/
// Find Maximum SubArray sum
/*function maxSubArray(arr){
    let maxSum = arr[0];
    let currentSum = arr[0];
    for (let i = 1; i < arr.length;i++){
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));*/
//Given a string, find the length of the longest substring without repeating characters
/*function longestUniqueSubstring(str){
    let set = new Set();
    let left = 0;
    let maxLength = 0;
    for(let right = 0; right < str.length;right++){
        while (set.has(str[right])){
            set.delete(str[left]);
            left++;
            }
            set.add(str[right]);
                maxLength=Math.max(maxLength,right-left+1);
            }
            return maxLength;
        }
        console.log(longestUniqueSubstring("abcabcbb"));*/
// Implement your own
/*function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}*/
//Fatten Object
/*function flattenObject(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    let newKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof obj[key] === "object" && obj[key] !== null) {
      flattenObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}

console.log(flattenObject({
  user: {
    name: "Maneesha",
    address: { city: "Hyd", pin: 500001 }
  }
}));*/
//Implement LRU Cache
/*class LRUCache {
  constructor(limit) {
    this.limit = limit;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    let value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size === this.limit) {
      this.cache.delete(this.cache.keys().next().value);
    }

    this.cache.set(key, value);
  }
}*/
//currying Function
 /*
function curry(fn){
    return function curried(...args){
        if(args.length >= fn.length){
            return fn(...args);
        }
        return(...next) => curried(...args, ...next);
    };
}
function add(a,b,c){
    return a +b + c;
}
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3));*/
// Event Emitter
/*
class EventEmitter{
    constructor(){
        this.events = {};
    }
    on(event,listener){
        (this.events[event] ||= []).push(listener);
    }
    emit(event, data){
        (this.events[event] || []).forEach(fn => fn(data));
    }
    off(event,listener){
        this.events[event] = (this.events[event]||[]).filter(fn => fn!==listener);
    }
}*/
//Throttle function
function throttle(fn, limit) {
  let inThrottle = false;

  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}