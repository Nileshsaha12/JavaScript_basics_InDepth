const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

//marvel_heros.push(dc)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc)
// console.log(all_heros);

const all_heros = [...marvel_heros,...dc]//using spread operator
// We can add as many arrays we want , it will spread all the elements of each arrays
// console.log(all_heros);

const myarr2 = [1,2,[3,4],6,[7,8,[9,10,[11,12,13]]]]
const new2 = myarr2.flat(Infinity)
console.log(myarr2);
console.log(new2);

console.log(Array.isArray("Nilesh"));
console.log(Array.from("Nilesh"));
// console.log(Array.from({name : "Nilesh"}));// it will return empty array because we have to declear key or value , what we want to array

let score1 = [2454,344]
let score2 = [3422,543]
let score3 = [344,5345]
console.log(Array.of(...score1,...score2,...score3));// it will makes an big array from the all small arrays
console.log(...score1,...score2,...score3);// it will only separate the elements from the arrays 