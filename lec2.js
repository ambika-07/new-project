//operators in js
let a = 5;
let b = 5;
console.log("a=",a,"& b=",b);
console.log("a++", a++);
console.log("a=", a);
console.log("a+b=",a+b);
console.log("a-b=",a-b);

//assignment operators
let c = 5;
// c += 1;//c=c+1
c -= 4;
// c *= 2;
console.log("c=",c);

//comparision operator
let d = 6;
let e = 3;
console.log("6==3", d==e);//false

//logical operator
let f =5;
let g = 2;
// let cond1 = f>g;
// let cond2 = f===2;
// console.log("cond1&&cond2=", cond1 && cond2);

// let cond1 = f<g;
// let cond2 = f===5;
// console.log("cond1&&cond2=", cond1 && cond2);

// console.log("cond1&&cond2=", f<g && f ===5);
console.log("cond1 || cond2=", f<g || f === 5);
console.log("!(f<g)=", !(f<g));
console.log("!(f<g)=", !(f === g));
//conditional statement
// if , if-else, else-if-else

// let colors;
// if(mode==="dark-mode"){
//     colors="black";
// }


// let age=15;
// if(age>=18){
//     console.log("Yes! you can vote");
// }
// if(age<18){
//     console.log("no! you can't vote");
// }

// let mode="light";
// let color;
// if(mode==="dark"){
//     color="black";
// }
// if(mode==="light"){
//     color="white";
// }
//  console.log(color);

 //odd or even 
 let num = 10;

 if (num %2 === 0){
     console.log(num, " is even");
 }
 else{
    console.log(num, "is odd");
 }

 //if else-if else
 let mode="blue";
let color;
if(mode==="dark"){
    color="black";
}
else if(mode==="blue"){
    color="blue";
}else if(mode==="pink") {
     color="pink";
}else {
    color="white";
}
 console.log(color);
//ternary operators
let fruit=12;
let result = fruit>=18 ? "apple": "not apple";
console.log(result);

//number is multiple of 5 or not
// let number=prompt("enter a number");
// if ("num%5===0"){
//     console.log(number,"is multiple of 5");
// }else{
//     console.log(number,"is not a multiple of 5");
// }

//give grade to students according to their score 
let score=prompt("enter your score");
let grade;
if (score>=80 && score <= 100){
    console.log("grade A");
}else if (score>=70 && score <= 89){
    console.log("grade B");
}else if (score>=60 && score <= 69){
    console.log("grade C");
}else if (score>=50 && score <= 59){
    console.log("grade D");
}else{
    console.log("grade E"); 
}