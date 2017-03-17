'use strict'
//display whats going on
//get user prompts
const pageHandler = require('./pageHandler.js')

module.exports.mainMenu = (arg)=>{
  if(arg.length === 0) {throw new ReferenceError ('Please enter valid entry')};
 //  	switch (arg) {
	//   case '1':
	//   	pageHandler(arg)
	//   case '2':

	//   case '3':

	//   case '4':

	//   case '5':

	//   case '6':

	//   case '7':

	//   default:

	// }
	console.log(arg)
  return "1";
}
