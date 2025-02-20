// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }

// }
// console.log(user.username)
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()



/// arrow functions

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this.username);
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

// const print = function(name){
//     console.log(`hello my name is ${name}`)
// }
// print("Niharika")



// function print1(){
//     console.log("hello my name is bhuvan")
// }
// print1()



// const print3 = (name) => {
//     console.log(`hello my name is ${name}`)
// }
// print3("gudia")

// function info(){

// }





const user = {
    username:"bhuvan",
    userid: 123,
    message : function(){
        console.log(`hello my name is ${this.username}`)
    }
}
user.message();



const user1 = {
    username:"bhuvan",
    userid: 123,
    message : () => {
        console.log(`hello my name is ${user1.username}`)
    }
}
user1.username =  "bhaskar"
user1.message()



const user2 = {
    username:"bhuvan",
    userid: 123,
    message : () => {
        console.log(`hello my name is ${this.username}`)
    }
}
user2.message()




// this keyword can be used inside aa method but not in some random functions and can never be used inside a arrow functions
// arrow fucntions can also be decalred inside an object and this keyword can not be used there also

