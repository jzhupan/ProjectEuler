//Problem 1
// let multiplesOfThreeAndFive = []

// for (let i = 1; i < 1000; i++){

//         if(i % 3 === 0){
//             multiplesOfThreeAndFive.push(i)
//             //console.log(multiplesOfThree)
//         } else if (i % 5 === 0){
//             multiplesOfThreeAndFive.push(i)
//             //console.log(multiplesOfFive)
//         }

//     }
//     console.log (multiplesOfThreeAndFive)

// function SumArray(multiplesOfThreeAndFive){
//     let sum = 0

//     for (let i = 0; i < multiplesOfThreeAndFive.length ; i ++){
//         sum += multiplesOfThreeAndFive[i]
//     }
//     console.log(sum)
//     return sum
// }

// SumArray(multiplesOfThreeAndFive);


//Problem 7
/*
10,001st Prime
Problem 7
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 
10,0001st prime number?
*/

let numsArray = [];
let primeNums = [2];
let oddNums = []

//remainder 0 : num % 2 == 0

for(let i = 2; i <= 100; i++){
 if(i % 2 === 0 || i === 2){
    continue;
 } else if(i % 1 == 0 ){
    oddNums.push(i)
 }
}


console.log(oddNums)
