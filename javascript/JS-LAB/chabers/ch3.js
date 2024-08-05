// chabter3

//  example1 template literals

//  multiline template
 let age = 20 ;
 let name = 'ubax saalax xuseen';
let massage = (`magacegu waa ${name}
 waxaan ahahay arday.
waxaan ku noolahy magaalada muqdisho,
dadeydu waa ${age} `);
console.log(massage)


// 
// let name="Imaan";
// let age=23;
// let massage = ( `my name is name ${name}
//  and Im ${age} years old.
//  im student `);
//  console.log(massage); 


// using tepmlate literals with expression

/*  const num1 = 5;
const num2 =10;
const sum = `the sum of ${num1} and ${num2} is ${num1+num2}.`;

 console.log(sum);
 const product = `the product of ${num1} and ${num2} is ${num1*num2}`;
console.log(product);*/

// exaple2 variable swapping 

//  1) using temporay variable
// let a = 30;
// let b = 40;
// console.log('before swipping a=',a,'and b=',b);
// let temp = a;
// a = b;
// b =temp ;
// console.log('after swipping a=',a,'and b=',b);

// // 2) using arithmatic operation 
// let a = 15 ;
// let b = 5;
//  console.log('before swippping a=',a, 'and b=',b);
//  a = a+b;
//  b=a-b;
//  a = a-b;
//  console.log('after swipping a=',a,'and b=',b);
// // 
// //  example3 if else statement
// let age = parseInt(prompt('what is your age'));
// if(age >=18)
// console.log('you are adult')
// else 
// console.log('you are minor')

// // example4 elseif statement
// let grade = parseInt(prompt('enter your grade'));
// if(grade >=100){
// console.log('wrong grade')
// }
// else if(grade>=90){
// console.log('your grade is A');
// }
// else if(grade>=80){

// console.log('your grade is B');
// }
// else if(grade>=70){
// console.log('your grade is C');
// }
// else if(grade>=60){
// console.log(' your grade is D');
// }
// else{
// console.log('you failed');
// }

//  practice 

// document.write('<h2> before swipping </h2>');
// let str1 = prompt('enter str1');
// let str2 = prompt('enter str2');
// document.write(`<p style="font-size: 20px;"> first word <b>${str1}</b> and second word is <b>${str2}</b> </p>`);
//  let temp = str1
// str1 = str2;
// str2 = temp;
// document.write(' <h2> after  swipping </h2>');
// document.write(`<pstyle="font-size: 20px;"> first word  <b>${str1}</b> and second word is <b>${str2}</b> </p>`);

// let age =39;
// let iadult = age >=18 ? true:false;
// console.log(iadult)
 
// example1 switch statement 

// let day =prompt('enter a day');
// switch (day){
//     case 'saturday':
//         console.log('its start day of the weak')
//         break;
//     case 'wednesday':
//         console.log('it is the weakend day')
//         break;
//     default:
//         console.log('its a regular day ')      
    
// }

// example2 switch statement

// let number = parseInt(prompt('soo gali number u dhaxeeyo 1-7'));
// switch (number){
//     case 1:
//         console.log('waa maalin sabti ah')
//         break;
//     case 2:
//         console.log('waa maalin axada')
//         break;
//     case 3:
//         console.log('waa maalin isniin ah')
//         break;
//     case 4:
//         console.log('waa maalin talaado ah')
//         break;
//     case 5:
//         console.log('waa maalin arbaco ah')
//         break;
//     case 6:
//         console.log('waa maalin khamiis ah')
//         break;
//     case 7:
//         console.log('waa maalin jimco ah')
//         break;
//     default:
//         console.log('ma aadan aadan soo galin tiro u dhaxeyso 1-7 ')
// }


// example3 for loop

// for (let i=1; i<=5; i++){
//     console.log(i);
// }

//
//  example4 while loop
// i=1;
// while(i<=5){
//     console.log(i)
//     i++;
// }

// example5 do while loop

// let i=1;
// do{
// console.log(i)
// i++;
// }while(i<=5)

// // printing odd numbers(1-10) using countenue


// for(let i=0; i<=10; i++){
//     if(i%2==0)
//     continue;
// console.log(i)
// }

// // printing even numbers(1-10) using countenue


// for(let i=0; i<=10; i++){
//     if(i%2!=0)
//     continue;
// console.log(i)
// }