// //IFFE IMMEDIATELY INVOKED FUNCTION EXPRESSION

// const a = (function print(name){
//     console.log(`hellow my name is ${name}`)
// })("Niharika");




// const b = (() =>{
//     console.log("the summation of a and b is a+b",)
// })();

// // they can also be return type
// // () this at last are used to invoke the function


// const c = (function sum(a,b){
//    return a+b;
// })(5,15);
// console.log(c)



var name = "Alice";

 const a = function() {
    var name = "Bob";  // This stays inside IIFE
    console.log(name); // Output: Bob
};
a()
console.log(name); // Output: Alice (Not affected by IIFE)
