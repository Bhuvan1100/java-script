//for each
// const myArr = ["bhuvan","bhaskar","Niharika"]
// myArr.forEach(function (name,index,myArr){
//     console.log(name,index,myArr)
// })



// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
// ]

// myCoding.forEach( (item) => {
    
//     console.log(item.languageName);
// } )




// const map = new Map([
//     ["IN", "India"],
//     ["USA", "United States"],
//     ["FR", "France"]
// ]);

// map.forEach((a,b) => {
//     console.log(a, ":", b);
// });

// map.forEach((key,value) => {
//     console.log(key, ":", value);
// });


const person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

// console.log(Object.entries(person)); // object.enteries convert the object into arr key value pair

const arr = Object.entries(person)

//console.log(arr[0])

arr.forEach(function([key,value], index){
      console.log(index,key,value)
})


