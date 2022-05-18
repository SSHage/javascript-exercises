const removeFromArray = function(array, ...num) {
    let i;
    let inputs = [...num];

    newArray = array.filter (a => !inputs.includes(a));

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
