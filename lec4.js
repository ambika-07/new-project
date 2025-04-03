// array in js 
// let heroes = ["ironmen", "hulk", "thor"];
// console.log(heroes);

// let marks = [40,42 , 75, 81, 60];
// console.log(marks);
// console.log(marks.length);

//looping over in array
// let heroes = ["ironmen", "hulk", "thor", "spiderman", "shaktiman"];
// for(let i=0; i<heroes.length ; i++){
//     console.log(heroes[i]);
// }//for loop

// for (let hero of heroes){
//     console.log(hero);//for-of loop
// }

//avg. marks of students
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let val of marks){
//     sum+=val;
// }
// let avg = sum/marks.length;
// console.log("avg marks of the students=", avg);
// console.log(`avg marks of the class = ${avg} `);


//final price after 10% off 

//  let items = [250,645, 300, 900, 50];
// 1st method 
// let i=0;
// for (let val of items){
//     let offer=val/10;
//     items[i]=items[i]-offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
    
// }
// 2nd method 
// let items = [250,645, 300, 900, 50];
// for (i=0 ; i<items.length ; i++){
//     let offer=items[i]/10;
//     items[i]-= offer;
// }
// console.log(items);


// array methods 
// 1.push
// let veggies = ["potato","onion","pea","brinjal"];
// veggies .push("pumkin","garlic");
// console.log(veggies);

//2.pop
//  let veggies = ["potato","onion","pea","brinjal"];
// let deletedVeggies = veggies.pop();
// console.log(veggies);
// console.log("deleted", deletedVeggies);

//3.to string
// let veggies = ["potato","onion","pea","brinjal"];
// console.log(veggies.toString());
// console.log(veggies);

// concat
// let marvelHeroes = ["thor","spiderman"];
// let dcHeroes = ["batman","superman"];
// let heroes= marvelHeroes.concat(dcHeroes);
// console.log(heroes);

// unshift
// let marvelHeroes = ["thor","spiderman","ironman"];
// marvelHeroes.unshift("antean");
// console.log(marvelHeroes);

// shift
// let marvelHeroes = ["thor","spiderman","ironman"];
// let val = marvelHeroes.shift();
// console.log("deleted",val);
// console.log(marvelHeroes);

// slice
// let marvelHeroes = ["thor","spiderman","ironman","antman","drstranger"];
// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(1,4));

// splice 
// let arr =[1,2,3,4,5,6,7];
// arr.splice(2,2,101,102);
//add element
// arr.splice(2,0,101);

//delete element
// arr.splice(3,1);

//replace element
// arr.splice(3,1,101);
// console.log(arr);

//practice question
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.splice(2,1,"Ola");
let val = companies.shift();
console.log("deleted",val);
console.log(companies);
companies.push("Amazone");
console.log(companies);
