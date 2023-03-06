//Problem 1
let multiplesOfThreeAndFive = []

for (let i = 1; i < 1000; i++){

        if(i % 3 === 0){
            multiplesOfThreeAndFive.push(i)
            //console.log(multiplesOfThree)
        } else if (i % 5 === 0){
            multiplesOfThreeAndFive.push(i)
            //console.log(multiplesOfFive)
        }

    }
    console.log (multiplesOfThreeAndFive)

function SumArray(multiplesOfThreeAndFive){
    let sum = 0

    for (let i = 0; i < multiplesOfThreeAndFive.length ; i ++){
        sum += multiplesOfThreeAndFive[i]
    }
    console.log(sum)
    return sum
}

SumArray(multiplesOfThreeAndFive);