/**
 * @return {Function}
 */
var createHelloWorld = function () {

    return function (...args) {
        return "Hello World";
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

//basic syntax
function f(a, b) {
    const sum = a + b;
    return sum;
}
console.log(f(3, 4)); // 7

//Anonymous Function
// You can optionally exclude the name of the function after the function keyword.
var f = function (a, b) {
    const sum = a + b;
    return sum;
}
console.log(f(3, 4)); // 7

// Immediately Invoked Function Expression (IIFE)
// You can create a function and immediately execute it in Javascript.

const result = (function (a, b) {
    const sum = a + b;
    return sum;
})(3, 4);
console.log(result); // 7

// Functions Within Functions
// A powerful feature of JavaScript is you can actually create functions within other functions and even return them!
function createFunction() {
    function f(a, b) {
        const sum = a + b;
        return sum;
    }
    return f;
}
const f = createFunction();
console.log(f(3, 4)); // 7

// Function Hoisting
// JavaScript has a feature called hoisting where a function can sometimes be used before it is initialized. 
// You can only do this if you declare functions with the function syntax.
function createFunction() {
    return f;
    function f(a, b) {
        const sum = a + b;
        return sum;
    }
}
const f = createFunction();
console.log(f(3, 4)); // 7

// Closures
// An important topic in JavaScript is the concept of closures. 
// When a function is created, it has access to a reference to all the variables declared around it, also known as it's lexical environment. 
// The combination of the function and its enviroment is called a closure. 
// This is a powerful and often used feature of the language.

function createAdder(a) {
    function f(b) {
        const sum = a + b;
        return sum;
    }
    return f;
}
const f = createAdder(3);
console.log(f(4)); // 7

// Arrow Syntax
// The other common way to declare functions is with arrow syntax. 
// In fact, on many projects, it is the preferred syntax.
const f = (a, b) => {
    const sum = a + b;
    return sum;
};
console.log(f(3, 4)); // 7

const f = (a, b) => a + b;
console.log(f(3, 4)); // 7