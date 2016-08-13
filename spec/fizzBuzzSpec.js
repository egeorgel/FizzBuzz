var FizzBuzz = require("../src/fizzBuzz.js");
var fizzBuzz = new FizzBuzz();

describe("FIZZ BUZZ TEST ", function() {
	
	////////////////////////////
	////					////
	////	VERSION 2		////
	////					////
	////////////////////////////
	it("Should print Fizz whene a number is multiple of 3", function() {
		expect( fizzBuzz.multipleOfXRetrunFizz(3) ).toEqual("Fizz");
		expect( fizzBuzz.multipleOfXRetrunFizz(9) ).toEqual("Fizz");
		expect( fizzBuzz.multipleOfXRetrunFizz(12) ).toEqual("Fizz");
	})
	
	it("Should print number whene it's not multiple of 3 or 5", function() {
		expect( fizzBuzz.multipleOfXRetrunFizz(4) ).toEqual("4");
		expect( fizzBuzz.multipleOfXRetrunFizz(2) ).toEqual("2");
		expect( fizzBuzz.multipleOfXRetrunFizz(13) ).toEqual("13");
		
		expect( fizzBuzz.multipleOfYRetrunBuzz(2) ).toEqual("2");
		expect( fizzBuzz.multipleOfYRetrunBuzz(4) ).toEqual("4");
		expect( fizzBuzz.multipleOfYRetrunBuzz(13) ).toEqual("13");

	})
	
	it("Should print Buzz whene a number is multiple of 5", function() {
		expect( fizzBuzz.multipleOfYRetrunBuzz(5) ).toEqual("Buzz");
		expect( fizzBuzz.multipleOfYRetrunBuzz(10) ).toEqual("Buzz");
		expect( fizzBuzz.multipleOfYRetrunBuzz(20) ).toEqual("Buzz");
	})
	
	it("Should print number 1 to 100 with Fizz or Buzz", function() {
		expect( fizzBuzz.return100numbers().length ).toEqual(100);
		expect( fizzBuzz.return100numbers()[0] ).toEqual("1");
		expect( fizzBuzz.return100numbers()[2] ).toEqual("Fizz");
		expect( fizzBuzz.return100numbers()[7] ).toEqual("8");
		expect( fizzBuzz.return100numbers()[49] ).toEqual("Buzz");
		expect( fizzBuzz.return100numbers()[14] ).toEqual("Fizz");
		expect( fizzBuzz.return100numbers()[99] ).toEqual("Buzz");
	})
	

	////////////////////////////
	////					////
	////	VERSION 2		////
	////					////
	////////////////////////////
	it("Should print FizzBuzz whene a number is multiple of 3 and 5", function() {
		expect( fizzBuzz.multipleOfXAndYRetrunFizzBuzz(15) ).toEqual("FizzBuzz");
		expect( fizzBuzz.multipleOfXAndYRetrunFizzBuzz(15) ).toEqual("FizzBuzz");
	})
	
	it("Should print number 1 to 100 with Fizz or Buzz FizzBuzz", function() {
		expect( fizzBuzz.return100numbersV2().length ).toEqual(100);
		expect( fizzBuzz.return100numbersV2()[0] ).toEqual("1");
		expect( fizzBuzz.return100numbersV2()[2] ).toEqual("Fizz");
		expect( fizzBuzz.return100numbersV2()[7] ).toEqual("8");
		expect( fizzBuzz.return100numbersV2()[49] ).toEqual("Buzz");
		expect( fizzBuzz.return100numbersV2()[14] ).toEqual("FizzBuzz");
		expect( fizzBuzz.return100numbersV2()[99] ).toEqual("Buzz");
	})
	
	
	////////////////////////////
	////					////
	////	VERSION 3		////
	////					////
	////////////////////////////
	it("Should print Fizz whene a number is multiple of 4", function(){
		var fizz7Buzz = new FizzBuzz(4, 5);
		expect( fizz7Buzz.multipleOfXRetrunFizz(4) ).toEqual("Fizz");
		expect( fizz7Buzz.multipleOfXRetrunFizz(16) ).toEqual("Fizz");
		expect( fizz7Buzz.multipleOfXRetrunFizz(20) ).toEqual("Fizz");
		expect( fizz7Buzz.multipleOfXRetrunFizz(2) ).toEqual("2");
		expect( fizz7Buzz.multipleOfXRetrunFizz(6) ).toEqual("6");
	})
	
	it("Should print Buzz whene a number is multiple of 3", function() {
		var fizzBuzz3 = new FizzBuzz(4, 3);
		expect( fizzBuzz3.multipleOfYRetrunBuzz(3) ).toEqual("Buzz");
		expect( fizzBuzz3.multipleOfYRetrunBuzz(9) ).toEqual("Buzz");
		expect( fizzBuzz3.multipleOfYRetrunBuzz(12) ).toEqual("Buzz");
		expect( fizzBuzz3.multipleOfXRetrunFizz(2) ).toEqual("2");
	})
	
	it("Should print number 1 to 100 with Fizz or Buzz FizzBuzz => FIZZ 2, BUZZ 7", function() {
		var fizz2Buzz7 = new FizzBuzz(2, 7);
		expect( fizz2Buzz7.return100numbersV2().length ).toEqual(100);
		expect( fizz2Buzz7.return100numbersV2()[0] ).toEqual("1");
		expect( fizz2Buzz7.return100numbersV2()[1] ).toEqual("Fizz");
		expect( fizz2Buzz7.return100numbersV2()[6] ).toEqual("Buzz");
		expect( fizz2Buzz7.return100numbersV2()[13] ).toEqual("FizzBuzz");
		expect( fizz2Buzz7.return100numbersV2()[15] ).toEqual("Fizz");
		expect( fizz2Buzz7.return100numbersV2()[20] ).toEqual("Buzz");
	})
	
	////////////////////////////
	////					////
	////	HELPER			////
	////					////
	////////////////////////////
	it("Should return Fizz if input multiple of 3, Buzz if multiple of 5, Fizz if multiple of both, number in string else", function() {
		expect( fizzBuzz.helper(15) ).toEqual("Fizz");
		expect( fizzBuzz.helper(5) ).toEqual("Buzz");
		expect( fizzBuzz.helper(3) ).toEqual("Fizz");
		expect( fizzBuzz.helper(2) ).toEqual("2");
	})
	
});