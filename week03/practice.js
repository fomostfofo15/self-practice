//1.function declaration
function multiply(a,b){
    return a*b;
}

console.log(multiply(2,3))

// //2.function expression (using arrow function syntax)
// const multiply2 = (a,b)=> a*b //(a,b)=>a*b
// console.log(multiply2(4,2))
// //3.fuction expression ( using function declaration)
// const multiply3 = function(a,b){ return a*b}
// console.log(multiply3(5,2))

// console.log(typeof multiply) // function
// console.log(typeof multiply2)
// console.log(typeof multiply3)

// const x = multiply
// const y = multiply2
// const z = multiply3
// console.log(typeof x)
// console.log(typeof y)
// console.log(typeof z) // function

let a=1
let b=2
console.log( typeof a)
console.log( typeof b) //number

function multiply1(a,b){
    return a*b;
}
function doSomething(x) { //x=multiply1
    return x // return function dai
}
// console.log(doSomething(multiply1)) //pass function to another function

function sayGoodBye(){
    return 'Goodbye!'
}
function doSomething(){
    return sayGoodBye
}
console.log(
    doSomething()() //Goodbye!
)