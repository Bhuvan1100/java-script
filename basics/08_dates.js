//let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
 //console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());




// let timeElapsed = Date.now() // time elapsed till now
// console.log(timeElapsed)

// let date = new Date("02-15-2021")
// console.log(date.toString()) 
// console.log(date.getTime()); // time elspsed till given date
// console.log(Math.floor(date.getTime()/1000))



//let date = new Date(2025,2,18);
//console.log(`${date.toLocaleString('en-US',{month: 'short'})} is the month of the booking and the year is ${date.getFullYear()}`)



const date = new Date(); // February 17, 2025
console.log(date.toLocaleString('default', {
  day: "numeric",
  month: "long",
  year: "numeric"
}));
console.log(date.toLocaleString())








