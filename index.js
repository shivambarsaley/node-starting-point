var Calculator = require('./src/calculator');
var Parser = require('./src/parser');

var express = require('express');
var app = express();

app.get('/ADD', function (req, res) {

  try{
  var operand1 = Parser.parseOperand(req.query.operand1);
  var operand2 = Parser.parseOperand(req.query.operand2);
  res.send('Result is ' + Calculator.sum(operand1, operand2));
  }
  catch (e){

    res.status(500).send(e.message);
  }
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
