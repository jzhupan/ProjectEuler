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

/*Problem 2 - Even Fibonacci Numbers
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with and, the first terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/








//Problem 7
/*
10,001st Prime
Problem 7
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 
10,0001st prime number?
*/

// let primeNums = [];
// let primeNums = [2];
// let oddNums = [];
// let moreThanTwoPrimes = [];


// for(let i = 2; i <= 51; i++){

//  if(i % 2 === 0 || i === 2){
//     continue;
//  }  else {
//    oddNums.push(i)
//  }
// }


let primeNums = []
for(let i = 2; i <= 51; i++){
   primeNums.push(i)
}


primeNums = primeNums.filter((number) => {
   for (let i = 2; i <= Math.sqrt(number); i++){
      if(number % i === 0 ) {
         return false;
      } 
   }
   return number >= 2;
})


console.log(primeNums)

