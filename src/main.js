const FizzBizz = require("./fizzBuzz.js");
const Readline = require('readline')


let fizzMultiplen = "",
	buzzMultiple = "";

const readerFizz = Readline.createInterface({
											  input: process.stdin,
											  output: process.stdout
											});
readerFizz.question('Enter FIZZ multiple (enter if nonne) : ? ', (input) => {
  fizzMultiplen = input;
  readerFizz.close();
});

readerFizz.on('close', (input) => {
   const readerBuzz = Readline.createInterface({
												  input: process.stdin,
												  output: process.stdout
												});
	readerBuzz.question('Enter BUZZ multiple (enter if nonne) : ? ', (input) => {
	  buzzMultiple = input;
	  readerBuzz.close();
	});
});
/*

*/

console.log(" fizzMultiplen ", fizzMultiplen);
console.log("buzzMultiple", buzzMultiple);


