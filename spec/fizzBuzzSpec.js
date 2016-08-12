describe("FIZZ BUZZ TEST ", function() {
	var FizzBizz = require("../src/fizzBuzz.js");
	////////////////////////////
	////					////
	////	VERSION 2		////
	////					////
	////////////////////////////
	it("Should print Fizz whene a number is multiple of 3", function() {
		expect( FizzBizz.multipleOf3RetrunFizz(3) ).toEqual("Fizz");
		expect( FizzBizz.multipleOf3RetrunFizz(9) ).toEqual("Fizz");
		expect( FizzBizz.multipleOf3RetrunFizz(12) ).toEqual("Fizz");
	})
	
	it("Should print number whene it's not multiple of 3 or 5", function() {
		expect( FizzBizz.multipleOf3RetrunFizz(4) ).toEqual("4");
		expect( FizzBizz.multipleOf3RetrunFizz(2) ).toEqual("2");
		expect( FizzBizz.multipleOf3RetrunFizz(13) ).toEqual("13");
	})
	
	it("Should print Buzz whene a number is multiple of 5", function() {
		expect( FizzBizz.multipleOf5RetrunBuzz(5) ).toEqual("Buzz");
		expect( FizzBizz.multipleOf5RetrunBuzz(10) ).toEqual("Buzz");
		expect( FizzBizz.multipleOf5RetrunBuzz(20) ).toEqual("Buzz");
	})
	
	it("Should print number 1 to 100 with Fizz or Buzz", function() {
		expect( FizzBizz.return100numbers()[0] ).toEqual("1");
		expect( FizzBizz.return100numbers()[2] ).toEqual("Fizz");
		expect( FizzBizz.return100numbers()[7] ).toEqual("8");
		expect( FizzBizz.return100numbers()[49] ).toEqual("Buzz");
		expect( FizzBizz.return100numbers()[14] ).toEqual("Fizz");
		expect( FizzBizz.return100numbers()[99] ).toEqual("Buzz");
	})
	

	////////////////////////////
	////					////
	////	VERSION 2		////
	////					////
	////////////////////////////
	it("Should print FizzBuzz whene a number is multiple of 3 and 5", function() {
		expect( FizzBizz.multipleOf3And5RetrunFizzBuzz(15) ).toEqual("FizzBuzz");
		expect( FizzBizz.multipleOf3And5RetrunFizzBuzz(15) ).toEqual("FizzBuzz");
	})
	
	it("Should print number 1 to 100 with Fizz or Buzz FizzBuzz", function() {
		expect( FizzBizz.return100numbersV2()[0] ).toEqual("1");
		expect( FizzBizz.return100numbersV2()[2] ).toEqual("Fizz");
		expect( FizzBizz.return100numbersV2()[7] ).toEqual("8");
		expect( FizzBizz.return100numbersV2()[49] ).toEqual("Buzz");
		expect( FizzBizz.return100numbersV2()[14] ).toEqual("FizzBuzz");
		expect( FizzBizz.return100numbersV2()[99] ).toEqual("Buzz");
	})
	
	
	////////////////////////////
	////					////
	////	HELPER			////
	////					////
	////////////////////////////
	it("Should return Fizz if input multiple of 3, Buzz if multiple of 5, Fizz if multiple of both, number in string else", function() {
		expect( FizzBizz.helper(15) ).toEqual("Fizz");
		expect( FizzBizz.helper(5) ).toEqual("Buzz");
		expect( FizzBizz.helper(3) ).toEqual("Fizz");
		expect( FizzBizz.helper(2) ).toEqual("2");
	})
	
});