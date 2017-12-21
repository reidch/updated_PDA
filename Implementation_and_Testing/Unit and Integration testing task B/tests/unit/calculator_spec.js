var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add', function(){
    calculator.previousTotal = 10;
    calculator.add(8);
    assert.equal(calculator.runningTotal, 18);
  })

  it('should be able to subtract', function(){
    calculator.previousTotal = 10;
    calculator.subtract(8);
    assert.equal(calculator.runningTotal, 2);
  })

  it('should be able to multiply', function(){
    calculator.previousTotal = 10;
    calculator.multiply(8);
    assert.equal(calculator.runningTotal, 80);
  })

  it('should be able to divide', function(){
    calculator.previousTotal = 80;
    calculator.divide(10);
    assert.equal(calculator.runningTotal, 8);
  })

  it('should reset the runningTotal when a number is clicked', function(){
    calculator.runningTotal = 10;
    calculator.numberClick(4);
    assert.equal(calculator.runningTotal, 4)
  })

  it('should perform the add operation if the previous operation was add', function(){
    calculator.numberClick(8);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 10);
  })

  it('should perform the subtract operation if the previous operation was subtract', function(){
    calculator.numberClick(8);
    calculator.operatorClick('-');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 6);
  })

  it('should perform the multiply operation if the previous operation was multiply', function(){
    calculator.numberClick(8);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 16);
  })

  it('should perform the divide operation if the previous operation was divide', function(){
    calculator.numberClick(8);
    calculator.operatorClick('/');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 4);
  })

  it('should perform the correct operator when equals is pressed', function(){
    calculator.previousOperator = '+';
    calculator.operatorClick('=');
    assert.equal(calculator.previousOperator, null);
  })

  it('should update total', function(){
    calculator.previousTotal = 10;
    calculator.runningTotal = 12;
    assert.equal(calculator.newTotal, true);
  })

  it('should clear the running total', function(){
    calculator.runningTotal = 10;
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
  })
});
