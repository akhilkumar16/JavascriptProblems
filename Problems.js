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
//UC5//
//inch to feet//
let inchs = 42;
let ft = inchs / 12;
console.log("42 in = " + ft + " feet");
//Rectangular//
let len = 60; 
let breadth = 40 
//Rectangle area//
let area = (len*breadth);
let areas = (area * 0.0929).toFixed(2);
console.log('area in sq metres = ' + areas + ' sq-m');
//25 plots//
let totalArea = areas*25;
console.log('Total Area of 25 such plots in sq-m = ' + totalArea + " sq-m" );
//area of 25 such plots//
let areaInAcre = (totalArea / 4047).toFixed(2);
console.log('Total Area of 25 such plots in acre = ' + areaInAcre +' acres');
