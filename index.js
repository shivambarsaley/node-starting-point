var Calculator = require('./src/calculator');
var Parser = require('./src/parser');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.use(bodyParser.json());

//Expects a GET Request with query http://localhost:3000/ADD?operand1=2&operand2=20
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

//Expects a POST Request with body http://localhost:3000/SUB   {"operand1":1, "operand2":"2"}
//In a real world scenario This request should never have been POST.
//Its just for an easy demonstration
app.post('/SUB', function (req, res) {

  try{
  var operand1 = Parser.parseOperand(req.body.operand1);
  var operand2 = Parser.parseOperand(req.body.operand2);
  res.send('Result is ' + Calculator.substract(operand1, operand2));
  }
  catch (e){

    res.status(500).send(e.message);
  }
});

//Expects a POST Request with body http://localhost:3000/DIV   {"operand1":1, "operand2":"2"}
//In a real world scenario This request should never have been POST.
//Its just for an easy demonstration
app.post('/DIV', function (req, res) {

  try{
  var operand1 = Parser.parseOperand(req.body.operand1);
  var operand2 = Parser.parseOperand(req.body.operand2);
  res.send('Result is ' + Calculator.divide(operand1, operand2));
  }
  catch (e){

    res.status(500).send(e.message);
  }
});

//Expects a GET Request with query http://localhost:3000/ADD?operand1=2&operand2=20
app.get('/MUL', function (req, res) {

  try{
  var operand1 = Parser.parseOperand(req.query.operand1);
  var operand2 = Parser.parseOperand(req.query.operand2);
  res.send('Result is ' + Calculator.multiply(operand1, operand2));
  }
  catch (e){

    res.status(500).send(e.message);
  }
});
app.all('*', function(req, res){
  res.status(404).sendFile('/statics/404.png', { root: __dirname });
});




app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
