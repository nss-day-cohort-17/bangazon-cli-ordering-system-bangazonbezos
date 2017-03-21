'use strict'
//display whats going on
//get user prompts
const prompt = require('prompt')
const { pageHandler } = require('./pageHandler.js')

module.exports.displayMainMenu = () => {
	  console.log(` *********************************************************
 **  Welcome to Bangazon! Command Line Ordering System  **
 *********************************************************`)
	console.log('1. Create a customer account')
	console.log('2. Choose active customer')
	console.log('3. Create a payment option')
	console.log('4. Add product to shopping cart')
	console.log('5. Complete an order')
	console.log('6. See product popularity')
	console.log('7. Leave Bangazon!')

	module.exports.mainMenu()
}

module.exports.mainMenu = ()=>{

  prompt.message = ''
  prompt.delimiter = ` 
>`;
  prompt.start();
	  prompt.get({
	    properties: {
	    	pageNumber:{
	    		description: 'Select Navigation'
	    	} 
	    }
	  }, function (err, result) {
	  	let arg = result.pageNumber
	    if (arg == '1' || arg == '2' || arg == '3' || arg == '4' || arg == '5' || arg == '6' || arg == '7') {
		  	pageHandler(arg)
		  } else {
		  	console.log('Please enter valid entry 1-7!')
		  	setTimeout(function() { module.exports.displayMainMenu() }, 1500 ) 
		  }
  });
}
