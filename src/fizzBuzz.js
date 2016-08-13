////////////////////////////
////					////
////	FIZZ BUZZ CLASS	////
////					////
////////////////////////////
class FizzBuzz {
	
	constructor(numberFizz = 3, numberBuzz = 5) {
		this.numberFizz = numberFizz;
		this.numberBuzz = numberBuzz;
	}
	
	////////////////////////
	////				////
	////	VERSION 1	////
	////				////
	////////////////////////
	/**
	 *	Can transform a number in a string, if it's multiple of 3 return Fizz
	 * 	else number in string
	 *	@input int 
	 *	@output String
	 */
	multipleOfXRetrunFizz(number) {
		return (number%this.numberFizz == 0 ? "Fizz" : number.toString() );
	}
	
	/**
	 *	Can transform a number in a string, if it's multiple of 5 return Buzz
	 *	else number in string
	 *	@input int 
	 *	@output String
	 */
	multipleOfYRetrunBuzz(number) {
		return (number%this.numberBuzz == 0 ? "Buzz" : number.toString() );
	}
	
	/**
	 *	Creat and return an array of lenght 100 
	 *	with value 1 to 100 
	 *	if it's multiple of 3 contain Fizz
	 *	if it's multiple of 5 contain Buzz
	 *	@output [String]
	 */
	return100numbers() {
		var result = new Array();
		for (var i = 1; i <= 100; i++) {
			result.push(this.helper(i));
		}
		return result;
	}
	
	////////////////////////
	////				////
	////	VERSION 2	////
	////				////
	////////////////////////
	/**
	 *	Can transform a number in a string, if it's multiple of 5 && 3 return FizzBuzz
	 *	else number in string
	 *	@input int 
	 *	@output String
	 */
	multipleOfXAndYRetrunFizzBuzz(number) {
		if (number.toString() !== this.multipleOfXRetrunFizz(number) &&
			number.toString() !== this.multipleOfYRetrunBuzz(number) ) {
			return "FizzBuzz";
		}
		return number.toString();
	}
	
	/**
	 *	Creat and return an array of lenght 100 
	 *	with value 1 to 100 
	 *	if it's multiple of 3 contain Fizz
	 *	if it's multiple of 5 contain Buzz
	 *	if it's multiple of 3 && 5 contain FizzBuzz
	 *	@output [String]
	 */
	return100numbersV2() {
		var result = [];
		for (var i = 1; i <= 100; i++) {
			var number = this.multipleOfXAndYRetrunFizzBuzz(i);
			if (number !== i.toString()) {
				// if it was multiple of 3 and 5
				result.push(number);
				continue;
			}
			result.push(this.helper(i));
		}
		return result;
	}
	
	////////////////////////////////
	////						////
	////	HELPER 				////
	////	VERSION 1 & 2		////
	////						////
	////////////////////////////////
	/**
	 *	helper for Version 1 and 2
	 *	transform number in to string, 
	 *	if it's multiple of 3 contain Fizz
	 *	if it's multiple of 5 contain Buzz
	 *	if it's multiple of 3 contain Fizz
	 *	if it's multiple of 3 && 5 contain Fizz
	 *	else number in string
	 *	@input int 
	 *	@output String
	 */
	helper(index) {
		var number = this.multipleOfXRetrunFizz(index);
		if (number !== index.toString() ) {	
			return number;
		}
		return this.multipleOfYRetrunBuzz(index);
	}
	
	/**
	 *	Print array
	 *	@input [String]
	 */
	log(array) {
		console.log(array.toString());
	}
}

module.exports = FizzBuzz;

