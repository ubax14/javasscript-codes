// let num1 = parseInt(prompt('enter the first number'))
// let num2 = parseInt(prompt('enter the second number'))
// let operator = prompt('+,-,*,/')
// switch (operator) {
//     case '+':
//         console.log(num1 + num2)
//         break;
//     case '-':
//         console.log(num1 - num2)
//         break;
//     case '*':
//         console.log(num1 * num2)
//         break;
//     case '/':
//         console.log(num1 / num2)
//         break;
//     default:
//         console.log("its invalid operator")

// }

// for(let i=2; i<=20; i++){
//     if(i%2!=0)
//     continue
// console.log(i)
// }

// i=10;
// while(i>=1){
//     console.log(i)
//     i--;
// }
// let number;
// do{
//     number = parseInt(prompt('enter number between 1-10'));

//     if(number < 1 || number > 10){
//     continue;
// }
// console.log("valid number entered:", number);
                    
// }while(number < 1 || number > 10)


// let number = 2;
// while(number <= 20){
//     if(number % 6 === 0){
    
//     break;
// }
// console.log(number);
// number+= 2;
// }

// for(let number = 1;number < 3; number+=1){

//     let number = parseInt(prompt("enter number between 1-12"))
// switch(number){
//     case 1:
//         console.log("the corresponding month is january")
//         break;
//     case 2:
//         console.log("the corresponding  month is veber")
//         break;
//     case 3:
//         console.log("the corresponding  month is march")
//         break;
//     case 4:
//         console.log("the corresponding month is Aprl")
//         break;
//     case 5:
//         console.log("the corresponding month is may")
//         break
//     case 6:
//         console.log("the corresponding month is jun")
//         break
//     case 7:
//         console.log("the corresponding month is jul")
//         break
//     case 8:
//         console.log("the corresponding month is aug")
//         break
//     case 9:
//         console.log("the corresponding month is seb")
//         break
//     case 10:
//         console.log("the corresponding month is oct")
//         break
//     case 11:
//         console.log("the corresponding month is nove")
//         break;
//     case 12:
//         console.log("the corresponding month is decem")
//         break;
//         default:
//             console.log(' invalid number.please enter month number between 1-12')
//      }
//     }



     /* let password;
     do{
        password = prompt('enter password');
        if(password === 'password123'){
            console.log('success! you entered the correct password.');
            break;
    
        }else{
            console.log('encorrect password. try again');
        }
     }while(true); */




     
     // for(let number = 1;number < 3; number+=1){

//     let number = parseInt(prompt("enter number between 1-12"))
// switch(number){
//     case 1:
//         console.log("the corresponding month is january")
//         break;
//     case 2:
//         console.log("the corresponding  month is veber")
//         break;
//     case 3:
//         console.log("the corresponding  month is march")
//         break;
//     case 4:
//         console.log("the corresponding month is Aprl")
//         break;
//     case 5:
//         console.log("the corresponding month is may")
//         break
//     case 6:
//         console.log("the corresponding month is jun")
//         break
//     case 7:
//         console.log("the corresponding month is jul")
//         break
//     case 8:
//         console.log("the corresponding month is aug")
//         break
//     case 9:
//         console.log("the corresponding month is seb")
//         break
//     case 10:
//         console.log("the corresponding month is oct")
//         break
//     case 11:
//         console.log("the corresponding month is nove")
//         break;
//     case 12:
//         console.log("the corresponding month is decem")
//         break;
//         default:
//             console.log(' invalid number.please enter month number between 1-12')
//      }
//     }





var average = totalMarks/3
            
                                  
            switch(average){
                case (average <= 100 && average>=90):
                      console.log("A")
    

                case (  average <= 90 && average >=80):
                      
                      console.log('B')

                case (average <= 80 && average >=70):
                        g
                        console.log("C")


                case (average <= 70 && average >=60):
                     
                     console.log("A")}




















                     for (let i = 1; i<=5; i++){
                        let html ,javascript,css
            
                        let name = prompt('Enter your name');
                        
                        do{
                        html =parseInt(prompt('Enter html marks'));
                    }while(html > 100)
                    do{    
                    css =parseInt(prompt('Enter css marks'));
                }while (css > 100) 
                    
                        do{
                         javascript =parseInt(prompt('Enter js marks'));
                        }while(javascript > 100)













                        <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student grade Book</title>
    <style>
        table{
            border-collapse: collapse;
            
        }
        th,td{
            padding: 5px;
            border: 2px solid black;
        }
    </style>
</head>
<body>
    <h1>Student Grade Book </h1>
    <table border="1">
        <th>StudentName</th>
        <th>Total Marks</th>
        <th>Grade</th>
    <script>
       for (let i = 1; i<=5; i++){
                        let html ,javascript,css
            
                        let name = prompt('Enter your name');
                        
                        do{
                        html =parseInt(prompt('Enter html marks'));
                    }while(html > 100)
                    do{    
                    css =parseInt(prompt('Enter css marks'));
                }while (css > 100) 
                    
                        do{
                         javascript =parseInt(prompt('Enter js marks'));
                        }while(javascript > 100) 

                        
        let Grade;
            switch (true) {
                case result>=250 :
                    Grade = 'A'
                    break;
                case result >= 200 :
                    Grade = 'B'
                    break;
                case result >= 150:
                    Grade = 'C'
                    break;
                case result >= 100:
                    Grade = 'D'
                    break;
                
                default:
                Grade = 'F'
                    break;
            }
            
            document.write('<tr>')
            document.write('<td>' + studentName + '</td>')
            document.write('<td>' +resu + '</td>')
            document.write('<td>' + Grade + '</td>')
            document.write('</tr>')


        }
    </script>
</table>
</body>
</html>