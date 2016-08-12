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
function multipleOf3RetrunFizz(number) {
	return (number%3 == 0 ? "Fizz" : number.toString() );
}

/**
 *	Can transform a number in a string, if it's multiple of 5 return Buzz
 *	else number in string
 *	@input int 
 *	@output String
 */
function multipleOf5RetrunBuzz(number) {
	return (number%5 == 0 ? "Buzz" : number.toString() );
}

/**
 *	Creat and return an array of lenght 100 
 *	with value 1 to 100 
 *	if it's multiple of 3 contain Fizz
 *	if it's multiple of 5 contain Buzz
 *	@output [String]
 */
function return100numbers() {
	var result = new Array();
	for (var i = 1; i <= 100; i++) {
		result.push(helper(i));
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
function multipleOf3And5RetrunFizzBuzz(number) {
	if (number.toString() !== multipleOf3RetrunFizz(number) &&
		number.toString() !== multipleOf5RetrunBuzz(number) ) {
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
function return100numbersV2() {
	var result = [];
	for (var i = 1; i <= 100; i++) {
		var number = multipleOf3And5RetrunFizzBuzz(i);
		if (number !== i.toString()) {
			// if it was multiple of 3 and 5
			result.push(number);
			continue;
		}
		result.push(helper(i));
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
function helper(index) {
	var number = multipleOf3RetrunFizz(index);
	if (number !== index.toString() ) {	
		return number;
	}
	return multipleOf5RetrunBuzz(index);
}

/**
 *	Print array
 *	@input [String]
 */
function log(array) {
	console.log(array.toString());
}