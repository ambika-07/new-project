//  for(let i=1;i<=5;i++){
//      console.log("apna college");
//  }
 //calculate sum of 1 to 5
//  let sum = 0;
//  for(let i = 1; i <= 5; i++){
//      sum=sum+i;
//  }console.log("sum=", sum);
//  console.log("loop has ended");

 //calculate sum of 1 to 100 
//   let sum = 0;
//   let n = 100;
//   for (let i=1;i<=n ; i++){
//       sum = sum+i;
//   }
//   console.log("sum=", sum);
//   console.log("loop has ended");

  //infinite loop
//   for(let i = 1; i>=0; i++){
//       console.log("i=",i);
//   }

// while loop
// let i=1;
// while (i<=10){
//     console.log("ambika");
//     i++;
// }
//do-while loop
// let i =1;
// do{
//     console.log("i=",i);
//     i++
// }
// while(i<= 5);
 
//for-of loop
// let str = "ambika chourasia";
// for(let i of str ){
//     console.log("i=", i); 
// }

// let str ="javascript";
// let size =0;
// for(let i of str ){
//     console.log ("i=",i);
//     size++;
// }
// console.log("string size=", size);

//for-in loop

// let student = {
//     name : "Rahul kumar ",
//     age:23,
//     cgpa:7.8,
//     ispass : true,
// };
// for(let key in student){
//     console.log("key=",key,"value=",student[key]);
// }

//print all even number from 1 to 100
// for(let num=0; num<=100; num++){
    // if (num%2!==0) this is for odd number
//     if (num%2===0){
//       console.log("num=",num);
//     }else{
//       console.log("odd num=",num);
//     }
// }

//game guess the number 

// let num = prompt("guess the number");
// if (num==25){
//   console.log("congratulation! you guess the correct number" );
// }
// else{
//   console.log("try again...");
// }

// let gameNum=23;
// let userNum = prompt("Guess the game number:");
// while(userNum != gameNum){
//   userNum=prompt("you entered wrong number. guess again..");
// }
// console.log("congratulation! you guess the correct number..");

// strings in java script 
//method of creating string in js
// let str ="apnacollege";
// console.log(str[2]);
// let str2= 'ambika';

// template literals in js 
// let specialString = "this is a template literals";
// console.log(typeof specialString);


// let obj ={
//   item : "pen",
//   price : 10,
// };
// let output  = `the coast of ${obj.item} is ${obj.price} rupees`;//template literals
// console.log(output);

// console.log("the coast of ", obj.item,"is", obj.price,"rupees");

// escape character in js 
// console.log("Ambika \n Chourasia")
// console.log("Ambika \t Chourasia")
                  
let fullName = prompt("enter your fullname without space");
let userName = "@"+fullName + fullName.length;
// let lenght = fullName.length;
// let userName = "@"+fullName+lenght;
let newUserName = console.log(userName);