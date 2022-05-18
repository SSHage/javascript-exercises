const sumAll = function(num1,num2) {

    if (typeof num1 != "number" || typeof num2 != "number"){
        return "ERROR";
    }

    let i;
    let sum = 0;
    let smallNum, largeNum;
    if (num2>num1){
        largeNum=num2;
        smallNum=num1;
    }
    else{
        largeNum=num1;
        smallNum=num2;
    }

    if (smallNum <0){
        return "ERROR";
    }

    for (i=smallNum; i<=largeNum; i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
