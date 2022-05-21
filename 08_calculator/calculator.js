const add = function() {
  let value = 0;
	for (var i = 0; i<arguments.length; i++){
    value+= arguments[i];
}
  return value;
};

const subtract = function() {
	let value = arguments[0];
  for (var i=1; i<arguments.length; i++){
    value -= arguments[i];
  }
  return value;
};

const sum = function(array) {
  const sum = array.reduce((a, b) => a + b, 0);
  return sum;

};

const multiply = function(array) {
  const value = array.reduce((a, b) => a * b, 1);
  return value;

};

const power = function(exp,pow) {
  let value = 1;
  for (i=0; i<pow; i++){
    value *= exp;
  }
  return value;
};

const factorial = function(number) {
  let value = 1;
  if (number ==0 ){
    return value;
  }
  else {
    for (let i = number; i > 0; i--){
      value *= i;
    }
    return value;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
