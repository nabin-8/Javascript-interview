# 100 JavaScript interview questions:

### Basic JavaScript Questions:
1. What is JavaScript?

     JavaScript (JS) is a lightweight interpreted (or **just-in-time** compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, *many non-browser environments* also use it, such as **Node.js**, **Apache CouchDB** and **Adobe Acrobat**. JavaScript is a **prototype-based**, **multi-paradigm**, **single-threaded**, **dynamic language**, supporting **object-oriented**, imperative, and declarative (e.g. functional programming) styles.

1. Datatypes in JavaScript?
    - Primitive
        1. String
        2. Number
        3. Bigint
        4. Boolean
        5. Undefined
        6. Null
        7. Symbol
        8. Nan
    - Non-Primitive
        1. Array
        2. Object
1. Explain the difference between null, undefined, and undeclared variables.

    **Null:**  Null is the **object** type datatype javascript. Null value represents a reference that points, generally           intentionally, to a nonexistent or invalid object or address. 

    **Undefined:** The meaning of undefined is ‘value is not assigned’.

    **Undeclared:**  It occurs when we try to access any variable that is not initialized or declared earlier using the **var** or **const** keyword. If we use **'typeof'** operator to get the value of an undeclared variable, we will face the runtime error with the return value as **“undefined”**.

1. What is the use of typeof operator?

    Typeof operator is used to check the type of variable is it
    ```javascript
        let num=10;
        let str="JavaScript";
        let bool=true;
        let undeType;
        let nullType=null;

        console.log(typeof num);        //number
        console.log(typeof str);        //string
        console.log(typeof bool);       //boolean
        console.log(typeof undeType);   //undefined
        console.log(typeof nullType);   //object
    ```
1. What is an IIFE (Immediately Invoked Function Expression) and why might you use one?

    An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
    ```javascript
    //IIFI
    (()=>{
        let var1="Javascript"
        let var2=1000
        console.log(var2,var1);
    })();
    // Output: 1000 Javascript
    ```
1. Explain the concept of hoisting.

    JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the **top of their scope**, prior to execution of the code.

1. What is the difference between == and ===?

    **== :** Equality operator checks whether its two operands are equal, returning a Boolean result.

    **=== :** Strict equality operator checks whether its two operands are equal, returning a Boolean result.

1. What is closure in JavaScript?

    A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

    ```javascript
        function init() {
          var name = "Mozilla"; // name is a local variable created by init
          function displayName() {
            // displayName() is the inner function, that forms the closure
            console.log(name); // use variable declared in the parent function
          }
          displayName();
        }
        init();
    ```

1. What is the event loop in JavaScript?

    JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.
    ![eventloop](https://miro.medium.com/v2/resize:fit:1358/1*iHhUyO4DliDwa6x_cO5E3A.gif)

1. What is NaN? How can you check if something is NaN?

    The NaN global property is a value representing Not-A-Number.
    
    **Ways to check Number:**
    - Number.isNaN()  
    - isNaN()
    - x !== x

    ```javascript
    
        let i="mozila"
        console.log(isNaN(i));
        if(isNaN(i)){
            console.log("Not a Number");
        }else{
            console.log(`${i} is number`);
        }
    ```
1. How do you clone an object in JavaScript?
1. Explain the concept of callback functions.
1. What is a promise in JavaScript?
1. What is the async and await keyword used for?
1. Explain the concept of memoization.
1. What is the difference between null, undefined, and NaN?
1. How do you check if a variable is an array in JavaScript?
1. What is the purpose of the delete operator?
1. Explain the difference between let, var, and const.
1. What is the use of the this keyword in JavaScript?
1. What is a pure function?

### Intermediate JavaScript Questions:
1. Explain event delegation in JavaScript.
1. What is a higher-order function?
1. How does prototypal inheritance work in JavaScript?
1. What is the difference between classical inheritance and prototypal inheritance?
1. Explain the concept of currying in JavaScript.
1. What is the difference between slice and splice?
1. Explain the difference between call, apply, and bind.
1. What is the difference between map, forEach, and filter?
1. What is a closure and how is it used?
1. Explain the concept of memoization and provide an example.
1. What are ES6 arrow functions? How do they differ from regular functions?
1. What are ES6 template literals?
1. What is the purpose of the super keyword in JavaScript?
1. Explain the concept of modules in JavaScript.
1. What are JavaScript decorators?
1. What is the difference between == and === in JavaScript?
1. Explain how setTimeout and setInterval functions work in JavaScript.
1. What is a promise in JavaScript? How do you use it?
1. What are generators in JavaScript?
1. What is a WeakMap in JavaScript and what is it used for?
1. How do you handle errors in JavaScript?
1. Explain the concept of event bubbling and event capturing.

### Advanced JavaScript Questions:
1. Explain the concept of event-driven programming.
1. What is the prototype chain in JavaScript?
1. What are the differences between ES6 classes and constructor functions?
1. Explain the concept of memoization and its benefits.
1. What is the difference between JavaScript's map and forEach methods?
1. Explain the difference between imperative and declarative programming styles.
1. What is the difference between the apply, call, and bind methods?
1. Explain the concept of the event loop in JavaScript.
1. What is the difference between a shallow copy and a deep copy?
1. Explain the concept of scope in JavaScript.
1. What is the difference between a function declaration and a function expression?
1. Explain the concept of function currying and provide an example.
1. What is the difference between synchronous and asynchronous code?
1. What is a closure in JavaScript and how is it used?
1. Explain the concept of prototypal inheritance in JavaScript.
1. What are JavaScript promises and how do you use them?
1. What is the difference between the null and undefined keywords in JavaScript?
1. Explain the concept of event delegation and provide an example.
1. What are the benefits of using strict mode in JavaScript?
1. What is a generator function in JavaScript?
1. Explain the differences between == and === in JavaScript.
1. What is the purpose of the this keyword in JavaScript?
1. What is the difference between map, reduce, and filter in JavaScript?

### JavaScript DOM and Browser-related Questions:
1. What is the DOM?
1. What are events in JavaScript?
1. What is event delegation?
1. What are event listeners in JavaScript?
1. Explain the difference between bubbling and capturing.
1. How do you access and modify HTML elements using JavaScript?
1. What is the difference between document.getElementById() and document.querySelector()?
1. What is the difference between addEventListener and attachEvent?
1. What is the purpose of the window.onload event?
1. How do you prevent the default behavior of an event in JavaScript?
1. What is event propagation?
1. How do you create an element dynamically using JavaScript?
1. What is the innerHTML property in JavaScript?
1. How do you handle errors in JavaScript?
1. What is the purpose of the setTimeout function in JavaScript?
1. What is the purpose of the setInterval function in JavaScript?
1. How do you get the value of a form input field in JavaScript?
1. How do you set the value of a form input field in JavaScript?
1. What are the differences between the window and document objects in JavaScript?
1. What is the purpose of the DOMContentLoaded event?
1. How do you create and remove event listeners in JavaScript?
1. What is the difference between clientHeight, offsetHeight, and scrollHeight?
1. What is the difference between localStorage and sessionStorage?

### JavaScript ES6 Questions:
1. What are the new features introduced in ES6?
1. What are arrow functions and how do they differ from regular functions?
1. What are template literals in ES6?
1. What are destructuring assignments in ES6?
1. What are default parameters in ES6?
1. What are rest parameters in ES6?
1. What is the let keyword used for in ES6?
1. What is the const keyword used for in ES6?
1. What are classes in ES6?
1. What are modules in ES6?
1. What is the spread operator in ES6?