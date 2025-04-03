// function and methods 
// function myfunction(){
//     console.log("we are learning JS");
//     console.log("welcome to JS class");
// }
// myfunction();

// function myFunction(msg){
//     //parameter -> input
// console.log(msg);
// }
// myFunction("I Love JS");//argument

//NaN error
// function myFunction(msg,n){
//     //parameter -> input
// console.log(msg*100);
// }
// myFunction("I Love JS",100);//argument

// function -> 2 numbers sum 
// function sum(x,y){
//     //local variables -> scope
//     s=x+y;
//     console.log("before return");
//     return s;
// }
// let val = sum(3,4);
// console.log(val);

//Arrow functions
// const arrowSum = (a,b)=>{
//     console.log(a+b);
// };

//multiplication function 
// function mul(a,b){
//     return a*b;
// }

// Arrow multiplication function 
// const arrowMul = (a,b)=>{
//         console.log(a*b);
//     };

//returns the no. of vowels in the string
// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//         if(
//             char === "a"||
//             char === "e"||
//             char === "i"||
//             char === "o"||
//             char === "u"
//         )
//         {
//             count++;
//         }
//     }
//     return count;
// }

// arrow function 
// const countVowels= (str) => {
//     let count = 0;
//         for(const char of str){
//             if(
//                 char === "a"||
//                 char === "e"||
//                 char === "i"||
//                 char === "o"||
//                 char === "u"
//             )
//             {
//                 count++;
//             }
//         }
//         console.log(count);
//     }

// for each loop in array 

// let arr = [1,2,3,4,5];
// arr.forEach(function printVal(val)
// {
//     console.log(val);
// })

// let arr=[1,2,3,4,5];
// arr.forEach((val)=>{
//   console.log(val);
// });
    
// let arr = ["Pune", "Delhi", "Mumbai" ];
// arr.forEach((val)=>{
//     console.log(val.toUpperCase());
// });

// let arr = ["Pune", "Delhi", "Mumbai" ];
// arr.forEach((val,idx,arr)=>{
//     console.log(val.toUpperCase(),idx,arr);
// });

//sqare of numbers
// let num = [1,2,3,4,5,6,7,8,9];
// num.forEach((num)=>{
//     // console.log(num*num);
//     console.log(num**2);
// });

//copy of array
// let num = [1,2,3,4,5,6,7,8,9];
// num.map((val) => {
//     console.log(val);
// });


// let calcSquare = (num) =>{
//     console.log(num*num);
// };

//Array methods
// map 
// let num =[23,45,56];
// let newArr = num.map ((val)=>{
//     return val;
// });

// console.log(newArr);
// let calcSquare=(num)=>{
//     console.log(num*num);
// };

//filter
// let arr = [1,2,3,4,5,6];
// let evenArr = arr.filter((val) => {
//     // return val%2 === 0;//even number
//     return val%2 !== 0;//odd number
// });
// console.log(evenArr); 

//reduce method
// let arr = [1,2,3,4];
// const output = arr.reduce((res,curr)=>
// {
//     return res +curr;//sum calculation code
// });
// console.log(output);

//find largest value in array
// let arr= [2,5,8,4,9,3];
// const output =arr.reduce((prev, curr)=>
// {
//     return prev>curr?prev:curr;
// });
// console.log(output);

//sum of all number in the array const arr=[5,6,7,26,7,29]; 
 //greater than 25    
     const arr = [5,6,7,26,7,29];
     arr.sort(function(a, b){return (a-b)});
    document.getElementById("demo").innerHTML = arr;
     

 

