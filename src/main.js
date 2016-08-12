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
	
	readerBuzz.on('close', (input) => {
		let fizzModulo = 3 , buzzModulo = 5;
		if (parseInt(fizzMultiplen) !== NaN && parseInt(fizzMultiplen) !== 0) {
			fizzModulo = parseInt(fizzMultiplen);
		}
		if (parseInt(buzzMultiple) !== NaN && parseInt(buzzMultiple) !== 0) {
			buzzModulo = parseInt(buzzMultiple) 
		}
		let fizzBizz = new FizzBizz(fizzModulo, buzzModulo);
		fizzBizz.log(fizzBizz.return100numbersV2());
	});
	
});



