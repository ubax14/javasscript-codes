

// increment
          // postfix
        // let x = 5;
        // let y = x++;
        // console.log(x,y)

          // prefix
        // let x = 10;
        // let y = ++x;
        // console.log(x,y)
// programin1
        // using console
        // console.log("hello word")

        // using document.write
        // document.write("hello , world");
       //  using alert
    //    alert("hello world");
// program2
// const num1 = 5;
// const num2 = 3;
// const sum = num1+num2
// console.log('the sum of'+num1 +"and" +num2,sum);

// program3
//    const num1 = parseInt(prompt("enter num1"));
//    const num2 = parseInt(prompt('enter num2'));
//    const sum = num1+num2
//  console.log('the sum of', +num1+ 'and', +num2 , 'is',sum);

// program4
// const number = parseInt(prompt('enter a number'))
// const result = Math.sqrt(number)
// console.log('the square root of',number, 'is',result)

// execise
// const name = prompt("enter your name");
// const curentyyer = new Date().getFullYear();
// const birthyeer = parseInt(prompt('enter your birthyer'))



// let age = curentyyer - birthyeer;
// console.log("hello",name,"your age is",age)
// console.log('your name is',name)
// const name = prompt("enter your name");

        // let a=20;
        // let b=a++;
        // console.log("b is",b)
        // console.log("a is",a)
        //  document.write(b)
        // document.write('<br>',a)
// alert(a)
// addition
    // let x = 5;
    // let y = 3;
    //  console.log('x+y =',x+y);
    // // subtruction
    //  console.log("x-y = ",x-y);
    // // mutiplication
    //  console.log("x*y = ",x * y);
    // // /devision
    //  console.log("x/y = ",x / y);
    // // remainder
    // console.log("x%y = ",x % y);
    // // icrement
    // console.log("++x = ",+ +x);
    // console.log("x++ = ",x++);
    
    // // decerment
    // console.log("--x = ",--x);
    // console.log("x-- = ", x--);
    // // decreased to 5
    // console.log("x = ",x);
    // // exponentiation
    // console.log("x**y = ",x ** y);
    // // equal operator
    // console.log(2 == "2");
    // // not equal to
    // console.log(3 != 2);
    // console.log("hello" != "hello");
    // // strict equal operator
    //  console.log(2 === 2);
    //  console.log(2 === "2");
    // // strict not equal operator
    // console.log(2 !== "2");
    // console.log(2 !== 2);
    // // logical AND
    // console.log(true && true);
    // console.log(true && false);
    // // // logical OR
    // console.log(true || false);
    // // logical not
    // console.log(!true);

    // ternery
    // let age = 20;
    // let massage = age > 18 ? "adult":"minror";
    // console.log(massage)
    // let age = 13;
    // let massage = age < 18 ? "teniger":"adult";
    // console.log(massage)

    // lab practice
//  const name = prompt("enter your name");
//  const math = parseInt(prompt("enter subject1 marks"));
//  const js = parseInt(prompt("enter subject2 marks"));
//  const dbms = parseInt(prompt("enter subject3 marks"));
//  const mutimedia = parseInt(prompt("enter subject4 marks"));
//  const engl = parseInt(prompt("enter subject5 marks"));
//  let totalMarks = math+js+dbms+mutimedia+engl;
//   let average = totalMarks/5;
// console.log('Name:',name);
// console.log('Total:',totalMarks);
// console.log(' Avarage ;',average)

//  document.write(' <h2> Name:', name,' </h2>');
//  document.write (' <h2> Total:', totalMarks,'</h2>');
//  document.write(' <h2> Avarage :', average,'</h2>');
//  document.write(' <h3> Math :', math,'</h3>');
//  document.write(' <h3> Javascript :', js,'</h3>');
//  document.write(' <h2> Database :', dbms,'</h2>');
//  document.write(' <h2> Multimeda :', mutimedia,'</h2>');
//  document.write(' <h2> English :', engl,'</h2>');
 
// testlet 

// let length = 80;
// let widith = 90;
//  let areaRectangla = length * widith;
// console.log("area of rectangle is",areaRectangla)

// chabter3

//  example1 template literals

//  multiline template
//  let age = 20 ;
//  let name = 'ubax saalax xuseen';
// let massage = (`magacegu waa ${name}
//  waxaan ahahay arday.
// waxaan ku noolahy magaalada muqdisho,
// dadeydu waa ${age} `);
// console.log(massage)


// 
// let name="Imaan";
// let age=23;
// let massage = ( `my name is name ${name}
//  and Im ${age} years old.
//  im student `);
//  console.log(massage); 


// using tepmlate literals with expression

// const num1 = 5;
// const num2 =10;
// const sum = `the sum of ${num1} and ${num2} is ${num1+num2}.`;

// console.log(sum);
//  const product = `the product of ${num1} and ${num2} is ${num1*num2}`;
// console.log(product);

// exaple2 variable swapping 

// //  1) using temporay variable
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

// //  example3 if else statement
// let age = parseInt(prompt('what is your age'));
// if(age >=18)
// console.log('you are adult')
// else 
// console.log('you are minor')

// example4 elseif statement
// let grade = parseInt(prompt('enter your grade'));
// if(grade >=100)
// console.log('wrong grade')
// else if(grade>=90)
// console.log('your grade is A')
// else if(grade>=80)
// console.log('your grade is B')
// else if(grade>=70)
// console.log('your grade is C')
// else if(grade>=60)
// console.log(' your grade is D')
// else
// console.log('you failed')

// document.write('<h2> before swipping </h2>');
// let str1 = prompt('enter str1');
// let str2 = prompt('enter str2');
// document.write(`<p style="font-size: 20px;"> first word <b>${str1}</b> and second word is <b>${str2}</b> </p>`);
//  let temp = str1
// str1 = str2;
// str2 = temp;
// document.write(' <h2> after  swipping </h2>');
// document.write(`<p> first word  <b>${str1}</b> and second word is <b>${str2}</b> </p>`);

