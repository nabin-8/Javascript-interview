/**
 * Qno 4 What is the use of typeof operator?
 */

// let num=10;
// let str="JavaScript";
// let bool=true;
// let undeType;
// let nullType=null;

// console.log(typeof num);        //number
// console.log(typeof str);        //string
// console.log(typeof bool);       //boolean
// console.log(typeof undeType);   //undefined
// console.log(typeof nullType);   //object

/**
 * 5. What is an IIFE (Immediately Invoked Function Expression) and why might you use one?
 */
// //IIFI
// (()=>{
//     let var1="Javascript"
//     let var2=1000
//     console.log(var2,var1);
// })();
// // Output: 1000 Javascript


/**
 * 8. What is closure in JavaScript?
 */
// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms the closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();
  


/**
 * 10. What is NaN? How can you check if something is NaN?
 */
// let i="mozila"
// console.log(isNaN(i));
// if(isNaN(i)){
//     console.log("Not a Number");
// }else{
//     console.log(`${i} is number`);
// }

/**
 * 22. What is the object type?
 */
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