// Map filter reduce more questions


// list of full names
// ["nabin acharya", "shuvam poudel" ...]

const users=[
    {firstName:"nabin", lastName:"acharya",age:26},
    {firstName:"shuvam", lastName:"poudel",age:22},
    {firstName:"anish", lastName:"acharya",age:20},
    {firstName:"santosh", lastName:"khaitwada",age:18},
    {firstName:"rahul", lastName:"dhakal",age:26},
]
const output = users.map((x)=>x.firstName+ " " + x.lastName)

// console.log(output);
/**
 * Output
        [
        'nabin acharya',
        'shuvam poudel',
        'anish acharya',
        'santosh khaitwada',
        'rahul dhakal'
        ]
 */
// next Qm
// How many people age have {26 : 2} inside it

const reduceOutput=users.reduce(function(acc,curr){
    if(acc[curr.age]){
        // acc[curr.age]= ++acc[curr.age];
    }else{
        acc[curr.age]=1
    }
    return acc
},{})

// console.log(reduceOutput);
/**
 Output

    { '18': 1, '20': 1, '22': 1, '26': 2 }
 */

    /**
      Reduce cn be used in alortf of places so you nedd to have a mental model that
      if you have an array and you need to iterate over that array and come up to a single value outof it
      most probabelly you reduce
      basically that is where reduce come to picture
      that is power of functional programming is
     */

// Qno 3
/**
 Find the first name of all the people whose age is less than 30
 */

const filterOutput=users.filter(function user(x){
    if(x.age<30){
   
        return x
    }
}).map((x)=> x.firstName)

// console.log(filterOutput);
/**
 Output
    [ 'nabin', 'shuvam', 'anish', 'santosh', 'rahul' ]
 */
// achive this using reduce


const reduceName=users.reduce(function(acc,curr){
    if(curr.age<30){
        // acc.push(curr.firstName)
        // console.log(curr.firstName);

        return acc.push(curr.firstName)
    }

},{})

console.log(reduceName);