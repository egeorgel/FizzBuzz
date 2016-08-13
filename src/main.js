const FizzBizz = require("./fizzBuzz.js");
const Readline = require('readline')


let fizzMultiplen = "",
	buzzMultiple = "";

const readerFizz = Readline.createInterface({
											  input: process.stdin,
											  output: process.stdout
											});
/// Creat reader to read Fizz multiple from stdin
readerFizz.question('Enter FIZZ multiple (enter if nonne) : ? ', (input) => {
  fizzMultiplen = input;
  readerFizz.close();
});

readerFizz.on('close', (input) => {
	/// Creat reader to read Buzz multiple from stdin ounce readerFizz is closed
   const readerBuzz = Readline.createInterface({
												  input: process.stdin,
												  output: process.stdout
												});
	readerBuzz.question('Enter BUZZ multiple (enter if nonne) : ? ', (input) => {
	  buzzMultiple = input;
	  readerBuzz.close();
	});
	
	readerBuzz.on('close', (input) => {
		let fizzBizz = new FizzBizz( (fizzMultiplen == "" || isNaN(parseInt(fizzMultiplen)))? 3 : parseInt(fizzMultiplen), 
									 (buzzMultiple == "" || isNaN(parseInt(buzzMultiple)))? 5 :parseInt(buzzMultiple) );
		fizzBizz.log(fizzBizz.return100numbersV2());
	});
	
});