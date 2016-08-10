/*
*	Version 1
*/
function multipleOf3RetrunFizz(number) {
	return (number%3 == 0 ? "Fizz" : number.toString() );
}

function multipleOf5RetrunBuzz(number) {
	return (number%5 == 0 ? "Buzz" : number.toString() );
}

function return100numbers() {
	var result = new Array();
	for (var i = 1; i <= 100; i++) {
		result.push(helper(i));
	}
	return result;
}

/*
*	Version 2
*/
function multipleOf3And5RetrunFizzBuzz(number) {
	if (number.toString() !== multipleOf3RetrunFizz(number) &&
		number.toString() !== multipleOf5RetrunBuzz(number) ) {
		return "FizzBuzz";
	}
	return number.toString();
}

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

/*
*	helper for Version 1 and 2
*/
function helper(index) {
	var number = multipleOf3RetrunFizz(index);
	if (number !== index.toString() ) {	
		return number;
	}
	return multipleOf5RetrunBuzz(index);
}