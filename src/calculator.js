function sum(a, b) {

  return a + b;
}

function substract(a, b){

  return a - b;
}

function divide(a, b){

  if(b === 0){

    throw new Error("Cannot Divide By 0")
  }
  return a / b;
}

function multiply(a, b){

  return a * b;
}

module.exports = {
  sum: sum,
  multiply: multiply,
  divide: divide,
  substract: substract
}


/*exports.sum = function (a, b) {
  return a + b;
}*/
// exports.sum = (a, b) => a + b;
