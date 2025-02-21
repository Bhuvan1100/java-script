// for of

// ["", "", ""]
// [{}, {}, {}]


// for of is for array or string 
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "INDIA")


//console.log(map);

for (const key of map) {
     console.log(key[0], key[1]); // without destructuring of map
}

for (const [key,value] of map) {  // destructuering of maps
    console.log(key,value)
}


// // objects
// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

// const obj = { x: 10, y: 20 };

// for (const [key, value] of Object.entries(obj)) {
//     console.log(key, value);
// }

// for of will not directly work with object so we need to use for in but we can acess it with the help of object.enteries as it help to destructur it 

