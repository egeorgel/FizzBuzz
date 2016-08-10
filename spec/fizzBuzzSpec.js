//var FizzBuzz = require('../lib/fizzBuzz');

describe("VERSION 1 ", function() {
	
	it("Should print Fizz whene a number is multiple of 3", function() {
		expect( multipleOf3RetrunFizz(3) ).toEqual("Fizz");
		expect( multipleOf3RetrunFizz(9) ).toEqual("Fizz");
		expect( multipleOf3RetrunFizz(12) ).toEqual("Fizz");
	})
	
	it("Should print number whene it's not multiple of 3 or 5", function() {
		expect( multipleOf3RetrunFizz(4) ).toEqual("4");
		expect( multipleOf3RetrunFizz(2) ).toEqual("2");
		expect( multipleOf3RetrunFizz(13) ).toEqual("13");
	})
	
	it("Should print Buzz whene a number is multiple of 5", function() {
		expect( multipleOf5RetrunBuzz(5) ).toEqual("Buzz");
		expect( multipleOf5RetrunBuzz(10) ).toEqual("Buzz");
		expect( multipleOf5RetrunBuzz(20) ).toEqual("Buzz");
	})
	
	it("Should print number 1 to 100 with Fizz or Buzz", function() {
		expect( return100numbers()[0] ).toEqual("1");
		expect( return100numbers()[2] ).toEqual("Fizz");
		expect( return100numbers()[7] ).toEqual("8");
		expect( return100numbers()[49] ).toEqual("Buzz");
		expect( return100numbers()[14] ).toEqual("Fizz");
		expect( return100numbers()[99] ).toEqual("Buzz");
	})
	
});

describe("VERSION 2 ", function() {
	
	it("Should print FizzBuzz whene a number is multiple of 3 and 5", function() {
		expect( multipleOf3And5RetrunFizzBuzz(15) ).toEqual("FizzBuzz");
		expect( multipleOf3And5RetrunFizzBuzz(15) ).toEqual("FizzBuzz");
	})
	
	
	it("Should print number 1 to 100 with Fizz or Buzz FizzBuzz", function() {
		expect( return100numbersV2()[0] ).toEqual("1");
		expect( return100numbersV2()[2] ).toEqual("Fizz");
		expect( return100numbersV2()[7] ).toEqual("8");
		expect( return100numbersV2()[49] ).toEqual("Buzz");
		expect( return100numbersV2()[14] ).toEqual("FizzBuzz");
		expect( return100numbersV2()[99] ).toEqual("Buzz");
	})
});
