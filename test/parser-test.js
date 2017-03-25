var assert = require('assert');
var Parser = require('../src/parser');
describe('parser', function() {
  describe('parseOperand', function() {
    it('should return error when operands are invalid', function() {
      assert.throws(()=> {Parser.parseOperand('A112')}, Error, "Invalid Operand A112" );
    });

    it('should return the correct numerical value for valid input', function(){

      assert.equal(2.2, Parser.parseOperand("2.2"));
    })
  });
});
