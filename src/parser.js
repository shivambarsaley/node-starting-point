module.exports = {

  parseOperand: function (operand){

    var number = parseFloat(operand);
    if(isNaN(number)){
      throw new Error(`Invalid Operand ${operand}`);
    }
    return number
  }
}
