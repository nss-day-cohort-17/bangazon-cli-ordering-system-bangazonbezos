'use strict';

const { getCurrentObj, updateCurrentObj } = require('./currentObj.js')
const prompt = require('prompt')
const { addProductsMenu } = require('./addProductsMenu.js')

module.exports.activeCustomers = ()=>{
	// test customers (real will be from query)
	let customerList = ['John Fish', 'Clark Humphreys', 'Johnny Utah', 'Joe Shmo']

	// display customer list
	console.log('Which customer will be active?')
	for (let i = 0; i < customerList.length; i++) {
		console.log((i + 1) + '. ' + customerList[i])
	}

  prompt.message = ''
  prompt.delimiter = ` 
>`;

  prompt.start();
	  prompt.get({
	    properties: {
	    	customerNumber:{
	    		description: 'Select Customer'
	    	} 
	    }
	  }, function (err, result) {
	  	let arg = result.customerNumber
	    if (arg <= customerList.length && arg > 0) {
	    	let customerPicked = customerList[arg - 1]
	    	updateCurrentObj('firstname', customerPicked.split(' ')[0])
	    	updateCurrentObj('lastname', customerPicked.split(' ')[1])
	    	updateCurrentObj('customerPath', 'activeCustomers')
	    	addProductsMenu()
		  } else {
		  	console.log('Please provide a valid entry!')
		  	setTimeout(function() { module.exports.activeCustomers() }, 1500 ) 
		  }
  });

};
