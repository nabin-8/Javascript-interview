# 100 JavaScript interview questions:

## Basic JavaScript Questions:
<details>
<summary>1. What is Javascript?</summary>
    <p>
        JavaScript (JS) is a lightweight interpreted (or <b>just-in-time</b> compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, <i>many non-browser environments</i> also use it, such as <b>Node.js</b>, <b>Apache CouchDB</b> and <b>Adobe Acrobat</b>. JavaScript is a <b>prototype-based</b>, <b>multi-paradigm</b>, <b>single-threaded</b>, <b>dynamic language</b>, supporting <b>object-oriented</b>, imperative, and declarative (e.g. functional programming) styles.
    </p>
</details>

<details>
<summary>2. Datatypes in JavaScript?</summary>
    <p>
         <h4>Primitive</h4> 1. String </br>2. Number </br>3. Bigint </br>4. Boolean </br>5. Undefined </br>6. Null </br>7. Symbol </br>8. Nan
         <h4>Non-Primitive</h4>
         1. Array
         </br>
         2. Object
    </p>
</details>

<details>
<summary>3. Explain the difference between null, undefined, and undeclared variables.</summary>
<p>
    <h4>Null:</h4>  Null is the <b>object</b> type datatype javascript. Null value represents a reference that points, generally intentionally, to a nonexistent or invalid object or address.</br>
    <h4>Undefined:</h4> The meaning of undefined is ‘value is not assigned’.</br>
    <h4>Undeclared:</h4>  It occurs when we try to access any variable that is not initialized or declared earlier using the <b>var</b> or <b>const</b> keyword. If we use <b>'typeof'</b> operator to get the value of an undeclared variable, we will face the runtime error with the return value as <b>“undefined”</b>.
</p>
</details>

<details>
<summary>4. What is the use of typeof operator?</summary>
    <p>
        Typeof operator is used to check the type of variable is it
    </p>
</details>

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
<details>
<summary>5. What is an IIFE (Immediately Invoked Function Expression) and why might you use one?</summary>
<p>
    An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
</p>
</details>


```javascript
    //IIFI
    (()=>{
        let var1="Javascript"
        let var2=1000
        console.log(var2,var1);
    })();
    // Output: 1000 Javascript
```

<details>
<summary>6. Explain the concept of hoisting.</summary>
<p>
    JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the <b>top of their scope</b>, prior to execution of the code.
</p>
</details>

<details>
<summary>7. What is the difference between == and ===?</summary>
<p>
    <h3>== :</h3> Equality operator checks whether its two operands are equal, returning a Boolean result.
    <h3>=== :</h3> Strict equality operator checks whether its two operands are equal, returning a Boolean result.
</p>
</details>

<details>
<summary>8. What is closure in JavaScript?</summary>
<p>
    A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
</p>
</details>

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

<details>
<summary>9. What is the event loop in JavaScript?</summary>
<p>
    JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.
</p>
</details>

![eventloop](https://miro.medium.com/v2/resize:fit:1358/1*iHhUyO4DliDwa6x_cO5E3A.gif)

<details>
<summary>10. What is NaN? How can you check if something is NaN?</summary>
<p>
    The NaN global property is a value representing Not-A-Number.
    <h3>Ways to check Number:</h3>
    . Number.isNaN()</br>
    . isNaN()</br>
    . x !== x
</p>
</details>


```javascript

    let i="mozila"
    console.log(isNaN(i));
    if(isNaN(i)){
        console.log("Not a Number");
    }else{
        console.log(`${i} is number`);
    }
```

<details>
<summary>11. How do you clone an object in JavaScript?</summary>
<p>
    
</p>
</details>

<details>
<summary>12. Explain the concept of callback functions.</summary>
<p>
    
</p>
</details>

<details>
<summary>13. What is a promise in JavaScript?</summary>
<p>
    
</p>
</details>

<details>
<summary>14. What is the async and await keyword used for?</summary>
<p>
    
</p>
</details>

<details>
<summary>15. Explain the concept of memoization.</summary>
<p>
    
</p>
</details>

<details>
<summary>16. What is the difference between null, undefined, and NaN?</summary>
<p>
    
</p>
</details>

<details>
<summary>17. How do you check if a variable is an array in JavaScript?</summary>
<p>
    
</p>
</details>

<details>
<summary>18. What is the purpose of the delete operator?</summary>
<p>
    
</p>
</details>

<details>
<summary>19. Explain the difference between let, var, and const.</summary>
<p>
    
</p>
</details>

<details>
<summary>20. What is the use of the this keyword in JavaScript?</summary>
<p>
    
</p>
</details>

<details>
<summary>21. What is a pure function?</summary>
<p>


</p>
</details>
<details>
<summary>22. What is the object type?</summary>
<p>
    The <b>object type</b> refers to a compound value where you can set properties (named locations) that each holds their own values of any type.
</p>
</details>

```javascript
    var obj = {
	a: "hello world", // property
	b: 42,
	c: true
    };

    obj.a;		// "hello world", accessed with doted notation
    obj.b;		// 42
    obj.c;		// true

    console.log(obj["a"]);	// "hello world", accessed with bracket notation
    console.log(obj["b"]);	// 42
    console.log(obj["c"]);	// true
```

## Intermediate JavaScript Questions:

<details>
<summary>1. Explain event delegation in JavaScript.</summary>
<p></p>
</details>
<details>
<summary>2. What is a higher-order function?</summary>
<p></p>
</details>
<details>
<summary>3. How does prototypal inheritance work in JavaScript?</summary>
<p></p>
</details>
<details>
<summary>4. What is the difference between classical inheritance and prototypal inheritance?</summary>
<p></p>
</details>
<details>
<summary>5. Explain the concept of currying in JavaScript.</summary>
<p></p>
</details>
<details>
<summary>6. What is the difference between slice and splice?</summary>
<p></p>
</details>

<details>
<summary>7. Explain the difference between call, apply, and bind.</summary>
<p></p>
</details>

<details>
<summary>Explain arrays in JavaScript</summary>
<p>
    An array is an object that holds values (of any type) not particularly in named properties/keys, but rather in numerically indexed positions
</p>
</details>

```javascript
    var arr = [
	"hello world",
	42,
	true
];

arr[0];			// "hello world"
arr[1];			// 42
arr[2];			// true
arr.length;		// 3

typeof arr;		// "object"
```

<details>
<summary>8. What is the difference between map, forEach, and filter?</summary>
<p></p>
</details>
<details>
<summary>9. What is a closure and how is it used?</summary>
<p></p>
</details>
<details>
<summary>10. Explain the concept of memoization and provide an example.</summary>
<p></p>
</details>
<details>
<summary>11. What are ES6 arrow functions? How do they differ from regular functions?</summary>
<p></p>
</details>
<details>
<summary>12. What are ES6 template literals?</summary>
<p></p>
</details>
<details>
<summary>13. What is the purpose of the super keyword in JavaScript?</summary>
<p></p>
</details>
<details>
<summary>14. Explain the concept of modules in JavaScript.</summary>
<p></p>
</details>
<details>
<summary>15. What are JavaScript decorators?</summary>
<p></p>
</details>


<details>
<summary>16. Explain how setTimeout and setInterval functions work in JavaScript.</summary>
<p></p>
</details>
<details>
<summary>17. What is a promise in JavaScript? How do you use it?</summary>
<p></p>
</details>
<details>
<summary>18. What are generators in JavaScript?</summary>
<p></p>
</details>
<details>
<summary>19. What is a WeakMap in JavaScript and what is it used for?</summary>
<p></p>
</details>
<details>
<summary>20. How do you handle errors in JavaScript?</summary>
<p></p>
</details>
<details>
<summary>21. Explain the concept of event bubbling and event capturing.</summary>
<p></p>
</details>


## Advanced JavaScript Questions:

<details>
<summary>1. Explain the concept of event-driven programming.</summary>
<p></p>
</details>
<details>
<summary>2. What is the prototype chain in JavaScript?</summary>
<p></p>
</details>
<details>
<summary>3. What are the differences between ES6 classes and constructor functions?</summary>
<p></p>
</details>
<details>
<summary>4. Explain the concept of memoization and its benefits.</summary>
<p></p>
</details>
<details>
<summary>5. What is the difference between JavaScript's map and forEach methods?</summary>
<p></p>
</details>
<details>
<summary>6. Explain the difference between imperative and declarative programming styles.</summary>
<p></p>
</details>
<details>
<summary>7. What is the difference between the apply, call, and bind methods?</summary>
<p></p>
</details>
<details>
<summary>8. Explain the concept of the event loop in JavaScript.</summary>
<p></p>
</details>
<details>
<summary>9. What is the difference between a shallow copy and a deep copy?</summary>
<p></p>
</details>
<details>
<summary>10. Explain the concept of scope in JavaScript.</summary>
<p>
    In JavaScript, each function gets its own scope. The scope is basically a collection of variables as well as the rules for how those variables are accessed by name. Only code inside that function can access that function's scoped variables.
</p>
</details>
<details>
<summary>11. What is the difference between a function declaration and a function expression?</summary>
<p></p>
</details>
<details>
<summary>12. Explain the concept of function currying and provide an example.</summary>
<p></p>
</details>
<details>
<summary>13. What is the difference between synchronous and asynchronous code?</summary>
<p></p>
</details>
<details>
<summary>14. What is a closure in JavaScript and how is it used?</summary>
<p></p>
</details>
<details>
<summary>15. Explain the concept of prototypal inheritance in JavaScript.</summary>
<p></p>
</details>
<details>
<summary>16. What are JavaScript promises and how do you use them?</summary>
<p></p>
</details>
<details>
<summary>17. What is the difference between the null and undefined keywords in JavaScript?</summary>
<p></p>
</details>
<details>
<summary>18. Explain the concept of event delegation and provide an example.</summary>
<p></p>
</details>
<details>
<summary>19. What are the benefits of using strict mode in JavaScript?</summary>
<p></p>
</details>
<details>
<summary>20. What is a generator function in JavaScript?</summary>
<p></p>
</details>

<details>
<summary>21. What is the purpose of the this keyword in JavaScript?</summary>
<p></p>
</details>
<details>
<summary>22. What is the difference between map, reduce, and filter in JavaScript?</summary>
<p></p>
</details>


## JavaScript DOM and Browser-related Questions:

<details>
<summary>1. What is the DOM?</summary>
<p></p>
</details>
<details>
<summary>2. What are events in JavaScript?</summary>
<p></p>
</details>
<details>
<summary>3. What is event delegation?</summary>
<p></p>
</details>
<details>
<summary>4. What are event listeners in JavaScript?</summary>
<p></p>
</details>
<details>
<summary>5. Explain the difference between bubbling and capturing.</summary>
<p></p>
</details>
<details>
<summary>6. How do you access and modify HTML elements using JavaScript?</summary>
<p></p>
</details>
<details>
<summary>7. What is the difference between document.getElementById() and document.querySelector()?</summary>
<p></p>
</details>
<details>
<summary>8. What is the difference between addEventListener and attachEvent?</summary>
<p></p>
</details>
<details>
<summary>9. What is the purpose of the window.onload event?</summary>
<p></p>
</details>
<details>
<summary>10. How do you prevent the default behavior of an event in JavaScript?</summary>
<p></p>
</details>
<details>
<summary>11. What is event propagation?</summary>
<p></p>
</details>
<details>
<summary>12. How do you create an element dynamically using JavaScript?</summary>
<p></p>
</details>
<details>
<summary>13. What is the innerHTML property in JavaScript?</summary>
<p></p>
</details>
<details>
<summary>14. How do you handle errors in JavaScript?</summary>
<p></p>
</details>
<details>
<summary>15. What is the purpose of the setTimeout function in JavaScript?</summary>
<p></p>
</details>
<details>
<summary>16. What is the purpose of the setInterval function in JavaScript?</summary>
<p></p>
</details>
<details>
<summary>17. How do you get the value of a form input field in JavaScript?</summary>
<p></p>
</details>
<details>
<summary>18. How do you set the value of a form input field in JavaScript?</summary>
<p></p>
</details>
<details>
<summary>19. What are the differences between the window and document objects in JavaScript?</summary>
<p></p>
</details>
<details>
<summary>20. What is the purpose of the DOMContentLoaded event?</summary>
<p></p>
</details>
<details>
<summary>21. How do you create and remove event listeners in JavaScript?</summary>
<p></p>
</details>
<details>
<summary>22. What is the difference between clientHeight, offsetHeight, and scrollHeight?</summary>
<p></p>
</details>
<details>
<summary>23. What is the difference between localStorage and sessionStorage?</summary>
<p></p>
</details>

## JavaScript ES6 Questions:


<details>
<summary>1. What are the new features introduced in ES6?</summary>
<p></p>
</details>
<details>
<summary>2. What are arrow functions and how do they differ from regular functions?</summary>
<p></p>
</details>
<details>
<summary>3. What are template literals in ES6?</summary>
<p></p>
</details>
<details>
<summary>4. What are destructuring assignments in ES6?</summary>
<p></p>
</details>
<details>
<summary>5. What are default parameters in ES6?</summary>
<p></p>
</details>
<details>
<summary>6. What are rest parameters in ES6?</summary>
<p></p>
</details>
<details>
<summary>7. What is the let keyword used for in ES6?</summary>
<p></p>
</details>
<details>
<summary>8. What is the const keyword used for in ES6?</summary>
<p></p>
</details>
<details>
<summary>9. What are classes in ES6?</summary>
<p></p>
</details>
<details>
<summary>10. What are modules in ES6?</summary>
<p></p>
</details>
<details>
<summary>11. What is the spread operator in ES6?</summary>
<p></p>
</details>