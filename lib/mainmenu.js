'use strict'
//display whats going on
//get user prompts
const prompt = require('prompt')
const { pageHandler } = require('./pageHandler.js')
const { displayMainMenu } = require('./choices.js')

module.exports.mainMenu = ()=>{
 	
   displayMainMenu()

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
		  	setTimeout(function() { module.exports.mainMenu() }, 1500 ) 
		  }
  });
}

module.exports.mainMenu()
