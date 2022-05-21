const fibonacci = function(num) {

    num = parseInt(num);
    if (num == 1 || num ==0){
        return num;
    }

    else if (num <0){
        return "OOPS";
    }

    else {
        array =[0,1];
        for (i=2; i<=num; i++){
            array[i]= array [i-2]+ array [i-1];
        }
    }
    return array[num];
};

// Do not edit below this line
module.exports = fibonacci;
