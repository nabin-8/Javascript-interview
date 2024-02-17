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

// //IIFI
// (()=>{
//     let var1="Javascript"
//     let var2=1000
//     console.log(var2,var1);
// })();
// // Output: 1000 Javascript

// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms the closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();
  

let i="mozila"
console.log(isNaN(i));
if(isNaN(i)){
    console.log("Not a Number");
}else{
    console.log(`${i} is number`);
}