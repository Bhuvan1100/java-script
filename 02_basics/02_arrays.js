const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//console.log( marvel_heros.concat(dc_heros))
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]

//  console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(1)
// console.log(real_another_array);



// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "hitesh"})) // interesting

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));


// console.log(Array.from({ 0: "a", 1: "b", length: 2 })); 

// console.log(Array.from({0: "bhuvan", 1:"bhaskar", 2:"deo", length: 3}));

// let name1 =  "bhuvan"
// let name2 =  "bhaskar"
// let name3 =  "deo"
// console.log(Array.of(name1 , name2, name3));






class Animal {
    constructor(name, sound) {
      this.name = name;
      this.sound = sound;
    }
  
    makeSound() {
      return `${this.name} makes a ${this.sound} sound`;
    }
  }
  
  // Creating instances (objects)
  const dog = new Animal("Dog", "bark");
  const cat = new Animal("Cat", "meow");
  const rat = new Animal("Rat", "squeak");
  
  // Storing them in an array
  const animalsArray = [dog, cat, rat];
  
  console.log(animalsArray);
  