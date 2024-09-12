
function calculateFinalScore(obj){
    if(typeof obj !== 'object' || obj.testScore > 50 || obj.schoolGrade > 30){
        return 'invalid input'
    }

    let result = obj.testScore + obj.schoolGrade;
    if(obj.isFFamily){
        result += 20;
    }
    if(result >= 80){
        return true;
    }
    return false;
}

console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }))
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }))
console.log(calculateFinalScore("hello"))
console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }))
