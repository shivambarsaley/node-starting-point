var Calculator = require('./src/calculator');
var Parser = require('./src/parser');

(() => {


  var operation = process.argv[2].toUpperCase();
  try{
    var operand1 = Parser.parseOperand(process.argv[3]);
    var operand2 = Parser.parseOperand(process.argv[4]);


    // [,,operand1,operation,operand2] = process.argv
    switch(operation){
      case 'ADD':
      // console.log(Calculator.sum(+operand1, +operand2));
      console.log(Calculator.sum(operand1, operand2));
      break;

      case 'SUB':
      console.log(Calculator.substract(operand1, operand2));
      break;

      case 'MUL':
      console.log(Calculator.multiply(operand1, operand2));
      break;

      case 'DIV':
      console.log(Calculator.divide(operand1, operand2));
      break;

      default:
      console.log('Invalid operation!');
    }
  }
  catch (e){

    console.log('Error caught', e.message)
    return;
  }

})();
