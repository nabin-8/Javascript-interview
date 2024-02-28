// Array Important methods
/*
    1.Map
    2.Filter
    3.Reduce
    */
   
//    1.Map
//  Map method is used to transform an array
const arr=[1,5,3,4,2,6,7]

// Double [2, 10,  6, 8, 4, 12, 14]

// Triple [3, 15,  9, 12, 6, 18, 21]

// Binary ['1',   '101','11',  '100','10',  '110','111']

function double(x){
    return x*2;
}
function triple(x){
    return x*3;
}
function binary(x){
    return x.toString(2);
}


// const output=arr.map(binary)
// console.log(output);

// this is also valid syntex in javascript
// const output=arr.map(function binary(x){
    //     return x.toString(2);
    // })
    
// Using Arrow function this is also valid syntex in javascript
//  const output=arr.map((x)=>{
//      return x.toString(2);
//  })

// This is also valid
const output=arr.map((x)=>x.toString(2))
// console.log(output);
/**
 * ----------------------------------------------------------------
 */
// 2.Filter
const filterArr=[1,5,3,4,2,6,7]

// filter odd values

function isOdd(x){
    return x%2;
    // Output [ 1, 5, 3, 7 ]
}
function isEven(x){
    return x%2==0;
    // Output [ 4, 2, 6 ]
}

function greaterThen(x){
    return x>4;
    // Output [ 5, 6, 7 ]
}

const filterOutput=filterArr.filter(greaterThen)
// console.log(filterOutput);


/**
 * ----------------------------------------------------------------
*/

// 3.Reduce

const reduceArr=[1,5,3,4,2,6,7]
// Reduce function is used when you have to take all the elements from the array

// sum or max

// Iets understand what problem solves reduce

function findMax(arr){
    let max=0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max;
}

function findsum(arr){
    let sum=0;
    for (let i = 0; i < arr.length; i++) {
        sum=sum+arr[i]
    }
    return sum;
}

console.log(findsum(arr));
console.log(findMax(arr));

// How we can tarnsferm this logic and write a reduce function insted

const reduceOutput=reduceArr.reduce(function(acc,curr){
    acc=acc+curr
    return acc
},0 /* initial value*/)

const reduceMax=reduceArr.reduce(function(acc,curr){
    if(curr>acc){
        acc=curr
    }

    return curr
},0)


console.log(reduceOutput);
console.log(reduceMax);