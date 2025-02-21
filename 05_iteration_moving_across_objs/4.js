const myLanguage = {
    language1 : "java",
    language2 : "python",
    language3 : "HTML",
    language4 : "CPP"
}

// for (const key in myLanguage) {
//     console.log(myLanguage[key])
// }



const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key of map) {
    console.log(key[0]);
}