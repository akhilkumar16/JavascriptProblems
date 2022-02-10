//uc1// Random Numbers
let Random_number = Math.floor(Math.random() * 10); 
console.log("Random Number is: " + Random_number);  
//UC2//
let Dice_Number = Math.floor(Math.random() * 6)+1;  
console.log("Dice Number is: " + Dice_Number ); 
// UC3//
let Dice_Number1 = Math.floor(Math.random()*6)+1; 
console.log(Dice_Number1 ); 
let Dice_Number2=Math.floor(Math.random()*6)+1;  
console.log(Dice_Number2 ); 
console.log("Sum of Two Random Dice Number:- " + (Dice_Number1+Dice_Number2)); 
//UC4//
let twoDigNum;
let sum=0;
for (let i = 0; i < 5; i++)
{
    twoDigNum = Math.floor(Math.random() * 90) + 10;
    console.log('Number = ' + twoDigNum);
    sum +=twoDigNum;   
}  
console.log('Sum of 5 two digits number is = ' + sum);
console.log('Average of the sum of the 5 two digits number is = ' + sum/5);
