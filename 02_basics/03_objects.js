// singleton
// Object.create

// object literals

const mySym = Symbol("key1")
const mySym2 = Symbol()

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "135478",
    [mySym2]: "bhuvan@123",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "hitesh@chatgpt.com"
// // Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// // console.log(JsUser);





// const greeting = function(){
//     console.log("Hello JS user");
// }

// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(greeting());
// console.log(JsUser.greetingTwo());



const JsUser1 = {
    name: "Hitesh",
    greetingTwo: function() {
        console.log(`Hello JS user, ${this.name}`);
    },
    greetingThree : "hellow world",
};

const greeting = function() {
    console.log("Hello JS user");
};


greeting(); 
JsUser1.greetingTwo(); // function can also be the properties of object
console.log(JsUser1.greetingThree)
