var assert = require('assert');
var Calculator = require('../src/calculator');
describe('Calculator', function() {
  describe('sum', function() {
    it('should return 2 when inputs are 1,1', function() {
      assert.equal(2, Calculator.sum(1,1));
    });
  });

  describe('substract', function() {
    it('should return 2 when inputs are 5,3', function() {
      assert.equal(2, Calculator.substract(5,3));
    });
  });

  describe('multiply', function() {
    it('should return 4 when inputs are 2,2', function() {
      assert.equal(4, Calculator.multiply(2,2));
    });
  });

  describe('divide', function() {
    it('should return 4 when inputs are 8,2', function() {
      assert.equal(4, Calculator.divide(8,2));
    });

    it('should return Error when dividing by zero', function() {

      assert.throws(() => {Calculator.divide(4, 0)}, Error, 'Cannot Divide By 0')
    })
  });
});
