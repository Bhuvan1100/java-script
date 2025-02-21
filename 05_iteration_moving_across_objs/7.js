const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

//const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

//console.log(myTotal);

let totalAmount = myNums.reduce((accu,num)=>{
    accu =  accu+num
    return accu;
},0) 
// if nothing is writen in place of zero it assumes it to be zero
//console.log(totalAmount)


// here an accumulator can be anything it can be an object or nums or string 



const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce((acc, curr) => {
     acc[curr] = (acc[curr] || 0) + 1;
    return acc;
},{});

//console.log(count)



const numbers = [1, 2, 3, 4];

const doubled = numbers.reduce((acc, curr) => {
    acc.push(curr * 2);  //  Modifying array
    return acc;  //  Returning updated array
},[]);  //  Initial value is an empty array `[]`

//console.log(doubled);

// if nothing is initialized accu is the first element and curr is the second element 
// see the down example to cross check the upper statement


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

 const priceToPay = shoppingCart.reduce((acc, item) =>{
    return acc+item.price
 } ,0)

 console.log(priceToPay);