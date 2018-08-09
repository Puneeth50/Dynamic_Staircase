var assert = require('assert');
var combination1_2 = require('./stairs_with_array1_2.js');
var combination1_3_5 = require('./stairs_with_array1_3_5.js');
describe('Check only for positive integers are accepted for combination array [1,2] [1,3,5]', function() {
   
   it('should return enter positive value for combination [1,2]', function() {
      assert.equal(combination1_2("-1"),"please enter positive integer starting with zero");
	  assert.equal(combination1_2("a"),"please enter positive integer starting with zero");
	  assert.equal(combination1_2("&"),"please enter positive integer starting with zero");
    });
	
	it('should return enter positive value for combination [1,3,5]', function() {
      assert.equal(combination1_3_5("-1"),"please enter positive integer starting with zero");
	  assert.equal(combination1_3_5("a"),"please enter positive integer starting with zero");
	  assert.equal(combination1_3_5("&"),"please enter positive integer starting with zero");
    });

	it('should return 1 possible routes for 0,1 steps and 34 combinations for 9 steps with array combination [1,2]', function() {
      assert.equal(combination1_2("0"),1);
	  assert.equal(combination1_2("1"),1);
	   assert.equal(combination1_2("9"),55);
    });
	
	it('should return 1 possible routes for 0,1,2 steps and 34 combinations for 9 steps with array combination [1,3,5]', function() {
      assert.equal(combination1_3_5("0"),1);
	  assert.equal(combination1_3_5("1"),1);
	  assert.equal(combination1_3_5("2"),1);
	   assert.equal(combination1_3_5("9"),34);
    });
	
	});