// const myarr = [1,2,3,4,5];
// console.log(myarr);

// same push and pop operation and shift and unshift operation

// const newarr = myarr.join()
// console.log(newarr); // type string



const arr1 = [0,1,2,3,4,5];
const arr2 = arr1.slice(1,4);
console.log(arr1);
console.log(arr2);

const arr3 = arr1.splice(1,4) //  changes the original array
console.log(arr3);
console.log(arr1)
arr1.unshift(10);

console.log(arr1)
arr1.shift();
console.log(arr1)
